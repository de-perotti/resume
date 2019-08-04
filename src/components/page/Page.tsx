import './page.scss';
import React, { HTMLAttributes } from 'react';

const Page = ({ children }: HTMLAttributes<HTMLDivElement>) => (
  <div className="page">
    {children}
  </div>
);

export default Page;
