import './experience-role.scss';
import React, { HTMLAttributes } from 'react';
import * as Text from '@components/text';

interface IExperienceRole extends HTMLAttributes<HTMLDivElement> {
  title: string;
  span: string;
}

export const ExperienceRole = ({ title, span }: IExperienceRole) => (
  <div className="experience-role">
    <Text.Bold>{title}</Text.Bold>
    <Text.Regular>{span}</Text.Regular>
  </div>
);
