import './section.scss'
import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

const Section = ({ children, className }: HTMLAttributes<HTMLDivElement>) => (
  <section className={classNames('section', className)}>
    {children}
  </section>
);

export default Section;
