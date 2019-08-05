import React from 'react';
import * as Text from '@components/text';
import Meter from '@sections/skills/components/meter';
import * as Skill from '@sections/skills/components/skill';

const SkillLegend = () => (
  <Skill.Cell>
    <Text.Bold>Legend</Text.Bold>
    <Text.Regular style={{ textAlign: 'right' }}>% Knowledge/Ease</Text.Regular>
    <Meter engagement={1} expertise={1} className="skills__legend-meter" />
    <Text.Regular>Engagement %</Text.Regular>
  </Skill.Cell>
);

export default SkillLegend;
