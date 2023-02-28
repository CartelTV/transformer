import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WorkDetailVideo from '../components/patterns/workDetailVideo';

const ReelPage = ({ data: { allWpPage }, location }) => {
  const {
    reelPage: { videoUrl, reelThumbnail, pageCopy },
  } = allWpPage.edges[0].node;

  const [videoIsPlaying, setVideoIsPlaying] = useState(false);

  const thumbnail = getImage(reelThumbnail);

  return (
    <Layout location={location}>
      <SEO title="Reel" />
      <article className="reel">
        <WorkDetailVideo
          videoIsPlaying={videoIsPlaying}
          setVideoIsPlaying={setVideoIsPlaying}
          thumbnail={thumbnail}
          image={reelThumbnail}
          videoUrl={videoUrl}
          client="Transforer"
          projectName="Reel"
        />
        <p className="reel__copy">{pageCopy}</p>
      </article>
    </Layout>
  );
};

ReelPage.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            reelPage: PropTypes.shape({
              videoUrl: PropTypes.string,
              reelThumbnail: PropTypes.shape({}),
              pageCopy: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({}),
};

ReelPage.defaultProps = {
  location: {},
};

export default ReelPage;

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 665 } }) {
      edges {
        node {
          reelPage {
            videoUrl
            reelThumbnail {
              gatsbyImage(
                breakpoints: [376, 751, 1200]
                cropFocus: CENTER
                fit: COVER
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
                placeholder: BLURRED
                width: 1200
              )
              altText
            }
            pageCopy
          }
        }
      }
    }
  }
`;
