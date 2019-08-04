import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillTools = () => (
  <Skill.Cell>
    <Text.Regular>
      Tools
    </Text.Regular>
    <Skill.Row name="React" expertise={0.9} engagement={1} />
  </Skill.Cell>
);

export default SkillTools;
