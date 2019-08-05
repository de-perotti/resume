import './experience-decription-item.scss';
import React, { HTMLAttributes } from 'react';

export const ExperienceDescriptionItem = ({ children }: HTMLAttributes<HTMLDivElement>) => (
  <li className="experience-decription-item">{children}</li>
);
