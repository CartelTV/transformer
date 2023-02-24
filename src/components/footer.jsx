import React from 'react';
import { Link } from 'gatsby';

import transformerLogo from '../images/transformer-logo-dark.svg';

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="container">
      <Link to="/">
        <img
          className="footer__logo"
          src={transformerLogo}
          alt="Transformer logo"
          width="300"
          height="42"
          loading="lazy"
          decoding="async"
        />
      </Link>

      <address>1800 Stanford Street, Santa Monica, CA 90404</address>
    </div>
  </footer>
);

export default Footer;
