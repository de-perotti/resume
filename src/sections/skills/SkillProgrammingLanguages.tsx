import React from "react";
import * as Skill from "@sections/skills/components/skill";
import * as Text from "@components/text";

const SkillProgrammingLanguages = () => (
  <Skill.Cell>
    <Text.Bold>Code</Text.Bold>
    <Skill.Row name="Typescript | Node" />
    <Skill.Row name="HTML | JS | CSS" />
    <Skill.Row name="SQL" />
    <Skill.Row name="Go" />
    <Skill.Row name="Python" />
  </Skill.Cell>
);

export default SkillProgrammingLanguages;
