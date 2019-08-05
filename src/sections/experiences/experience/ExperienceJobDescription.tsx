import './experience-job-description.scss';
import React, { HTMLAttributes } from 'react';
import * as Text from '@components/text';

interface ExperienceJobDescription extends HTMLAttributes<HTMLDivElement> {
  title: string;
  span?: string;
}

export const ExperienceJobDescription = ({ title, span, children }: ExperienceJobDescription) => (
  <div className="experience-job-description">
    <div className="experience-job-description__header">
      <Text.Regular>{title}</Text.Regular>
      <Text.Regular>{span}</Text.Regular>
    </div>

    <ul>{children}</ul>
  </div>
);
