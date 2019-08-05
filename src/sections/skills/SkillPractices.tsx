import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillPractices = () => (
  <Skill.Cell>
    <Text.Bold>
      Practices
    </Text.Bold>
    <Skill.Row name="XP" expertise={0.6} engagement={0.8} />
    <Skill.Row name="DDD" expertise={0.4} engagement={0.5} />
    <Skill.Row name="BDD" expertise={0.4} engagement={0.7} />
    <Skill.Row name="TDD" expertise={0.3} engagement={0.6} />
    <Skill.Row name="Agile" expertise={0.8} engagement={0.3} />
  </Skill.Cell>
);

export default SkillPractices;
