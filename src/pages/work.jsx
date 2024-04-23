import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import VideoCard from '../components/patterns/videoCard';

const WorkPage = ({ data, location }) => {
  const reelData = data.allWpReel.nodes[0];
  const projectData = data.allWpProject.nodes;

  return (
    <Layout location={location}>
      <SEO title="Work" />
      <ul className="project-grid">
        <li className="project-grid__item">
          <Link to={`/work/${reelData.slug}`}>
            <VideoCard
              activeImage={reelData.reel.reelImage}
              projectName={reelData.reel.reelTitle}
            />
          </Link>
        </li>

        {/* Sort by categoryOrder and reverse the order so it is descending. */}
        {/* Projects without a categoryOrder number will appear first by date created. */}
        {projectData.map((item) => {
          console.log('item:', item);
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

WorkPage.propTypes = {
  data: PropTypes.shape({
    allWpReel: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          slug: PropTypes.string,
          reel: PropTypes.shape({
            videoUrl: PropTypes.string,
            reelTitle: PropTypes.string,
            reelImage: PropTypes.shape({}),
          }),
        })
      ),
    }),
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

WorkPage.defaultProps = {
  location: {},
};

export default WorkPage;

export const query = graphql`
  query {
    allWpReel {
      nodes {
        slug
        reel {
          videoUrl
          reelTitle
          reelImage {
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
    allWpProject(sort: { project: { categoryOrder: DESC } }) {
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
