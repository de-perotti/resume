import "./skills.scss";
import React from "react";
import Section from "@components/section";
import * as Heading from "@components/heading";
import * as Skill from "./components/skill";
import SkillFocus from "@sections/skills/SkillFocus";
import SkillProcesses from "@sections/skills/SkillProcesses";
import SkillProgrammingLanguages from "@sections/skills/SkillProgrammingLanguages";
import SkillLanguages from "@sections/skills/SkillLanguages";
import SkillFrameworks from "@sections/skills/SkillFrameworks";

const Skills = () => (
  <Section className="skills-section">
    <Heading.Secondary>Skills</Heading.Secondary>
    <Skill.Grid>
      <SkillFocus />
      <SkillProcesses />
      <SkillProgrammingLanguages />
      <SkillFrameworks />
      <SkillLanguages />
    </Skill.Grid>
  </Section>
);

export default Skills;
