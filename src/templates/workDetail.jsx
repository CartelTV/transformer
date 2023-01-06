import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const WorkDetailPage = ({ data }) => {
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);

  const { allWpProject } = data;
  const details = allWpProject.nodes[0];
  const {
    agency,
    client,
    director,
    duration,
    image,
    productionCompany,
    projectName,
    videoUrl,
  } = details.project;

  const thumbnail = getImage(image);

  return (
    <Layout>
      <SEO title={`${client} - ${projectName}`} />
      <article className="work-detail">
        <div className="container">
          <div className="work-detail__video">
            <button
              className={`work-detail__thumbnail-button ${
                videoIsPlaying ? 'is-playing' : ''
              }`}
              type="button"
              onClick={() => setVideoIsPlaying(true)}
              aria-label="play video"
            >
              <GatsbyImage
                image={thumbnail}
                alt={image.altText}
                placeholder="blurred"
                layout="constrained"
                loading="eager"
              />
            </button>
            {videoIsPlaying && (
              <div className="work-detail__video-wrapper iframe-container iframe-container-16x9">
                <iframe
                  src={videoUrl}
                  title={`${client} - ${projectName}`}
                  width="1920"
                  height="1080"
                  allowFullScreen
                />
              </div>
            )}
          </div>

          <div className="work-detail__text">
            <div className="work-detail__project">
              <h1 className="work-detail__client">{client}</h1>
              {projectName && (
                <p className="work-detail__title">
                  <strong>{projectName}</strong>
                </p>
              )}
            </div>
            <ul className="work-detail__meta">
              {director && (
                <li className="work-detail__meta-item">
                  <strong>Director:</strong> {director}
                </li>
              )}

              {agency && (
                <li className="work-detail__meta-item">
                  <strong>Agency:</strong> {agency}
                </li>
              )}

              {productionCompany && (
                <li className="work-detail__meta-item">
                  <strong>Production Company:</strong> {productionCompany}
                </li>
              )}

              {duration && (
                <li className="work-detail__meta-item">
                  <strong>Duration:</strong> {duration}
                </li>
              )}
            </ul>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    allWpProject(filter: { id: { eq: $id } }) {
      nodes {
        project {
          agency
          client
          director
          duration
          productionCompany
          projectName
          showOnHomepage
          videoUrl
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
`;

WorkDetailPage.propTypes = {
  data: PropTypes.shape({
    allWpProject: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          project: PropTypes.shape({
            agency: PropTypes.string,
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
  }).isRequired,
};

export default WorkDetailPage;
