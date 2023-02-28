import React from 'react';
import { Link } from 'gatsby';

import transformerLogo from '../images/transformer-logo-dark.svg';

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="footer__logo-wrapper">
      <Link className="footer__logo-link" to="/">
        <img
          className="footer__logo"
          src={transformerLogo}
          alt="Transformer logo"
          width="400"
          height="55"
        />
      </Link>
    </div>

    <address>1800 Stanford Street, Santa Monica, CA 90404</address>
  </footer>
);

export default Footer;
