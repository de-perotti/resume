import "@assets/scss/global.scss";

import React from "react";
import Page from "@components/page";
import Contact from "@sections/contact";
import Experiences from "@sections/experiences";
import Skills from "@sections/skills";
import Education from "@sections/education";

const Resume = () => (
  <Page>
    <Contact />
    <Experiences />
    <Education />
    <Skills />
  </Page>
);

export default Resume;
