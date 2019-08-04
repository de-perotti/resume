import '@assets/scss/global.scss';

import React from 'react';
import Page from '@components/page';
import Divider from '@components/divider';
import Contact from '@sections/contact';
import Education from '@sections/education';
import Experiences from '@sections/experiences';
import Skills from '@sections/skills';

const Resume = () => (
  <Page>
    <Contact />
    <Divider />

    <Education />
    <Divider />

    <Skills />
    <Divider />

    <Experiences />
  </Page>
);

export default Resume;
