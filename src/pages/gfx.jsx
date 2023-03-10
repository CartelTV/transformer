import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import VideoCard from '../components/patterns/videoCard';

const GFXPage = ({ data, location }) => {
  const pageData = data.allWpProject.nodes;

  return (
    <Layout location={location}>
      <SEO title="GFX" />
      <ul className="project-grid">
        {pageData.map((item) => {
          const pageLink = `/work/${item.slug}`;

          return (
            <li className="project-grid__item" key={pageLink}>
              <Link to={pageLink}>
                <VideoCard
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

GFXPage.propTypes = {
  data: PropTypes.shape({
    allWpProject: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          slug: PropTypes.string,
          project: PropTypes.shape({
            category: PropTypes.arrayOf(PropTypes.string),
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

GFXPage.defaultProps = {
  location: {},
};

export default GFXPage;

export const query = graphql`
  query {
    allWpProject(
      filter: { project: { category: { eq: "GFX" } } }
      sort: { project: { categoryOrder: ASC } }
    ) {
      nodes {
        slug
        project {
          categoryOrder
          category
          client
          director
          projectName
          showOnHomepage
          image {
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
`;
