import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillFrameworks = () => (
  <Skill.Cell>
    <Text.Bold>Frameworks</Text.Bold>
    <Skill.Row name="React" />
    <Skill.Row name="React-Native" />
    <Skill.Row name="NextJS" />
    <Skill.Row name="NestJS" />
  </Skill.Cell>
);

export default SkillFrameworks;
