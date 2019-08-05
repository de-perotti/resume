import React, { HTMLAttributes } from 'react';

const PhoneNumber = ({ className }: HTMLAttributes<HTMLParagraphElement>) => (
  <a href="tel:+5511948388597" className={className}>+55 11 948388597</a>
);

export default PhoneNumber;
