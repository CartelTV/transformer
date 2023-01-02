import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HomepageCard from '../components/patterns/homepageCard';

const IndexPage = ({ data }) => {
  const homepageData = data.allWpPage.edges[0].node.homepage.homepageCards;

  return (
    <Layout>
      <SEO title="Home" />
      {homepageData.map((project) => {
        const pageLink = `${project.client
          .toLowerCase()
          .replaceAll(' ', '-')
          .replaceAll('/', '-')}-${project.projectName
          .toLowerCase()
          .replaceAll(' ', '-')}`;

        return (
          <Link to={pageLink} key={pageLink}>
            <HomepageCard
              image={project.image}
              client={project.client}
              directorName={project.directorName}
            />
          </Link>
        );
      })}
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            homepage: PropTypes.shape({
              homepageCards: PropTypes.arrayOf(
                PropTypes.shape({
                  id: PropTypes.string,
                  client: PropTypes.string,
                  directorName: PropTypes.string,
                  image: PropTypes.shape({}),
                })
              ),
            }),
          }),
        })
      ),
    }),
  }).isRequired,
};

export default IndexPage;

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 10 } }) {
      edges {
        node {
          homepage {
            homepageCards {
              client
              directorName
              projectName
              image {
                gatsbyImage(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  cropFocus: CENTER
                  fit: COVER
                  breakpoints: [376, 751, 1920]
                  layout: CONSTRAINED
                  width: 1920
                )
                altText
              }
            }
          }
        }
      }
    }
  }
`;
