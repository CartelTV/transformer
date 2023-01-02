import React from 'react';
import { Link } from 'gatsby';

import transformerLogo from '../images/transformer-logo.svg';

const Header = () => (
  <header className="header" role="banner">
    <div className="container">
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
            <Link className="nav__link" to="/info">
              info
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
