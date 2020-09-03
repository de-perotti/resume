import React, { HTMLAttributes } from 'react';

const EmailAddress = ({ className }: HTMLAttributes<HTMLParagraphElement>) => (
  <a href="luigi@perotti.dev" className={className}>
    luigi@perotti.dev
  </a>
);

export default EmailAddress;
