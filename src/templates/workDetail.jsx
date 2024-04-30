import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WorkDetailVideo from '../components/patterns/workDetailVideo';
import WorkDetailCopy from '../components/patterns/workDetailCopy';
import ThreeColGrid from '../components/patterns/threeColGrid';

const WorkDetailPage = ({ data, location }) => {
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);

  const { reelDetail, videoDetail, allVideos } = data;

  const reelDetails = reelDetail.nodes[0].reel;
  const { reelImage, reelTitle, videoUrl: reelUrl } = reelDetails;

  const projectDetails = videoDetail?.nodes[0]?.project;

  const moreVideos = allVideos.edges
    .filter(
      (item) => !item?.project?.category.includes(projectDetails?.category[0])
    )
    .sort((a, b) => 0.5 - Math.random()) // eslint-disable-line
    .slice(0, 9);

  const projectThumbnail = getImage(projectDetails?.image);
  const reelThumbnail = getImage(reelImage);

  return (
    <Layout location={location}>
      <SEO
        title={`${projectDetails?.client || 'Transformer'} - ${
          projectDetails?.projectName || 'Reel'
        }`}
      />
      <div className="work">
        <article className="work-detail">
          <WorkDetailVideo
            videoIsPlaying={videoIsPlaying}
            setVideoIsPlaying={setVideoIsPlaying}
            thumbnail={projectThumbnail || reelThumbnail}
            image={projectDetails?.image || reelImage}
            videoUrl={projectDetails?.videoUrl || reelUrl}
            client={projectDetails?.client}
            projectName={projectDetails?.projectName || reelTitle}
          />
          <WorkDetailCopy
            client={projectDetails?.client}
            projectName={projectDetails?.projectName || reelTitle}
            director={projectDetails?.director}
            agency={projectDetails?.agency}
            productionCompany={projectDetails?.productionCompany}
            duration={projectDetails?.duration}
          />
        </article>
        <ThreeColGrid videos={moreVideos} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    reelDetail: allWpReel {
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
          slug
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
    reelDetail: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          reel: PropTypes.shape({
            reelImage: PropTypes.shape({}),
            reelTitle: PropTypes.string,
            videoUrl: PropTypes.string,
          }),
        })
      ),
    }).isRequired,
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
