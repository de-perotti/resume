import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillPractices = () => (
  <Skill.Cell>
    <Text.Bold>
      Practices
    </Text.Bold>
    <Skill.Row name="Extreme Programming" />
    <Skill.Row name="Continuous Integration" />
    <Skill.Row name="Continuous Delivery" />
    <Skill.Row name="DDD" />
    <Skill.Row name="Agile" />
  </Skill.Cell>
);

export default SkillPractices;
