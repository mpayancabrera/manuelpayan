import {RRSS} from './rrss';
import './styles.css';

export const Footer = () => (
  <div className="Footer__Container">
    <div className="Footer__Info">
      <div className="Footer__Info--data">
        <p>
          <b>Email</b>
        </p>
        <span>mpayancabrera@gmail.com</span>
        <p>
          <b>Domicilio</b>
        </p>
        <span>Cipriano Alhambra 16, Baeza (Jaén)</span>
      </div>
      <RRSS />
    </div>

    <div className="Footer__Author">
      <span>Made with 💟 by Manuel Payán Cabrera</span>
    </div>
  </div>
);
