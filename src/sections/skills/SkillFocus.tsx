import React from "react";
import * as Skill from "@sections/skills/components/skill";
import * as Text from "@components/text";

const SkillFocus = () => (
  <Skill.Cell>
    <Text.Bold>Specialization</Text.Bold>
    <Skill.Row name="Frontend" />
    <Skill.Row name="Full Stack" />
    <Skill.Row name="DX" />
    <Skill.Row name="Backend" />
  </Skill.Cell>
);

export default SkillFocus;
