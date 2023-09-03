import {Badge} from '@/components/Badge';
import './index.css';

export const EmploymentHistoryItem = ({item}: any) => {
  return (
    <div className="EmploymentHistoryItem__Container">
      <img src={item.image} />
      <h5>{item.company}</h5>
      <p>{item.role}</p>
      <p>{item.description}</p>
      <div>
        {item.skills.map((skill: string) => (
          <Badge key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};
