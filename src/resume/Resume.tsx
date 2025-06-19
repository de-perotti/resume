import "@assets/scss/global.scss";

import React from "react";
import Page from "@components/page";
import Contact from "@sections/contact";
import Experiences from "@sections/experiences";
import Skills from "@sections/skills";
import Education from "@sections/education";
import RidiculousMode from "../components/ridiculous/RidiculousMode";

const Resume = () => (
  <Page>
    <Contact />
    <Experiences />
    <Education />
    <Skills />
    <RidiculousMode />
  </Page>
);

export default Resume;
