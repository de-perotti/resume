import './experience-job-description.scss';
import React, { HTMLAttributes } from 'react';
import * as Text from '@components/text';

interface IExperienceJobDescription extends HTMLAttributes<HTMLDivElement> {
  title: string;
  span?: string;
}

export const ExperienceJobDescription = ({ title, span, children }: IExperienceJobDescription) => (
  <div className="experience-job-description">
    <div className="experience-job-description__header">
      <Text.Regular>{title}</Text.Regular>
      <Text.Regular>{span}</Text.Regular>
    </div>

    <ul>{children}</ul>
  </div>
);
