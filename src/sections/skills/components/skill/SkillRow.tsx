import './skill-row.scss';
import React from 'react';
import classNames from 'classnames';
import * as Text from '@components/text';
import Meter, { MeterProps } from '@sections/skills/components/meter/Meter';

interface SkillRowProps extends MeterProps {
  name: string;
}

export const SkillRow = ({ className, name, expertise, engagement }: SkillRowProps) => (
  <div className={classNames('skill-row', className)}>
    <Text.Regular>{name}</Text.Regular>
    <Meter expertise={expertise} engagement={engagement} />
  </div>
);
