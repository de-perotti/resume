import React, { HTMLAttributes } from 'react';

const EmailAddress = ({ className }: HTMLAttributes<HTMLParagraphElement>) => (
  <a href="mailto:luigi@perotti.dev?subject=Greetings" className={className}>
    luigi@perotti.dev
  </a>
);

export default EmailAddress;
