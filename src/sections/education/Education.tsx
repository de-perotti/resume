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
                from="2016"
                to="2017"
            />

    <Course
        className="education-section__course"
        name="Materials Engineering"
        institution="Mackenzie Presbyterian University"
        from="2010"
        to="2015"
    />
    </Courses>
  </Section>
);

export default Education;
