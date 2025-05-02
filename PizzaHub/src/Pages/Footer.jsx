import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'; 
import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FontAwesomeIcon icon={faLinkedin} id="pic" />
        <FontAwesomeIcon icon={faXTwitter} id="pic" />
        <FontAwesomeIcon icon={faGithub} id="pic" />
        <FontAwesomeIcon icon={faEnvelope} id="pic" />
      </div>
      <p>&copy; 2025 pizzahub.com</p>
    </div>
  );
}

export default Footer;
