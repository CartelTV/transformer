import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import '../styles/main.scss';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <Fragment>
    <a className="skip-link" href="#main">
      skip to main content
    </a>
    <div className="content-wrapper__grid">
      <Header />
      <main className="main" id="main" role="main">
        {children}
      </main>
    </div>
    <Footer />
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
