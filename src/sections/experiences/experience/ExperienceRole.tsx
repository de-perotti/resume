import './experience-role.scss';
import React, { HTMLAttributes } from 'react';
import * as Text from '@components/text';

interface ExperienceRole extends HTMLAttributes<HTMLDivElement> {
  title: string;
  span: string;
}

export const ExperienceRole = ({ title, span }: ExperienceRole) => (
  <div className="experience-role">
    <Text.Bold>{title}</Text.Bold>
    <Text.Regular>{span}</Text.Regular>
  </div>
);
