import Image from 'next/image';
import './index.css';

const socialLinks = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/manuelpayancabrera',
    srcIcon: './linkedin.svg'
  },
  {
    name: 'github',
    url: 'http://github.com/mpayancabrera',
    srcIcon: './github.svg'
  }
];

export const RRSS = () => (
  <div className="rrss">
    <ul className="social-links">
      {socialLinks.map((item: any) => {
        return (
          <ul key={item.name}>
            <a href={item.url}>
              <Image className="rrss__icon" src={item.srcIcon} width="48" height="48" alt={item.name} />
              <i className={item.className} />
            </a>
          </ul>
        );
      })}
    </ul>
  </div>
);
