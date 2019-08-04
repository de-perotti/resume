import './skill-cell.scss';
import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

export const SkillCell = ({ className, children }: HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames('skill-cell', className)}>
    {children}
  </div>
);
