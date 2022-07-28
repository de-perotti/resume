import React, { HTMLAttributes } from 'react';
import * as Heading from '@components/heading';
import * as Text from '@components/text';

interface CourseProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  institution: string;
  due: string;
  from: string;
  to: string;
}

const Course = ({ name, institution, due, className, from, to }: CourseProps) => (
  <div className={className}>
    <Heading.Tertiary>
      {name}
    </Heading.Tertiary>
    <Text.Regular>
      {institution}
    </Text.Regular>
    <Text.Regular>
      {due} ({from} - {to})
    </Text.Regular>
  </div>
);

export default Course;
