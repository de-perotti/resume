import React from 'react';
import Section from '@components/section';
import Course from './components/Course';
import * as Heading from '@components/heading';
import Courses from '@sections/education/components/Courses';

const Education = () => (
  <Section className="education-section">
    <Heading.Secondary className="education-section__heading">
      Education
    </Heading.Secondary>


    <Courses>
      <Course
        className="education-section__course"
        name="Applied Math with emphasis on mathematical methods"
        institution="University of São Paulo"
        due="Incomplete, 2nd sem"
      />

      <Course
        className="education-section__course"
        name="Materials Engineering"
        institution="Mackenzie Presbiterian University"
        due="Incomplete, 9th sem"
      />
    </Courses>
  </Section>
);

export default Education;
