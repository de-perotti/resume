import './skills.scss';
import React from 'react';
import Section from '@components/section';
import * as Heading from '@components/heading';
import * as Skill from './components/skill';
import SkillInterests from '@sections/skills/SkillInterests';
import SkillPractices from '@sections/skills/SkillPractices';
import SkillProgrammingLanguages from '@sections/skills/SkillProgrammingLanguages';
import SkillTools from '@sections/skills/SkillTools';
import SkillLanguages from '@sections/skills/SkillLanguages';
import SkillLegend from '@sections/skills/SkillLegend';

const Skills = () => (
  <Section className="skills-section">
    <Heading.Secondary>
      Skills
    </Heading.Secondary>

    <Skill.Grid>
      <SkillInterests />
      <SkillPractices />
      <SkillProgrammingLanguages />
      <SkillTools />
      <SkillLanguages />
      <SkillLegend />
    </Skill.Grid>
  </Section>
);

export default Skills;
