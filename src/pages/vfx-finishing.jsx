import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/gridLayout';
import SEO from '../components/seo';
import VideoCard from '../components/patterns/videoCard';

const VFXPage = ({ data, location }) => {
  const workData = data.allWpProject.nodes
    .filter((item) => !item?.project?.category.includes('VFX/Finishing'))
    .reverse();

  return (
    <Layout location={location}>
      <SEO title="Work" />
      <ul className="project-grid">
        {workData.map((item) => {
          const pageLink = `/work/${item.project.client
            .toLowerCase()
            .replaceAll(' ', '-')
            .replaceAll('/', '-')
            .replaceAll('’', '')
            .replaceAll("'", '')
            .replaceAll('‘', '')
            .replaceAll('*', '')
            .replaceAll(':', '')}-${item.project.projectName
            .toLowerCase()
            .replaceAll(' ', '-')
            .replaceAll(':', '')
            .replaceAll('*', '')
            .replaceAll('.', '')
            .replaceAll('’', '')
            .replaceAll("'", '')
            .replaceAll('‘', '')}`;

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

VFXPage.propTypes = {
  data: PropTypes.shape({
    allWpProject: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
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

VFXPage.defaultProps = {
  location: {},
};

export default VFXPage;

export const query = graphql`
  query {
    allWpProject {
      nodes {
        project {
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
