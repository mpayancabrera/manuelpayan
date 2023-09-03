import {EmploymentHistoryItem} from './EmploymentHistoryItem';

import './index.css';

export const EmploymentHistory = () => {
  const employmentList = [
    {
      key: 'stubhub',
      company: 'Stubhub International',
      role: 'Senior Front-End developer',
      description: 'Ticketing eccomerce',
      image: 'https://res.cloudinary.com/mpayancabrera/image/upload/c_thumb,w_200,g_face/v1693749643/sti_vce4kc.jpg',
      skills: ['React']
    }
  ];

  return (
    <div className="EmploymentHistory__Container">
      <h3>TRAYECTORIA PROFESIONAL</h3>
      <div className="EmploymentHistory__list">
        {employmentList.map((item) => (
          <EmploymentHistoryItem key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};
