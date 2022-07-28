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

    <Experience.Entry company="Floki Technologies" location="São Paulo, SP - Brazil" roles={
      <Experience.Role remote
                       jobType="full-time" title="Senior Software Engineer" span="MAY 2021 - CURRENT" />}>
      <Experience.JobDescription
        title="Full Stack"
        span="MAY 2021 - CURRENT"

      >
        <Experience.DescriptionItem>
          Delivered a series of features for two categories of clients which helped increase GMV by more than 300% over six months
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Helped negotiate deliverables and technical debt so our team could keep momentum while doing our best to evolve the architecture
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Built scalable and testable applications using React, Typescript and Express on top of Firebase and GCP
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Took on responsibility to onboard new members of the team getting them up to speed with tools and the domain
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Partook in feature ideations helping the team achieve feasibility in high value features
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Had responsibility mentoring more junior developers
        </Experience.DescriptionItem>
      </Experience.JobDescription>
    </Experience.Entry>

    <Experience.Entry company="Loft Brasil Tecnologia LTDA" location="São José dos Campos, SP - Brazil" roles={
      <Experience.Role title="Software Engineer" span="SEP 2019 - JAN 2021" remote={true}
                       jobType="full-time"/>}>
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
          title="Software Engineer"
          span="AUG 2018 - SEP 2019"
          remote={false}
          jobType="full-time"
        />
      }
      location="São Paulo, SP - Brazil"
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
  </Section>
);

export default Experiences;
