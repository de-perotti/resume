import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillInterests = () => (
  <Skill.Cell>
    <Text.Bold>Interests</Text.Bold>
    <Skill.Row name="Frontend" />
    <Skill.Row name="Architecture" />
    <Skill.Row name="Mobile" />
    <Skill.Row name="Data Science" />
    <Skill.Row name="Backend" />
    <Skill.Row name="DevOps" />
  </Skill.Cell>
);

export default SkillInterests;
