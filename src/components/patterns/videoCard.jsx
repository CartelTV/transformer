import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const VideoCard = ({ activeImage, client, projectName }) => {
  const cardImageActive = getImage(activeImage);

  return (
    <div className="video-card">
      <div className="video-card__image-wrapper">
        <GatsbyImage
          className="video-card__image video-card__image--active"
          image={cardImageActive}
          alt={activeImage.altText}
        />
      </div>

      {(client || projectName) && (
        <div className="video-card__content-wrapper">
          <p className="video-card__content">
            <span className="video-card__client">{client}</span>{' '}
            {projectName && (
              <span className="video-card__name">{projectName}</span>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

VideoCard.propTypes = {
  activeImage: PropTypes.shape({
    altText: PropTypes.string,
  }).isRequired,
  client: PropTypes.string,
  projectName: PropTypes.string,
};

VideoCard.defaultProps = {
  client: '',
  projectName: '',
};

export default VideoCard;
