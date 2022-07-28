import './experience-entry.scss';
import React, { HTMLAttributes } from 'react';
import * as Heading from '@components/heading';

interface ExperienceEntryProps extends HTMLAttributes<HTMLDivElement> {
  company: string;
  roles: React.ReactComponentElement<any, any>;
  location: string
}

export const ExperienceEntry = ({ children, company, roles, location }: ExperienceEntryProps) => (
  <div className="experience-entry">
    <div className="experience-entry__header">
      <Heading.Tertiary className="experience-entry__heading">
        {company}  <span className="experience-entry__heading--location">- {location}</span>
      </Heading.Tertiary>
      {roles}
    </div>
    {children}
  </div>
);
