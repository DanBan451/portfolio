import { render, screen } from "@testing-library/react";
import App from "./App";
import { site, projects } from "./content";

// Smoke test: content from src/content/*.json actually renders.
test("renders hero name, section titles and every project card", () => {
  render(<App />);
  expect(screen.getAllByText(site.hero.firstName, { exact: false }).length).toBeGreaterThan(0);
  expect(screen.getAllByText(site.skills.title).length).toBeGreaterThan(0);
  expect(screen.getAllByText(site.about.heading).length).toBeGreaterThan(0);
  for (const p of projects) {
    expect(screen.getAllByText(p.title).length).toBeGreaterThan(0);
  }
});
