import {AboutMe} from '@/components/AboutMe';

import './page.css';
import {EmploymentHistory} from '@/components/EmploymentHistory';

export default function Home() {
  return (
    <div className="Home__Container">
      <AboutMe />
      <EmploymentHistory />
    </div>
  );
}
