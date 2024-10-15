import './contact.scss';
import React from 'react';
import Section from '@components/section';
import * as Heading from '@components/heading';
import PhoneNumber from './components/PhoneNumber';
import EmailAddress from './components/EmailAddress';
import SocialLinks from './components/SocialLinks';

const Contact = () => (
  <Section className="contact-section">
      <div>
          <Heading.Primary className="contact-section__name">
              Luigi Perotti
          </Heading.Primary>
          <p style={{ marginInlineStart: '0.15rem'}}>São Paulo, SP - Brazil</p>
      </div>


    <div className="contacts-wrapper">
      <PhoneNumber className="contact-section__phone-number"/>
      <EmailAddress className="contact-section__email-address"/>
      <SocialLinks />
    </div>
  </Section>
);

export default Contact;
