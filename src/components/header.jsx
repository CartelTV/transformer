import React from 'react';
import { Link } from 'gatsby';

import transformerLogo from '../images/transformer-logo.svg';

const Header = () => (
  <header className="header" role="banner">
    <Link to="/">
      <img
        className="header__logo"
        src={transformerLogo}
        alt="Transformer logo"
        width="300"
        height="42"
        decoding="async"
      />
    </Link>

    <nav className="nav" role="navigation">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="/work">
            work
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/contact">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
