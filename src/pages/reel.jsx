import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/gridLayout';
import SEO from '../components/seo';

const ReelPage = ({ data: { allWpPage }, location }) => {
  const {
    reelPage: { videoUrl, pageCopy },
  } = allWpPage.edges[0].node;

  return (
    <Layout location={location}>
      <SEO title="Reel" />
      <article className="reel">
        <div className="container">
          <div className="reel__video-wrapper iframe-container iframe-container-16x9">
            <iframe
              src={videoUrl}
              title="Transformer Reel"
              width="1920"
              height="1080"
              allowFullScreen
            />
          </div>
          <p className="reel__copy">{pageCopy}</p>
        </div>
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
            pageCopy
          }
        }
      }
    }
  }
`;
