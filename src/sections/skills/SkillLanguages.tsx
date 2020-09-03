import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillLanguages = () => (
  <Skill.Cell>
    <Text.Bold>Languages</Text.Bold>
    <Skill.Row name="English" />
    <Skill.Row name="French" />
    <Skill.Row name="Portuguese" />
  </Skill.Cell>
);

export default SkillLanguages;
