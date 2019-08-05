import './contact.scss';
import React from 'react';
import Section from '@components/section';
import * as Heading from '@components/heading';
import PhoneNumber from './components/PhoneNumber';
import EmailAddress from './components/EmailAddress';
import SocialLinks from './components/SocialLinks';

const Contact = () => (
  <Section className="contact-section">
    <Heading.Primary className="contact-section__name">
      Luigi de Souza Perotti
    </Heading.Primary>

    <div className="contacts-wrapper">
      <PhoneNumber className="contact-section__phone-number"/>
      <EmailAddress className="contact-section__email-address"/>
      <SocialLinks />
    </div>
  </Section>
);

export default Contact;
