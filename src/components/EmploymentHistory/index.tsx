'use client';
import {Grid} from '@chakra-ui/react';
import {EmploymentHistoryItem} from './EmploymentHistoryItem';

import './index.css';

export const EmploymentHistory = () => {
  const employmentList = [
    {
      key: 'stubhub',
      company: 'Stubhub International',
      role: 'Senior Front-End developer',
      description: 'Ticketing platform that connects people with sellers.',
      image: {
        src: 'https://res.cloudinary.com/mpayancabrera/image/upload/c_thumb,w_200,g_face/v1693749643/sti_vce4kc.jpg',
        alt: 'Stubhub int. image'
      },
      skills: [{text: 'React', color: 'blue'}]
    },
    {
      key: 'version1',
      company: 'Version 1',
      role: 'Senior Front-End developer',
      description: 'Ticketing platform that connects people with sellers.',
      image: {
        src: 'https://res.cloudinary.com/mpayancabrera/image/upload/c_thumb,w_200,g_face/v1693749643/sti_vce4kc.jpg',
        alt: 'Stubhub int. image'
      },
      skills: [{text: 'React', color: 'blue'}]
    },
    {
      key: 'pccomponentes',
      company: 'PcComponentes',
      role: 'Full stack developer',
      description: 'Ticketing platform that connects people with sellers.',
      image: {
        src: 'https://res.cloudinary.com/mpayancabrera/image/upload/c_thumb,w_200,g_face/v1693749643/sti_vce4kc.jpg',
        alt: 'Stubhub int. image'
      },
      skills: [{text: 'React', color: 'blue'}]
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
