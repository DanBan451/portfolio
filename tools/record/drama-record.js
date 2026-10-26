// Records the DramaRama demo (public/media/projects/dramarama.mp4).
//
// Unlike record.js this drives an authenticated, LLM-backed app, so it waits
// for streamed replies and speeds the result up to ~50 s. Run drama-signin.js
// first to create tools/record/profile-drama with a signed-in session.
//
//   DRAMA_URL        frontend base URL (default http://localhost:3000)
//   DRAMA_WORKSPACE  id of an existing workspace whose canvas should be shown
//   DRAMA_TARGET_S   target output length in seconds (default 50)
//
// usage: DRAMA_WORKSPACE=<uuid> node drama-record.js
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const BASE = process.env.DRAMA_URL || "http://localhost:3000";
const WS = process.env.DRAMA_WORKSPACE;
const TARGET_S = Number(process.env.DRAMA_TARGET_S || 50);
const PROFILE = path.join(__dirname, "profile-drama");
const OUT = path.join(__dirname, "out");
const W = 1792, H = 1120;
fs.mkdirSync(OUT, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => console.log(new Date().toISOString().slice(11, 19), ...a);
const step = async (name, fn) => { try { log("step:", name); await fn(); } catch (e) { log("step failed:", name, "-", e.message.split("\n")[0].slice(0, 160)); } };

async function smoothScroll(page, to, duration) {
  await page.evaluate(async ({ to, duration }) => {
    const start = window.scrollY; const max = document.documentElement.scrollHeight - window.innerHeight;
    const target = to === "bottom" ? max : Math.min(to, max); const dist = target - start; const t0 = performance.now();
    await new Promise((resolve) => { function f(now) { const p = Math.min(1, (now - t0) / duration); const e = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p; window.scrollTo(0, start + dist * e); if (p < 1) requestAnimationFrame(f); else resolve(); } requestAnimationFrame(f); });
  }, { to, duration });
}
// Wait until the page text stops changing (streamed LLM reply finished).
async function waitForReply(page, maxSec = 60) {
  let prev = ""; let stable = 0;
  for (let t = 0; t < maxSec / 1.5; t++) {
    await sleep(1500);
    const txt = await page.evaluate(() => document.body.innerText);
    if (txt === prev) stable++; else stable = 0; prev = txt;
    if (stable >= 2) break;
  }
}
async function typeIn(page, locator, text, delay = 16) {
  await locator.click({ timeout: 10000 }); await page.keyboard.type(text, { delay }); await sleep(400); await page.keyboard.press("Enter");
}

(async () => {
  if (!fs.existsSync(PROFILE)) { console.error("no signed-in profile; run drama-signin.js first"); process.exit(1); }
  const ctx = await chromium.launchPersistentContext(PROFILE, {
    viewport: { width: W, height: H }, deviceScaleFactor: 1,
    recordVideo: { dir: OUT, size: { width: W, height: H } },
  });
  const page = ctx.pages()[0] || (await ctx.newPage());

  await step("home", async () => {
    await page.goto(`${BASE}/home`, { waitUntil: "load" }); await sleep(2000);
    await smoothScroll(page, 1400, 3000); await sleep(600);
  });
  await step("advisors", async () => {
    await page.goto(`${BASE}/the-practice`, { waitUntil: "load" }); await sleep(2500);
    await smoothScroll(page, 1600, 3500); await sleep(600);
  });
  await step("intake", async () => {
    await page.goto(`${BASE}/workspace/new`, { waitUntil: "load" }); await sleep(4000);
    await typeIn(page, page.locator("textarea").first(), "I keep saying yes to every freelance client. Now I'm overbooked, my quality is slipping, and I can't tell which projects I should actually keep.");
    await waitForReply(page, 45); await sleep(1200);
    await typeIn(page, page.locator("textarea").first(), "Every project matters for a different reason — one pays well, one is for a friend, one could lead to referrals. I have no way to compare them.");
    await waitForReply(page, 45); await sleep(2000);
  });
  if (WS) {
    await step("canvas", async () => {
      await page.goto(`${BASE}/workspace/${WS}`, { waitUntil: "load" });
      await page.waitForSelector('div[role="dialog"]', { timeout: 90000 });
      await sleep(3500);
      const dlg = page.locator('div[role="dialog"]');
      await dlg.getByRole("button").last().click({ timeout: 8000 });
      await sleep(1000);
      if ((await page.locator('div[role="dialog"]').count()) > 0) { await page.keyboard.press("Escape"); await sleep(800); }
      await waitForReply(page, 30); await sleep(1000);
    });
    await step("ask advisor", async () => {
      const ask = page.locator("textarea").last();
      await ask.scrollIntoViewIfNeeded().catch(() => {});
      await typeIn(page, ask, "Which project should I follow to its end first?");
      await waitForReply(page, 40); await sleep(2000);
    });
    await step("zoom out", async () => {
      await page.getByRole("button", { name: "−" }).click({ timeout: 4000 }); await sleep(600);
      await page.getByRole("button", { name: "−" }).click({ timeout: 4000 }); await sleep(2500);
    });
  } else {
    log("DRAMA_WORKSPACE not set; skipping canvas steps");
  }

  const video = page.video();
  await ctx.close();
  const webm = await video.path();
  const dur = parseFloat(execSync(`ffprobe -v error -show_entries format=duration -of csv=p=0 "${webm}"`).toString());
  const speed = Math.max(1, dur / TARGET_S);
  const mp4 = path.join(OUT, "dramarama.mp4");
  execSync(`ffmpeg -y -loglevel error -i "${webm}" -an -vf "setpts=PTS/${speed.toFixed(3)},fps=24,scale=1120:-2:flags=lanczos" -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart "${mp4}"`);
  fs.unlinkSync(webm);
  log(`raw ${dur.toFixed(1)}s, speed x${speed.toFixed(2)} -> MP4: ${mp4} (${(fs.statSync(mp4).size / 1024 / 1024).toFixed(2)} MB)`);
})();
