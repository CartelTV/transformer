import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import VideoCard from '../components/patterns/videoCard';

const IndexPage = ({ data, location }) => {
  const homepageData = data.allWpProject.nodes;

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <ul className="project-grid">
        {homepageData.map((item) => {
          const pageLink = `/work/${item.slug}`;

          return (
            <li className="project-grid__item" key={pageLink}>
              <Link to={pageLink}>
                <VideoCard
                  staticImage={item.project.staticImage}
                  activeImage={item.project.image}
                  client={item.project.client}
                  projectName={item.project.projectName}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWpProject: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          project: PropTypes.shape({
            client: PropTypes.string,
            director: PropTypes.string,
            image: PropTypes.shape({}),
            projectName: PropTypes.string,
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({}),
};

IndexPage.defaultProps = {
  location: {},
};

export default IndexPage;

export const query = graphql`
  query {
    allWpProject(
      filter: { project: { showOnHomepage: { eq: true } } }
      sort: { project: { categoryOrder: ASC } }
    ) {
      nodes {
        slug
        project {
          client
          director
          projectName
          showOnHomepage
          staticImage {
            gatsbyImage(
              breakpoints: [376, 751, 1920]
              cropFocus: CENTER
              fit: COVER
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 1920
            )
            altText
          }
          image {
            gatsbyImage(
              breakpoints: [376, 751, 1920]
              cropFocus: CENTER
              fit: COVER
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
`;
