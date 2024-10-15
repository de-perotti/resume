import React, { HTMLAttributes } from 'react';

const PhoneNumber = ({ className }: HTMLAttributes<HTMLParagraphElement>) => (
  <a href="tel:+5511948388597" className={className}>phone: +55 11 94838-8597</a>
);

export default PhoneNumber;
