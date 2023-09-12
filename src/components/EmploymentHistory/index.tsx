'use client';
import {Grid} from '@chakra-ui/react';
import {EmploymentHistoryItem} from './EmploymentHistoryItem';

import './index.css';

export const EmploymentHistory = () => {
  const employmentList = [
    {
      key: 'stubhub',
      company: 'Stubhub International',
      role: 'Senior Front-End developer (Junio 2022 - actualidad)',
      description:
        'Desarrollador front end senior para plataforma de ticketing. Mantenimiento y desarrollo de nueva funcionalidad con React.',
      image: {
        src: 'https://res.cloudinary.com/mpayancabrera/image/upload/c_thumb,w_200,g_face/v1693749643/sti_vce4kc.jpg',
        alt: 'Stubhub int. image'
      },
      skills: [
        {text: 'React', color: 'orange'},
        {text: 'Docker', color: 'blue'},
        {text: 'Jenkins', color: 'red'},
        {text: 'Concurse', color: 'yellow'},
        {text: 'Gcloud', color: 'green'}
      ]
    },
    {
      key: 'version1',
      company: 'Version 1',
      role: 'Senior Front-End developer (Junio 2021 - Junio 2022)',
      description:
        'Desarrollador front end senior para diferentes proyectos de servicios financieros (blockchain, trading).',
      image: {
        src: 'https://res.cloudinary.com/mpayancabrera/image/upload/v1693749643/v1_fsy64m.jpg',
        alt: 'Stubhub int. image'
      },
      skills: [
        {text: 'React', color: 'orange'},
        {text: 'Docker', color: 'blue'},
        {text: 'AWS', color: 'red'}
      ]
    },
    {
      key: 'pccomponentes',
      company: 'PcComponentes',
      role: 'Full stack developer (Marzo 2019 - Junio 2021)',
      description:
        'Desarrollador full stack para plataforma de comercio electrónico. Diseño y desarrollo de microservicios (DDD, arquitectura hexagonal). Desarrollo Front End de la nueva web con React.',
      image: {
        src: 'https://res.cloudinary.com/mpayancabrera/image/upload/v1693749643/PcComponentes_ayyyxa.png',
        alt: 'Stubhub int. image'
      },
      skills: [
        {text: 'React', color: 'orange'},
        {text: 'Php', color: 'red'},
        {text: 'Python', color: 'green'},
        {text: 'Docker', color: 'blue'},
        {text: 'kubernetes', color: 'blue'}
      ]
    }
  ];

  return (
    <div className="EmploymentHistory__Container">
      <h3>TRAYECTORIA PROFESIONAL</h3>
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={3}>
        {employmentList.map((item) => (
          <EmploymentHistoryItem key={item.key} item={item} />
        ))}
      </Grid>
    </div>
  );
};
