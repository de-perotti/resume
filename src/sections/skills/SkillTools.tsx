import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillTools = () => (
  <Skill.Cell>
    <Text.Bold>Tools</Text.Bold>
    <Skill.Row name="React/Native" expertise={0.9} engagement={1} />
    <Skill.Row name="HTML" expertise={0.9} engagement={1} />
    <Skill.Row name="S/CSS" expertise={0.9} engagement={1} />
    <Skill.Row name="Docker" expertise={0.5} engagement={0.7} />
    <Skill.Row name="AWS" expertise={0.4} engagement={0.8} />
    <Skill.Row name="Vue" expertise={0.6} engagement={0.3} />
    <Skill.Row name="Rails" expertise={0.3} engagement={0.8} />
  </Skill.Cell>
);

export default SkillTools;
