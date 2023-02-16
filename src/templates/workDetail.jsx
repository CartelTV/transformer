import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Layout from '../components/pageLayout';
import SEO from '../components/seo';
import WorkDetailVideo from '../components/patterns/workDetailVideo';
import WorkDetailCopy from '../components/patterns/workDetailCopy';
import ThreeColGrid from '../components/patterns/threeColGrid';

const WorkDetailPage = ({ data, location }) => {
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);

  const { videoDetail, allVideos } = data;
  const details = videoDetail.nodes[0];
  const {
    agency,
    category,
    client,
    director,
    duration,
    image,
    productionCompany,
    projectName,
    videoUrl,
  } = details.project;

  const moreVideos = allVideos.edges
    .filter((item) => !item?.project?.category.includes(category[0]))
    .sort((a, b) => 0.5 - Math.random()) // eslint-disable-line
    .slice(0, 9);

  const thumbnail = getImage(image);

  return (
    <Layout location={location}>
      <SEO title={`${client} - ${projectName}`} />
      <article className="work-detail">
        <div className="container">
          <WorkDetailVideo
            videoIsPlaying={videoIsPlaying}
            setVideoIsPlaying={setVideoIsPlaying}
            thumbnail={thumbnail}
            image={image}
            videoUrl={videoUrl}
            client={client}
            projectName={projectName}
          />
          <WorkDetailCopy
            client={client}
            projectName={projectName}
            director={director}
            agency={agency}
            productionCompany={productionCompany}
            duration={duration}
          />
        </div>
      </article>
      <ThreeColGrid videos={moreVideos} />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    videoDetail: allWpProject(filter: { id: { eq: $id } }) {
      nodes {
        project {
          agency
          category
          client
          director
          duration
          productionCompany
          projectName
          showOnHomepage
          videoUrl
          image {
            gatsbyImage(
              breakpoints: [376, 751, 1920]
              cropFocus: CENTER
              fit: COVER
              formats: [AUTO, WEBP, AVIF]
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 1920
            )
            altText
          }
        }
      }
    }
    allVideos: allWpProject {
      edges {
        node {
          project {
            client
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
            projectName
            videoUrl
          }
          slug
        }
      }
    }
  }
`;

WorkDetailPage.propTypes = {
  data: PropTypes.shape({
    videoDetail: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          project: PropTypes.shape({
            agency: PropTypes.string,
            category: PropTypes.arrayOf(PropTypes.string),
            client: PropTypes.string,
            director: PropTypes.string,
            duration: PropTypes.string,
            image: PropTypes.shape({
              altText: PropTypes.string,
            }),
            productionCompany: PropTypes.string,
            projectName: PropTypes.string,
            videoUrl: PropTypes.string,
          }),
        })
      ),
    }),
    allVideos: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            project: PropTypes.shape({
              client: PropTypes.string,
              image: PropTypes.shape({
                altText: PropTypes.string,
                sourceUrl: PropTypes.string,
              }),
              projectName: PropTypes.string,
              videoUrl: PropTypes.string,
            }),
            slug: PropTypes.string,
          }),
        }).isRequired
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({}),
};

WorkDetailPage.defaultProps = {
  location: {},
};

export default WorkDetailPage;
