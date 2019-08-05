import './courses.scss';
import React, { HTMLAttributes } from 'react';

const Courses = ({ children }: HTMLAttributes<HTMLDivElement>) => (
  <div className="courses">
    {children}
  </div>
);

export default Courses;
