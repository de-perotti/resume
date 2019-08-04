import './experience-entry.scss';
import React, { HTMLAttributes } from 'react';
import * as Heading from '@components/heading';

interface ExperienceEntryProps extends HTMLAttributes<HTMLDivElement> {
  company: string;
}

export const ExperienceEntry = ({ children, company }: ExperienceEntryProps) => (
  <div className="experience-entry">
    <Heading.Tertiary>
      {company}
    </Heading.Tertiary>
    {children}
  </div>
);
