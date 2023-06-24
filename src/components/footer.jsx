import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';

import tLogo from '../images/transformer-t-logo.svg';

const Footer = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allWpPage(filter: { databaseId: { eq: 686 } }) {
          edges {
            node {
              infoPage {
                infoAddressLine1
                infoAddressLine2
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const { infoAddressLine1, infoAddressLine2 } =
        data.allWpPage.edges[0].node.infoPage;
      return (
        <footer className="footer" role="contentinfo">
          {location.pathname === '/info/' && (
            <address>
              {infoAddressLine1}, {infoAddressLine2}
            </address>
          )}

          <Link to="/work">
            <img className="footer__logo" src={tLogo} alt="Transformer logo" />
          </Link>
        </footer>
      );
    }}
  />
);

Footer.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Footer;
