import React from 'react';
import { Link } from 'gatsby';

import tLogo from '../images/transformer-t-logo.svg';

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <Link to="/work">
      <img className="footer__logo" src={tLogo} alt="Transformer logo" />
    </Link>
  </footer>
);

export default Footer;
