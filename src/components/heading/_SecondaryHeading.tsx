import './secondary-heading.scss';
import { makeHeading } from './Heading';
import React, { HTMLAttributes } from 'react';

const Heading = makeHeading('h2', 'secondary-heading');

export const SecondaryHeading = (props: HTMLAttributes<HTMLHeadingElement>) => {
  return <Heading {...props} />
}
