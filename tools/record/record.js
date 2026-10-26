// Usage: node record.js <scenario.json>
// Scenario: { "name": "...", "url": "...", "width": 1280, "height": 800,
//   "steps": [ {"action":"wait","ms":1000}, {"action":"scroll","to":"bottom","duration":6000},
//              {"action":"scroll","to":0,"duration":1500}, {"action":"click","selector":"..."},
//              {"action":"goto","url":"..."}, {"action":"type","selector":"...","text":"..."},
//              {"action":"hover","selector":"..."}, {"action":"press","key":"Enter"} ] }
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const scenarioPath = process.argv[2];
if (!scenarioPath) {
  console.error("usage: node record.js scenarios/<name>.json");
  process.exit(1);
}
const scenario = JSON.parse(fs.readFileSync(scenarioPath, "utf8"));
// Default viewport = a MacBook Pro 16" logical screen (1792x1120); scaled to 1120 wide on output.
const W = scenario.width || 1792;
const H = scenario.height || 1120;
// Output next to this script (gitignored). Copy finished files to public/media/projects/.
const outDir = path.join(__dirname, "out");
fs.mkdirSync(outDir, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function smoothScroll(page, to, duration) {
  await page.evaluate(
    async ({ to, duration }) => {
      const start = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const target = to === "bottom" ? max : Math.min(to, max);
      const dist = target - start;
      const t0 = performance.now();
      await new Promise((resolve) => {
        function frame(now) {
          const p = Math.min(1, (now - t0) / duration);
          const ease = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
          window.scrollTo(0, start + dist * ease);
          if (p < 1) requestAnimationFrame(frame);
          else resolve();
        }
        requestAnimationFrame(frame);
      });
    },
    { to, duration }
  );
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: W, height: H },
    recordVideo: { dir: outDir, size: { width: W, height: H } },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  page.on("pageerror", (e) => console.log("pageerror:", e.message));
  await page.goto(scenario.url, { waitUntil: "load", timeout: 60000 });
  await sleep(scenario.initialWait || 1500);

  for (const step of scenario.steps || []) {
    try {
      switch (step.action) {
        case "wait":
          await sleep(step.ms);
          break;
        case "scroll":
          await smoothScroll(page, step.to, step.duration || 4000);
          break;
        case "click":
          await page.click(step.selector, { timeout: 8000, force: !!step.force });
          break;
        case "clickText":
          await page.getByText(step.text, { exact: !!step.exact }).first().click({ timeout: 8000 });
          break;
        case "hover":
          await page.hover(step.selector, { timeout: 8000 });
          break;
        case "type":
          await page.fill(step.selector, step.text, { timeout: 8000 });
          break;
        case "typeSlow":
          await page.click(step.selector, { timeout: 8000 });
          await page.keyboard.type(step.text, { delay: step.delay || 60 });
          break;
        case "press":
          await page.keyboard.press(step.key);
          break;
        case "goto":
          await page.goto(step.url, { waitUntil: "load", timeout: 60000 });
          break;
        case "mouse":
          await page.mouse.move(step.x, step.y, { steps: step.steps || 20 });
          if (step.click) await page.mouse.click(step.x, step.y);
          break;
        case "eval":
          await page.evaluate(step.js);
          break;
      }
    } catch (e) {
      console.log(`step failed (${step.action}):`, e.message.split("\n")[0]);
    }
  }

  const video = page.video();
  await context.close();
  await browser.close();
  const webm = await video.path();
  // MP4 (H.264) — small, high quality; the portfolio plays it as an autoplaying muted loop.
  const mp4 = path.join(outDir, `${scenario.name}.mp4`);
  const mp4Width = scenario.mp4Width || 1120; // 1792x1120 capture scaled to 1120x700
  execSync(
    `ffmpeg -y -loglevel error -i "${webm}" -an -vf "fps=24,scale=${mp4Width}:-2:flags=lanczos" -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart "${mp4}"`
  );
  console.log(`MP4: ${mp4} (${(fs.statSync(mp4).size / 1024 / 1024).toFixed(2)} MB)`);
  console.log(`next: cp "${mp4}" public/media/projects/ and reference "projects/${scenario.name}.mp4" in src/content/projects.json`);
  if (scenario.gif) {
    const gif = path.join(outDir, `${scenario.name}.gif`);
    const fps = scenario.fps || 8;
    const scale = scenario.gifWidth || 800;
    const colors = scenario.colors || 96;
    execSync(
      `ffmpeg -y -loglevel error -i "${webm}" -vf "fps=${fps},scale=${scale}:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=${colors}:stats_mode=diff[p];[s1][p]paletteuse=dither=bayer:bayer_scale=4:diff_mode=rectangle" "${gif}"`
    );
    console.log(`GIF: ${gif} (${(fs.statSync(gif).size / 1024 / 1024).toFixed(2)} MB)`);
  }
  fs.unlinkSync(webm);
})();
