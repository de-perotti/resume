import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillPractices = () => (
  <Skill.Cell>
    <Text.Bold>
      Practices
    </Text.Bold>
    <Skill.Row name="XP" />
    <Skill.Row name="CI/CD" />
    <Skill.Row name="DDD" />
    <Skill.Row name="BDD" />
    <Skill.Row name="TDD" />
    <Skill.Row name="Agile" />
  </Skill.Cell>
);

export default SkillPractices;
