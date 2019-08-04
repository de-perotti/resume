import React from 'react';
import Section from '@components/section';
import Course from './components/Course';

const Education = () => (
  <Section className="education-section">
    <Course
      name="Matemática Aplicada ênfase em métodos matemáticos"
      institution="Universidade de São Paulo"
      due="Incompleto 2o. Sem"
    />
    <Course
      name="Engenharia de Materiais"
      institution="Universidade Presbiteriana Mackenzie"
      due="Incompleto 9o. Sem"
    />
  </Section>
);

export default Education;
