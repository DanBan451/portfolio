// Signs a Clerk *development-instance* test account into DramaRama and persists
// the session in a local browser profile (tools/record/profile-drama, gitignored)
// so drama-record.js can record authenticated screens.
//
// Credentials come from the environment — nothing is stored in the repo:
//   DRAMA_URL        base URL of the DramaRama frontend (default http://localhost:3000)
//   DRAMA_EMAIL      Clerk test email, e.g. something+clerk_test@example.com
//   DRAMA_PASSWORD   its password
//   DRAMA_OTP        verification code Clerk test emails accept (default 424242)
//
// usage: DRAMA_EMAIL=... DRAMA_PASSWORD=... node drama-signin.js
const { chromium } = require("playwright");
const path = require("path");

const BASE = process.env.DRAMA_URL || "http://localhost:3000";
const EMAIL = process.env.DRAMA_EMAIL;
const PASSWORD = process.env.DRAMA_PASSWORD;
const OTP = process.env.DRAMA_OTP || "424242";
const PROFILE = path.join(__dirname, "profile-drama");

if (!EMAIL || !PASSWORD) {
  console.error("set DRAMA_EMAIL and DRAMA_PASSWORD (Clerk dev-instance test account)");
  process.exit(1);
}

(async () => {
  const ctx = await chromium.launchPersistentContext(PROFILE, { viewport: { width: 1792, height: 1120 } });
  const page = ctx.pages()[0] || (await ctx.newPage());
  page.on("console", (m) => { if (m.type() === "error" && !/favicon|hydrat/i.test(m.text())) console.log("console:", m.text().slice(0, 160)); });

  await page.goto(`${BASE}/`, { waitUntil: "load" });
  await page.waitForTimeout(2500);
  const signedIn = async () => page.evaluate(() => !!(window.Clerk && window.Clerk.user));
  if (await signedIn()) { console.log("already signed in"); await ctx.close(); return; }

  await page.getByRole("link", { name: "Login" }).first().click();
  await page.waitForSelector(".cl-rootBox", { timeout: 20000 });
  await page.waitForTimeout(1000);

  // Try sign-in first (account may already exist).
  await page.fill('input[name="identifier"]', EMAIL);
  await page.locator(".cl-formButtonPrimary").first().click();
  await page.waitForTimeout(2500);
  const pwdVisible = await page.locator('input[name="password"]').first().isVisible().catch(() => false);
  const errText = await page.locator(".cl-formFieldErrorText").first().innerText().catch(() => "");

  const typeOtpIfAsked = async () => {
    const body = await page.evaluate(() => document.body.innerText);
    if (!/Check your email|verification code/i.test(body)) return;
    const codeInputs = page.locator('input[name="codeInput-0"], input[data-otp-input], input[autocomplete="one-time-code"], input:visible');
    if ((await codeInputs.count()) > 0) {
      await codeInputs.first().click();
      await page.keyboard.type(OTP, { delay: 80 });
      await page.waitForTimeout(6000);
    } else {
      console.log("OTP step but no visible input");
    }
  };

  if (pwdVisible && !errText) {
    await page.fill('input[name="password"]', PASSWORD);
    await page.locator(".cl-formButtonPrimary").first().click();
    await page.waitForTimeout(4000);
    await typeOtpIfAsked();
  } else {
    // Account doesn't exist yet: switch to Sign Up.
    await page.getByText("Sign Up", { exact: true }).first().click();
    await page.waitForTimeout(1500);
    await page.fill('input[name="emailAddress"]', EMAIL);
    await page.fill('input[name="password"]', PASSWORD);
    await page.locator(".cl-formButtonPrimary").first().click();
    await page.waitForTimeout(3000);
    await typeOtpIfAsked();
  }
  await page.waitForTimeout(3000);
  console.log("url:", page.url(), "signedIn:", await signedIn());
  await ctx.close();
})();
