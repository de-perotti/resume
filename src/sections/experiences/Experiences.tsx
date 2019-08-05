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
            Criação de uma plataforma de exames
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Definição de APIs e arquitetura (NestJS e AWS)
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Implementação de Design System da Quero Educação (React e SCSS)
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Foco em microsserviços, auxiliando no desmembramento do monolito (Rails)
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Experimentação e construção de serviço de feature flags (Unleash)
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Elaboração de documentação com Storybook
          </Experience.DescriptionItem>
        </Experience.JobDescription>

        <Experience.JobDescription
          title="React Native"
          span="AUG 2018 - FEB 2019"
        >
          <Experience.DescriptionItem>
            Reescrita de aplicativo inicialmente em Cordova
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            App com foco no produto carro-chefe
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Design de novas features
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Desenvolvimento de Back For Front (expressjs)
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Integrações e criação de novos serviços internos (Rails, JS e Elixir)
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Uso de ferramentas para metrificar conversão e utilização (Amplitude e Google Analytics)
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Deploys contínuos (AppCenter)
          </Experience.DescriptionItem>
        </Experience.JobDescription>
      </Experience.Entries>

    </Experience.Entry>

    <Experience.Entries>
      <Experience.Entry
        company="Dr Vendedor"
        roles={
          <Experience.Role
            title="Junior Developer"
            span="MAR 2018 - AUG 2018"
          />
        }
      >

        <Experience.JobDescription
          title="React Native"
        >
          <Experience.DescriptionItem>
            Lead mobile developer do produto principal
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Refatoração de código legado para garantir entregas mais ágeis
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Aplicação focada no mercado farmacêutico
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Design de novas features
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Persistência e cacheamento de APIs com regras específicas de negócio
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Apresentação de provas de conceito para features especiais
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Otimização e performance do App
          </Experience.DescriptionItem>
        </Experience.JobDescription>
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
        >
          <Experience.DescriptionItem>
            Utilização de metodologias ágeis (SCRUM, PP, Lean) para administrar o andamento do projeto com as ferramentas de gerência Jira, Bitbucket, Slack
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Deploy e containerização via Docker targeteando serviços AWS
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Desenvolvimento UX seguindo as diretrizes Material Design com as bibliotecas Material-UI e React
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Construção de APIs em expressjs e sequelize com driver PostgreSQL
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Conhecimento básico em Kong (api gateway)
          </Experience.DescriptionItem>
          <Experience.DescriptionItem>
            Implementação de protocolos DICOM, https e websockets
          </Experience.DescriptionItem>
        </Experience.JobDescription>
      </Experience.Entry>
    </Experience.Entries>
  </Section>
);

export default Experiences;
