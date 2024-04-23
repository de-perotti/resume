import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillTools = () => (
  <Skill.Cell>
    <Text.Bold>Tools</Text.Bold>
    <Skill.Row name="Docker" />
    <Skill.Row name="AWS" />
    <Skill.Row name="GCP" />
    <Skill.Row name="Firebase" />
  </Skill.Cell>
);

export default SkillTools;
