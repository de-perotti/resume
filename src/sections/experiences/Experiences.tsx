import React from 'react';
import Section from '@components/section';
import * as Heading from '@components/heading';
import * as Experience from './experience';

const Experiences = () => (
  <Section className="experiences-section">
    <Heading.Secondary>
      Experiences
    </Heading.Secondary>

    <Experience.Entry company="Quero Educação">
      <Experience.Role
        title="Junior Mobile Developer"
        span="Ago 2018 - Today"
      />

      <Experience.JobDescription
        title="React Native"
        span="Ago 2018 - Feb 2019"
      >
        <Experience.DescriptionItem>
          Reescrita de aplicativo inicialmente emCordova
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Aplicação comfoco no produto principal
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Design de novas features
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Desenvolvimento deBack For Front
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Integrações e criação de novos serviços internos
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Uso de ferramentas parametrificar conversão e utilização
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Deploys contínuos
        </Experience.DescriptionItem>
      </Experience.JobDescription>

      <Experience.JobDescription
        title="Full Stack"
        span="Feb 2019 - Today"
      >
        <Experience.DescriptionItem>
          Criação de uma plataforma de exames
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Definição deAPIs e arquitetura
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Implementação doDesign Systemda empresa emReact
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Foco emmicrosserviços
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Experimentação e construção de serviço de feature flags
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Desenvolvimento de guidelines para uso de React para produtos da empresa
        </Experience.DescriptionItem>
      </Experience.JobDescription>
    </Experience.Entry>

    <Experience.Entry company="DrVendedor">
      <Experience.Role
        title="Junior Developer"
        span="Mar 2018 - Ago 2018"
      />

      <Experience.JobDescription
        title="React Native"
        span="Mar 2018 - Ago 2018"
      >
        <Experience.DescriptionItem>
          Leadmobile developer do produto principal
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Refatoração de código legado para comportar Redux
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Aplicação focada nomercado farmacêutico
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Design de novas features
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Persistência e cacheamento deAPIs
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Apresentação de provas de conceito para features especiais
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Otimização de renderização comChromeTools
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Elaboração de documentação comStorybook
        </Experience.DescriptionItem>
      </Experience.JobDescription>
    </Experience.Entry>

    <Experience.Entry company="Dr Tis">
      <Experience.Role title="Trainee Developer" span="Jan 2017 - Mar 2018" />

      <Experience.JobDescription title="Full Stack" span="Jan 2017 - Mar 2018">
        <Experience.DescriptionItem>
          Utilização de metodologias ágeis (SCRUM, PP, Lean) para administrar o andamento do projeto
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Ferramentas administrativas utilizadas incluem Trello, Jira, Bitbucket, Slack
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Aplicação de conhecimentos básicos nos serviços AWS (EC2 e S3)
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Administração de servidores locais de testes e remotos para implementação de cases (ssh)
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Desenvolvimento UX seguindo as diretrizes Material Design com as bibliotecas Material-UI e React
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Desenvolvimento de APIs em NodeJS
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Modelagem do banco em PostGreSQL
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Deploy e desenvolvimento com base em imagens reprodutíveis Docker
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Foco em microsserviços e deploy utilizando Docker Composer
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Conhecimento básico em Kong (administrador de microsserviços)
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Utilização de protocolo DICOM, http, https e websockets
        </Experience.DescriptionItem>
        <Experience.DescriptionItem>
          Integração com validação SSL
        </Experience.DescriptionItem>
      </Experience.JobDescription>
    </Experience.Entry>
  </Section>
);

export default Experiences;
