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
    <Education />
    <Skills />
    <Experiences />
  </Page>
);

export default Resume;
