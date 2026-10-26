// Smoke-checks a deployed portfolio: lists project cards, checks videos play,
// opens two popups and saves screenshots to tools/record/out/.
// usage: node verify-portfolio.js [url]
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");
const URL = process.argv[2] || "https://danban451.github.io/portfolio/";
const OUT = path.join(__dirname, "out");
fs.mkdirSync(OUT, { recursive: true });
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1792, height: 1120 } });
  p.on("pageerror", (e) => console.log("pageerror:", e.message.slice(0, 200)));
  p.on("response", (r) => { if (r.status() >= 400) console.log("http", r.status(), r.url().slice(0, 120)); });
  await p.goto(URL, { waitUntil: "networkidle" });
  await p.evaluate(() => document.getElementById("projects").scrollIntoView());
  await p.waitForTimeout(2500);
  const info = await p.evaluate(() => {
    const cards = Array.from(document.querySelectorAll("#projects h2")).map((h) => h.innerText);
    const vids = Array.from(document.querySelectorAll("#projects video")).map((v) => ({ src: v.currentSrc.split("/").pop(), playing: !v.paused, w: v.clientWidth, h: v.clientHeight, ready: v.readyState }));
    return { cards, vids };
  });
  console.log(JSON.stringify(info, null, 1));
  await p.screenshot({ path: path.join(OUT, "pf-grid.png") });
  // open DramaRama popup
  await p.click("#projects h2:has-text('DramaRama')");
  await p.waitForTimeout(2500);
  await p.screenshot({ path: path.join(OUT, "pf-popup.png") });
  const popup = await p.evaluate(() => ({ title: document.querySelector(".project-view h1")?.innerText, link: document.querySelector(".project-view a")?.href, video: !!document.querySelector(".project-view video"), perks: Array.from(document.querySelectorAll(".project-view .development ul span")).map((s) => s.innerText) }));
  console.log(JSON.stringify(popup, null, 1));
  await p.click(".exit-btn");
  await p.waitForTimeout(600);
  await p.click("#projects h2:has-text('United Homes')");
  await p.waitForTimeout(1200);
  console.log("UH link:", await p.evaluate(() => document.querySelector(".project-view a")?.href));
  await p.screenshot({ path: path.join(OUT, "pf-popup2.png") });
  await b.close();
})();
