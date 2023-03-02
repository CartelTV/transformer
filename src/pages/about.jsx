import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = ({ data: { allWpPage }, location }) => {
  const { content } = allWpPage.edges[0].node;

  return (
    <Layout location={location}>
      <SEO title="About" />
      <article className="about">
        <div
          className="about__copy"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            content: PropTypes.string,
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({}),
};

AboutPage.defaultProps = {
  location: {},
};

export default AboutPage;

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 686 } }) {
      edges {
        node {
          content
        }
      }
    }
  }
`;
