import './experiences.scss';
import React from 'react';
import Section from '@components/section';
import * as Heading from '@components/heading';
import * as Experience from './experience';

const Experiences = () => (
  <Section className="experiences-section">
    <Heading.Secondary className="experiences-section__heading">
      Experiences
    </Heading.Secondary>

    <Experience.Entry
      company="Quero Educação"
      roles={
        <Experience.Role
          title="Junior Mobile Developer"
          span="AUG 2018 - Today"
        />
      }
    >
      <Experience.Entries>
        <Experience.JobDescription
          title="Full Stack"
          span="FEB 2019 - Today"
        >
          <Experience.DescriptionItem>
            Creation of a platform for exams
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            API and architecture definition (NestJS e AWS)
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Implementation of Quero's Design System (React e SCSS)
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Focus on microservices, supporting the tear down of the monolith (Rails)
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Proof of Concept of a self-hosted feature flag service (Unleash)
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Presented a talk about regression testing with storybook for a meetup hosted by Quero (MeetupJS)
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Construction of documentation with Storybook
          </Experience.DescriptionItem>
        </Experience.JobDescription>

        <Experience.JobDescription
          title="React Native"
          span="AUG 2018 - FEB 2019"
        >
          <Experience.DescriptionItem>
            Rewrite of a Cordova app
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            App focused the main product
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Design of new features
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Developing a back for front (expressjs)
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Integration and creation of new APIs directly in internal services other than BFF (Rails, JS, and Elixir)
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Usage of tooling for metrics and conversion (Amplitude and Google Analytics)
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Continuous deployment (AppCenter)
          </Experience.DescriptionItem>
        </Experience.JobDescription>
      </Experience.Entries>

    </Experience.Entry>

    <Experience.Entries>
      <Experience.Entry
        company="Dr Vendedor"
        roles={
          <Experience.Role
            title="Junior Mobile Developer"
            span="MAR 2018 - AUG 2018"
          />
        }
      >

        <Experience.JobDescription
          title="React Native"
        >
          <Experience.DescriptionItem>
            Lead mobile developer of the main App
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Refactoring of legacy code to ensure faster delivers
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Application focused on the pharmaceutical market
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Design of new features
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Persistency and caching of apis with business-specific rules
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Presentation of proof of concepts for special features
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Optimization and performance of the App
          </Experience.DescriptionItem>
        </Experience.JobDescription>
      </Experience.Entry>

      <Experience.Entry
        company="Dr Tis"
        roles={
          <Experience.Role
            title="Trainee Full Stack Developer"
            span="JAN 2017 - MAR 2018"
          />
        }
      >
        <Experience.JobDescription
          title="Full Stack"
        >
          <Experience.DescriptionItem>
            Agile practices (SCRUM, PP, Lean) to set processes using tools like Jira, Bitbucket, and Slack
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Deploy and contenarization with Docker targeting AWS
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Developing UX following material design principles with the Material-UI library for React
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Construction of APIs with expressjs and sequelize supported by a PostgreSQL backend
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Basic knowledge of Kong, an API gateway
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Implementation of DICOM, https, and WebSockets protocols
          </Experience.DescriptionItem>
        </Experience.JobDescription>
      </Experience.Entry>
    </Experience.Entries>
  </Section>
);

export default Experiences;
