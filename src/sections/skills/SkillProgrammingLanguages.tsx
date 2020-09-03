import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillProgrammingLanguages = () => (
  <Skill.Cell>
    <Text.Bold>
      Programming
    </Text.Bold>
    <Skill.Row name="Typescript" />
    <Skill.Row name="Python" />
    <Skill.Row name="SQL" />
    <Skill.Row name="Go" />
    <Skill.Row name="HTML" />
    <Skill.Row name="S/CSS" />
  </Skill.Cell>
);

export default SkillProgrammingLanguages;
