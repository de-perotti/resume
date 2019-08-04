import React, { HTMLAttributes } from 'react';
import * as Text from '@components/text';

interface ExperienceJobDescription extends HTMLAttributes<HTMLDivElement> {
  title: string;
  span: string;
}

export const ExperienceJobDescription = ({ title, span, children }: ExperienceJobDescription) => (
  <div>
    <Text.Regular>
      {title}
    </Text.Regular>
    <Text.Regular>
      {span}
    </Text.Regular>
    <ul>
      {children}
    </ul>
  </div>
);
