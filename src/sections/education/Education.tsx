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
        name="Applied Mathematics"
        institution="University of São Paulo"
        due="Incomplete, 2nd semester"
        from="jan/2016"
        to="jul/2018"
      />

      <Course
        className="education-section__course"
        name="Materials Engineering"
        institution="Mackenzie Presbyterian University"
        due="Incomplete, 9th semester"
        from="jan/2010"
        to="dec/2014"
      />
    </Courses>
  </Section>
);

export default Education;
