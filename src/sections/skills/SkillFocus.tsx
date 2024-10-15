import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillFocus = () => (
    <Skill.Cell>
        <Text.Bold>Focus</Text.Bold>
        <Skill.Row name="Frontend"/>
        <Skill.Row name="Architecture"/>
        <Skill.Row name="UX"/>
        <Skill.Row name="Full Stack"/>
        <Skill.Row name="Tooling"/>
    </Skill.Cell>
);

export default SkillFocus;
