import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillProgrammingLanguages = () => (
  <Skill.Cell>
    <Text.Bold>
      Programming Languages
    </Text.Bold>
    <Skill.Row name="JS/Typescript" expertise={0.9} engagement={1} />
    <Skill.Row name="Python" expertise={0.7} engagement={0.3} />
    <Skill.Row name="GoLang" expertise={0.2} engagement={0.9} />
    <Skill.Row name="SQL" expertise={0.5} engagement={0.5} />
    <Skill.Row name="Ruby" expertise={0.4} engagement={0.8} />
  </Skill.Cell>
);

export default SkillProgrammingLanguages;
