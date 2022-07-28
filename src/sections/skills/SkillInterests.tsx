import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillInterests = () => (
  <Skill.Cell>
    <Text.Bold>Interests</Text.Bold>
    <Skill.Row name="UI Development" />
    <Skill.Row name="Frontend" />
    <Skill.Row name="Frontend Tooling" />
    <Skill.Row name="Architecture" />
    <Skill.Row name="Full Stack" />
    <Skill.Row name="Backend" />
  </Skill.Cell>
);

export default SkillInterests;
