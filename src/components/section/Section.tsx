import './section.scss'
import React, { HTMLAttributes } from 'react';

const Section = ({ children }: HTMLAttributes<HTMLDivElement>) => (
  <section className="section">
    {children}
  </section>
);

export default Section;
