import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillPractices = () => (
  <Skill.Cell>
    <Text.Regular>
      Practices
    </Text.Regular>
    <Skill.Row name="TDD" expertise={0.2} engagement={0.2} />
    <Skill.Row name="BDD" expertise={0.2} engagement={0.2} />
    <Skill.Row name="DDD" expertise={0.2} engagement={0.2} />
    <Skill.Row name="Backend" expertise={0.2} engagement={0.2} />
    <Skill.Row name="Frontend" expertise={0.2} engagement={0.2} />
    <Skill.Row name="DevOps" expertise={0.2} engagement={0.2} />
    <Skill.Row name="Mobile" expertise={0.2} engagement={0.2} />
    <Skill.Row name="Data Science" expertise={0.2} engagement={0.2} />
  </Skill.Cell>
);

export default SkillPractices;
