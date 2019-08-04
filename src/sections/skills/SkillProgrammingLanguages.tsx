import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillProgrammingLanguages = () => (
  <Skill.Cell>
    <Text.Regular>
      Programming Languages
    </Text.Regular>
    <Skill.Row name="GoLang" expertise={0.2} engagement={0.5} />
    <Skill.Row name="Python" expertise={0.2} engagement={0.5} />
    <Skill.Row name="JS/Typescript" expertise={0.2} engagement={0.5} />
    <Skill.Row name="Ruby" expertise={0.2} engagement={0.5} />
    <Skill.Row name="SQL" expertise={0.2} engagement={0.5} />
  </Skill.Cell>
);

export default SkillProgrammingLanguages;
