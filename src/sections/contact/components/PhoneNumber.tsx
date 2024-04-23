import React, { HTMLAttributes } from 'react';

const PhoneNumber = ({ className }: HTMLAttributes<HTMLParagraphElement>) => (
  <a href="tel:+17473885945" className={className}>+1 747 388 5945</a>
);

export default PhoneNumber;
