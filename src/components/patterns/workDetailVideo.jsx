import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const WorkDetailVideo = ({
  videoIsPlaying,
  setVideoIsPlaying,
  thumbnail,
  image,
  videoUrl,
  client,
  projectName,
}) =>
  console.log('videoIsPlaying:', videoIsPlaying) || (
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
  );

WorkDetailVideo.propTypes = {
  videoIsPlaying: PropTypes.bool.isRequired,
  setVideoIsPlaying: PropTypes.func.isRequired,
  thumbnail: PropTypes.shape({}).isRequired,
  image: PropTypes.shape({
    altText: PropTypes.string,
  }).isRequired,
  videoUrl: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
};

export default WorkDetailVideo;
