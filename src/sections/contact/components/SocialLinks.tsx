import React, { HTMLAttributes } from 'react';

const SocialLinks = ({ className }: HTMLAttributes<HTMLDivElement>) => (
  <div className={className}>
    <p>@perottilds</p>
    <a href="https://github.com/perottilds">
      <i className="fa fa-github-square"></i>
    </a>
    <a href="https://bitbucket.org/perottilds">
      <i className="fa fa-bitbucket"></i>
    </a>
    <a href="https://www.linkedin.com/in/perottilds/">
      <i className="fa fa-linkedin"></i>
    </a>
  </div>
);

export default SocialLinks;
