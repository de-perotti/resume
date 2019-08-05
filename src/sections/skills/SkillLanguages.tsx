import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillLanguages = () => (
  <Skill.Cell>
    <Text.Bold>Languages</Text.Bold>
    <Skill.Row name="English" expertise={0.8} engagement={0.9} />
    <Skill.Row name="French" expertise={0.3} engagement={0.6} />
    <Skill.Row name="Spanish" expertise={0.2} engagement={0.2} />
  </Skill.Cell>
);

export default SkillLanguages;
