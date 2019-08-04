import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillLanguages = () => (
  <Skill.Cell>
    <Text.Regular>
      Languages
    </Text.Regular>
    <Skill.Row name="English" expertise={0.8} engagement={0.9} />
    <Skill.Row name="French" expertise={0.2} engagement={0.5} />
    <Skill.Row name="Spanish" expertise={0.2} engagement={0.2} />
  </Skill.Cell>
);

export default SkillLanguages;
