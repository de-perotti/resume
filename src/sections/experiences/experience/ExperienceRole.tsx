import './experience-role.scss';
import React, { HTMLAttributes } from 'react';
import * as Text from '@components/text';

interface IExperienceRole extends HTMLAttributes<HTMLDivElement> {
  remote: boolean;
  jobType: 'full-time'
}

export const ExperienceRole = ({  remote, jobType }: IExperienceRole) => (
  <span className="experience-role">
    <Text.Bold><span style={{ fontSize: '0.8rem'} }>{remote ? 'remote' : 'on-site'} {jobType}</span></Text.Bold>
  </span>
);
