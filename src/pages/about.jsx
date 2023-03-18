/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import video from '../images/about-video.mp4';

const AboutPage = ({ data: { allWpPage }, location }) => {
  const { aboutCopy } = allWpPage.edges[0].node.aboutPage;

  return (
    <Layout location={location}>
      <SEO title="About" />
      <article className="about">
        <video autoPlay muted playsInline loop src={video} />
        <div
          className="about__copy"
          dangerouslySetInnerHTML={{ __html: aboutCopy }}
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
            aboutPage: PropTypes.shape({
              aboutCopy: PropTypes.string,
              aboutImage: PropTypes.shape({
                altText: PropTypes.string,
                gatsbyImage: PropTypes.shape({}),
              }),
            }),
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
          aboutPage {
            aboutCopy
          }
        }
      }
    }
  }
`;
