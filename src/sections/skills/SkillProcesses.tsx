import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillProcesses = () => (
  <Skill.Cell>
    <Text.Bold>
      Processes
    </Text.Bold>
    <Skill.Row name="Kanban" />
    <Skill.Row name="TDD" />
    <Skill.Row name="Async Communication" />
    <Skill.Row name="Agile" />
    <Skill.Row name="DevOps" />
  </Skill.Cell>
);

export default SkillProcesses;
