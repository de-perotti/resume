import '@assets/scss/global.scss';

import React from 'react';
import Page from '@components/page';
import Contact from '@sections/contact';
import Education from '@sections/education';
import Experiences from '@sections/experiences';
import Skills from '@sections/skills';

const Resume = () => (
  <Page>
    <Contact />
    <Experiences />
      <Education />
      <Skills />
  </Page>
);

export default Resume;
