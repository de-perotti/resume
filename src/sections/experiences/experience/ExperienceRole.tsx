import './experience-role.scss';
import React, { HTMLAttributes } from 'react';
import * as Text from '@components/text';

interface IExperienceRole extends HTMLAttributes<HTMLDivElement> {
  title: string;
  span: string;
  remote: boolean;
  jobType: 'full-time'
}

export const ExperienceRole = ({ title, span, remote, jobType }: IExperienceRole) => (
  <div className="experience-role">
    <Text.Bold>{title} <span style={{ fontSize: '0.8rem', letterSpacing: '2px'} }> - {remote ? 'remote' : 'on-site'} {jobType}</span></Text.Bold>
    <Text.Regular>{span}</Text.Regular>
  </div>
);
