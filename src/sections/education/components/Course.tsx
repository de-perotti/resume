import React, { HTMLAttributes } from 'react';
import * as Heading from '@components/heading';
import * as Text from '@components/text';

interface CourseProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  institution: string;
  due: string;
}

const Course = ({ name, institution, due }: CourseProps) => (
  <div>
    <Heading.Tertiary>
      {name}
    </Heading.Tertiary>
    <Text.Regular>
      {institution}
    </Text.Regular>
    <Text.Regular>
      {due}
    </Text.Regular>
  </div>
);

export default Course;
