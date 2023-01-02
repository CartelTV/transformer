import React from 'react';
import { Link } from 'gatsby';

import transformerLogo from '../images/transformer-logo.svg';

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

      <address>
        1800 Stanford Street
        <br />
        Santa Monica, CA 90404
        <br />
        <a href="tel:3102825555">310-282-5555</a>
      </address>
    </div>
  </footer>
);

export default Footer;
