import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import VideoCard from '../components/patterns/videoCard';

const MusicVideosPage = ({ data, location }) => {
  const pageData = data.allWpProject.nodes;

  return (
    <Layout location={location}>
      <SEO title="Music Videos" />
      <ul className="project-grid">
        {pageData.map((item) => {
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

MusicVideosPage.propTypes = {
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

MusicVideosPage.defaultProps = {
  location: {},
};

export default MusicVideosPage;

export const query = graphql`
  query {
    allWpProject(
      filter: { project: { category: { eq: "Music Videos" } } }
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
