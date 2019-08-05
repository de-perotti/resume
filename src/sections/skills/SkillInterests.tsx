import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillInterests = () => (
  <Skill.Cell>
    <Text.Bold>Interests</Text.Bold>
    <Skill.Row name="Frontend" expertise={0.8} engagement={0.9} />
    <Skill.Row name="Architecture" expertise={0.5} engagement={0.9} />
    <Skill.Row name="Mobile" expertise={0.8} engagement={0.3} />
    <Skill.Row name="Data Science" expertise={0.2} engagement={0.5} />
    <Skill.Row name="Backend" expertise={0.6} engagement={0.6} />
    <Skill.Row name="DevOps" expertise={0.3} engagement={0.4} />
  </Skill.Cell>
);

export default SkillInterests;
