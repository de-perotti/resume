import './experience-entry.scss';
import React, { HTMLAttributes } from 'react';
import * as Heading from '@components/heading';

interface ExperienceEntryProps extends HTMLAttributes<HTMLDivElement> {
  company: string;
  roles: React.ReactComponentElement<any, any>;
}

export const ExperienceEntry = ({ children, company, roles }: ExperienceEntryProps) => (
  <div className="experience-entry">
    <div className="experience-entry__header">
      <Heading.Tertiary className="experience-entry__heading">
        {company}
      </Heading.Tertiary>
      {roles}
    </div>
    {children}
  </div>
);
