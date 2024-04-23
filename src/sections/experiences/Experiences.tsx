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

    <Experience.Entry
        company="Golden Entropy Marketing"
        roles={
          <Experience.Role
              title="Principal Frontend Engineer"
              span="JAN 2023 - CURRENT"
              remote={false}
              jobType="full-time"
          />
        }
        location="Los Angeles, CA - USA"
    >
      <Experience.Entries>
        <Experience.JobDescription
            title="Principal Frontend Engineer"
            span="DEC 2023 - CURRENT"
        >
          <Experience.DescriptionItem>
            Led the development of industry-changing application for capturing leads using direct acyclic graphs for dynamic form generation (NestJS, HTMX, Typescript, React, and MySQL). Development is still ongoing, next steps include the creation of a backoffice application to manage the base elements of funnels
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Pushed adoption of OpenAPI contracts and API code generation reducing change failure rate by 50% and increasing lead times by 35%. Next steps include the adoption of contract testing, most likely using pact.io
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Created a POC of a DORA metrics backend application on top of JIRA and Bitbucket APIs to track team performance and identify bottlenecks (NestJS, Typescript, and MySQL)
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Mentored other frontend leaders to manage complex projects using agreed-upon best practices and architecture patterns
          </Experience.DescriptionItem>
        </Experience.JobDescription>

        <Experience.JobDescription
            title="Senior Frontend Engineer"
            span="JAN 2023 - DEC 2023"
        >
          <Experience.DescriptionItem>
            Led the migration of a legacy application to a modern stack using a design system still in its infancy which enable new features to be developed quickly keeping lead times at an all-time low
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Established architecture patterns and best practices for the team to follow, enabling junior developers and new hires to ramp up quickly to the point of being able to contribute to the codebase by themselves
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Pushed adoption of Typescript reducing change failure rate by 80% and increasing code quality
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Defined best practices for mono repo management and CI/CD pipelines (Bitbucket, AWS - Code Build, Code Deploy, Code Pipeline, ECR, ECS, Cloudwatch), enabling the team to deploy multiple times a day with confidence
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Increased code coverage from 0% to 60% in legacy codebases
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Implemented CVE scanning in CI/CD pipelines reducing the risk of security vulnerabilities and increasing the speed of remediation
          </Experience.DescriptionItem>
        </Experience.JobDescription>
      </Experience.Entries>
    </Experience.Entry>

    <Experience.Entry company="Floki Technologies" location="São Paulo, SP - Brazil" roles={
      <Experience.Role remote
                       jobType="full-time" title="Senior Software Engineer" span="MAY 2021 - DEC 2022" />}>
      <Experience.JobDescription
        title="Full Stack"
        span="MAY 2021 - DEC 2022"
      >
        <Experience.DescriptionItem>
          Delivered a series of features for two categories of clients, such as cart management, product listing and free-tier price listing, which helped increase GMV by more than 300% over six months
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Built scalable and testable applications using React, Typescript and Express on top of Firebase and GCP
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Refined the hiring process for frontend developers from the moment they got into our hiring pipeline, which helped to reduce the time to hire from 90 days to 40 days and increased the quality of the candidates
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Nourished relationships with stakeholders and business developers in order to keep priorities aligned and to be able to deliver value to the business
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
            Implemented a series of features for realtors, such as scheduling and managing visits and their data, increasing collaborative work across teams. This lead to being able to create and scale a marketplace for home buying and selling
          </Experience.DescriptionItem>
        </Experience.JobDescription>
        <Experience.JobDescription
          title="React Native"
          span="APR 2020 - JUL 2020"
        >
          <Experience.DescriptionItem>
            Rewrote the a third-party app from scratch improving performance and maintainability, becoming a proof of concept for the current Flutter app Loft is using
          </Experience.DescriptionItem>
        </Experience.JobDescription>
      </Experience.Entries>
    </Experience.Entry>
  </Section>
);

export default Experiences;
