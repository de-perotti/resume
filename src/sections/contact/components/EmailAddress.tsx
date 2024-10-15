import React, { HTMLAttributes } from 'react';

const EmailAddress = ({ className }: HTMLAttributes<HTMLParagraphElement>) => (
  <a href="mailto:perottilds@gmail.com" className={className}>
      perottilds@gmail.com
  </a>
);

export default EmailAddress;
