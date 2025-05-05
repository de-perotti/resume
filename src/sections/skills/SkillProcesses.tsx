import React from "react";
import * as Skill from "@sections/skills/components/skill";
import * as Text from "@components/text";

const SkillProcesses = () => (
  <Skill.Cell>
    <Text.Bold>Processes</Text.Bold>
    <Skill.Row name="DDD" />
    <Skill.Row name="DevOps" />
    <Skill.Row name="Documentation" />
    <Skill.Row name="Agile" />
  </Skill.Cell>
);

export default SkillProcesses;
