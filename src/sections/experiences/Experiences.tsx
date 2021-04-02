import './experiences.scss';
import React from 'react';
import Section from '@components/section';
import * as Heading from '@components/heading';
import * as Experience from './experience';

const Experiences = () => (
  <Section className="experiences-section">
    <Heading.Secondary className="experiences-section__heading">
      Experience
    </Heading.Secondary>

    <Experience.Entry company="Loft Brasil Tecnologia LTDA" roles={<Experience.Role title="Software Engineer" span="SEP 2019 - JAN 2021" />}>
      <Experience.Entries>
        <Experience.JobDescription
          title="Full Stack"
          span="SEP 2019 - JAN 2021"
        >
          <Experience.DescriptionItem>
            Instructed backend-oriented colleagues to develop frontend skills so they could be more autonomous
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Helped develop, build, and connect a number of microservices to enable product development
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Got involved in several discussions for product development resulting in better synergy between engineering and product
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Wrote a unit test cookbook to help developers not familiar with testing to ship better
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Kept track of health product and engineering metrics
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Helped define and build the frontend architecture by coming up with problems and possible solutions while aiming for overall better productivity and scalability
          </Experience.DescriptionItem>
        </Experience.JobDescription>

        <Experience.JobDescription
          title="React Native"
          span="APR 2020 - JUL 2020"
        >
          <Experience.DescriptionItem>
            Deprecated a third party app that made deploy of new features harder and more expensive
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Decided on React Native after coming up with proof of concepts on both RN and Flutter for performance issues with webview
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Implemented the new app as a webview so we can be fast with testing and deployment while maintaining visual consistency without requiring too much maintenance
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Implemented a new step in the deploy pipeline to statically check for possibly breaking features because of compatibilities with older devices
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            I had the opportunity to contribute React Native open source libraries
          </Experience.DescriptionItem>
        </Experience.JobDescription>
      </Experience.Entries>
    </Experience.Entry>

    <Experience.Entry
      company="Quero Educação"
      roles={
        <Experience.Role
          title="Junior Mobile Developer"
          span="AUG 2018 - SEP 2019"
        />
      }
    >
      <Experience.Entries>
        <Experience.JobDescription
          title="Full Stack"
          span="FEB 2019 - SEP 2019"
        >
          <Experience.DescriptionItem>
            Helped create a platform for exams
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Helped define the implementation of the product's architecture
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Implemented Quero's Design System with React
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Focused on microservices, supporting the initial tear down of the monolith
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Presented a proof of concept for a self-hosted feature flag service
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Presented a talk about regression testing with storybook for a meetup hosted by Quero
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Constructed and introduced documentation with Storybook
          </Experience.DescriptionItem>
        </Experience.JobDescription>

        <Experience.JobDescription
          title="React Native"
          span="AUG 2018 - FEB 2019"
        >
          <Experience.DescriptionItem>
            Rewrote a Cordova app focused the main product
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Helped design new features
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Developed a backend for frontend
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Integrated and created new APIs directly in internal services other than BFF
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Used tooling for metrics and conversion
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Developed using continuous integration
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
        />
      </Experience.Entry>

      <Experience.Entry
        company="Dr Tis"
        roles={
          <Experience.Role
            title="Trainee Developer"
            span="JAN 2017 - MAR 2018"
          />
        }
      >
        <Experience.JobDescription
          title="Full Stack"
        />
      </Experience.Entry>
    </Experience.Entries>
  </Section>
);

export default Experiences;
