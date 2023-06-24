import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import '../styles/main.scss';

import Header from './header';
import Footer from './footer';

const Layout = ({ children, location }) => (
  <Fragment>
    <a className="skip-link" href="#main">
      skip to main content
    </a>
    <div className="container">
      <div className="container__inner">
        <Header location={location} />
        <main
          className={`main ${
            location.pathname === '/work/' ? 'main--home delayed-fade-in' : ''
          }`}
          id="main"
          role="main"
        >
          {children}
        </main>
      </div>
      <Footer location={location} />
    </div>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

Layout.defaultProps = {
  location: {},
};

export default Layout;
