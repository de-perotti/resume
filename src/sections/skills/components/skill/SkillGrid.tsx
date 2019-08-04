import './skill-grid.scss';
import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

export const SkillGrid = ({ className, children }: HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames('skill-grid', className)}>
    {children}
  </div>
);
