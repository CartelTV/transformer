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
    <div className="content-wrapper">
      <div className="container">
        <div>
          <Header location={location} />
          <main className="main" id="main" role="main">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({}),
};

Layout.defaultProps = {
  location: {},
};

export default Layout;
