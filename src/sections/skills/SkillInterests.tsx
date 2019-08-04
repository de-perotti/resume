import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillInterests = () => (
  <Skill.Cell>
    <Text.Regular>
      Interests
    </Text.Regular>
    <Skill.Row name="Web Dev" expertise={0.9} engagement={1} />
    <Skill.Row name="Data Science" expertise={0.9} engagement={1} />
    <Skill.Row name="Data Science" expertise={0.9} engagement={1} />
  </Skill.Cell>
);

export default SkillInterests;
