import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const HomepageCard = ({ image, client, directorName }) => {
  const cardImage = getImage(image);

  return (
    <div className="homepage-card">
      <GatsbyImage
        className="homepage-card__image"
        image={cardImage}
        alt={image.altText}
        placeholder="blurred"
        layout="constrained"
        loading="eager"
      />

      <div className="homepage-card__content-wrapper">
        <p className="homepage-card__content">
          <span className="homepage-card__client">{client}</span>{' '}
          {directorName && (
            <span className="homepage-card__name">{directorName}</span>
          )}
        </p>
      </div>
    </div>
  );
};

HomepageCard.propTypes = {
  image: PropTypes.shape({
    altText: PropTypes.string,
  }).isRequired,
  client: PropTypes.string.isRequired,
  directorName: PropTypes.string,
};

HomepageCard.defaultProps = {
  directorName: '',
};

export default HomepageCard;
