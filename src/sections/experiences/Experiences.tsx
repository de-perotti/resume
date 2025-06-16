import "./experiences.scss";
import React from "react";
import Section from "@components/section";
import * as Heading from "@components/heading";
import * as Experience from "./experience";

const Experiences = () => (
  <Section className="experiences-section">
    <Heading.Secondary className="experiences-section__heading">
      Work History
    </Heading.Secondary>
    <Experience.Entry
      company="TerraMagna"
      location="São José dos Campos, SP - Brazil"
      roles={<Experience.Role remote jobType="full-time" />}
    >
      <Experience.JobDescription
        title="Senior Software Engineer"
        span="OCT 2024 - MAY 2025"
      >
        <Experience.DescriptionItem>
          Feature development that replaced critical workflows handled by tools
          like Pipefy, streamlining operations within the platform and enabling
          a phased migration that projected $50K+ in annual savings
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Strategic leadership in modernizing the frontend monorepo, driving adoption
          of scalable architecture patterns, well-documented best practices, and
          high-quality example implementations; laying the groundwork for faster
          development, easier onboarding, and long-term maintainability
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Internal tooling development for tracking migration progress over time,
          providing visibility and accountability across multiple teams
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Frontend cycle time reduction by 10–20% through automation of
          integration code generation and systematic adoption of shared
          standards and templates along with a formalized RFC and design
          documentation process, improving technical alignment and reducing
          rework across cross-functional teams
        </Experience.DescriptionItem>
      </Experience.JobDescription>
    </Experience.Entry>
    <Experience.Entry
      company="Golden Entropy Marketing, Inc dba EPCVIP"
      roles={
        <Experience.Role
          title="Principal Frontend Engineer"
          remote={false}
          jobType="full-time"
        />
      }
      location="Los Angeles, CA - USA"
    >
      <Experience.Entries>
        <Experience.JobDescription
          title="Principal Frontend Engineer"
          span="DEC 2023 - SEP 2024"
        >
          <Experience.DescriptionItem>
            Change failure rate reduction by 50% and lead time improvement by 35%
            through establishment of communication channels that promoted the adoption of
            OpenAPI contracts and API code generation
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Leadership in ideation and development of a proof of concept for an
            industry-changing application for capturing leads using direct
            acyclic graphs for dynamic forms generation (NestJS, HTMX,
            Typescript, React, and MySQL), leveraging technical expertise and
            collaboration skills to bring the project to life. Adaptability
            allowed the team to adjust the approach mid-stream to accommodate
            changing requirements
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            SOC 2 readiness achievement for applications through risk reduction of
            security vulnerabilities and increased remediation speed with
            implementation of automated checks during integration steps
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Cycle time reduction by 15% through team focus on
            problematic workflows such as peer review time, enabled by
            implementation of a DORA metrics application on top of JIRA
            and Bitbucket APIs (NestJS, Typescript, and MySQL)
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Successfully mentored an intern into a junior position in the span
            of less than a year, demonstrating leadership skills and a passion
            for growth. Provided constructive feedback and support the
            development of my team utilizing emotional intelligence members
          </Experience.DescriptionItem>
        </Experience.JobDescription>

        <Experience.JobDescription
          title="Senior Frontend Engineer"
          span="JAN 2023 - DEC 2023"
        >
          <Experience.DescriptionItem>
            Legacy application migration leadership to a modern stack on top
            of a design system which enabled new features to be developed
            quickly keeping lead times at an all-time low
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Architecture patterns and best practices establishment, enabling
            junior developers and new hires to ramp up quickly to enough
            self-sufficiency, utilizing instructional design principles to
            develop training materials and support the onboarding process,
            showcasing my ability to communicate complex concepts simply
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Typescript adoption initiative reducing change failure rate by 80%
            and increasing code quality, demonstrating a commitment to best
            practices and continuous learning. Problem-solving skills were
            necessary to identify and address technical debt, leading to
            improved overall project health
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Defined best practices for monorepo management and CI/CD pipelines
            (Bitbucket, AWS - Code Build, Code Deploy, Code Pipeline, ECR, ECS,
            Cloudwatch), enabling the team to deploy multiple times a day with
            confidence
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Increased code coverage from 0% to 60% in legacy codebases,
            decreasing the amount of rework by up to 60% in features that
            displayed more churn, showcasing my ability to identify areas for
            improvement and drive positive change
          </Experience.DescriptionItem>
        </Experience.JobDescription>
      </Experience.Entries>
    </Experience.Entry>
    <Experience.Entry
      company="Floki Technologies"
      location="São Paulo, SP - Brazil"
      roles={<Experience.Role remote jobType="full-time" />}
    >
      <Experience.JobDescription
        title="Senior Full-stack Software Engineer"
        span="MAY 2021 - DEC 2022"
      >
        <Experience.DescriptionItem>
          GMV growth of more than 300% over 6 months through implementation of a series
          of features, such as cart management, product listing, and free-tier
          price listing, utilizing business understanding and analytical skills
          to drive revenue growth
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Development of scalable and testable applications using React, Typescript and
          Express on top of Firebase and GCP
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Time-to-hire reduction from 90 days to 40 days and candidate quality improvement
          through refinement of the hiring process for frontend
          developers from the moment they got into our hiring pipeline,
          demonstrating leadership skills and a commitment to process
          improvement. Emotional intelligence was required to support the growth
          and development of the team members
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Nourished relationships with stakeholders and business developers in
          order to keep priorities aligned and to be able to deliver value to
          the business
        </Experience.DescriptionItem>
      </Experience.JobDescription>
    </Experience.Entry>
  </Section>
);

export default Experiences;
