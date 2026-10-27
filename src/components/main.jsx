import React, { useCallback, useState } from "react";
import Nav from "./nav";
import Hero from "./hero";
import Skills from "./skills";
import Work from "./work";
import Experience from "./experience";
import About from "./about";
import Contact from "./contact";
import ProjectDialog from "./projectdialog";

export default function Main() {
  const [openId, setOpenId] = useState(null);
  const close = useCallback(() => setOpenId(null), []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Work onOpen={setOpenId} />
        <Experience onOpen={setOpenId} />
        <About />
      </main>
      <Contact />
      <ProjectDialog projectId={openId} onClose={close} />
    </>
  );
}
