import React from 'react';
import Section from '@components/section';
import Course from './components/Course';
import * as Heading from '@components/heading';

const Education = () => (
  <Section className="education-section">
    <Heading.Secondary className="education-section__heading">
      Education
    </Heading.Secondary>

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
  </Section>
);

export default Education;
