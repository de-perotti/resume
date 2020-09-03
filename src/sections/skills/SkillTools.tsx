import React from 'react';
import * as Skill from '@sections/skills/components/skill';
import * as Text from '@components/text';

const SkillTools = () => (
  <Skill.Cell>
    <Text.Bold>Tools</Text.Bold>
    <Skill.Row name="RabbitMQ" />
    <Skill.Row name="Bitbucket Pipelines" />
    <Skill.Row name="Docker" />
    <Skill.Row name="docker-compose" />
    <Skill.Row name="AWS" />
  </Skill.Cell>
);

export default SkillTools;
