import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = ({ data: { allWpPage }, location }) => {
  const { aboutImage, aboutCopy } = allWpPage.edges[0].node.aboutPage;
  const image = getImage(aboutImage);

  return (
    <Layout location={location}>
      <SEO title="About" />
      <article className="about">
        <GatsbyImage
          className="video-card__image video-card__image--active"
          image={image}
          alt={aboutImage.altText}
        />
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
            aboutImage {
              gatsbyImage(
                breakpoints: [376, 751, 1920]
                cropFocus: CENTER
                fit: FILL
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
                placeholder: BLURRED
                width: 1920
              )
              altText
            }
          }
        }
      }
    }
  }
`;
