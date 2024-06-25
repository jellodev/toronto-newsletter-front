import React from 'react';
import './Footer.css';
import InfoIcon from '../../assets/icons/info.svg';
import MailIcon from '../../assets/icons/mail.svg';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={'contact-container'}>
        <div className={'contact-item'}>
          <a
            about={'LinkedIn'}
            href={'https://www.linkedin.com/in/mihee-kim-developer/'}
            target="_blank"
          >
            <img
              src={InfoIcon}
              className="contact-icon"
              alt={'linkedin icon'}
            />
          </a>
        </div>
        <div className={'contact-item'}>
          <a
            about={'email'}
            href={'mailto:jerry2219398@gamil.com'}
            target="_blank"
          >
            <img
              src={MailIcon}
              className="contact-icon"
              alt={'linkedin icon'}
            />
          </a>
        </div>
      </div>
      <p id={'copy-right-info'}>© 2020 All rights reserved</p>
    </footer>
  );
};

export default Footer;
