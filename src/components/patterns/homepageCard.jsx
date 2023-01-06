import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const HomepageCard = ({ image, client, director }) => {
  const cardImage = getImage(image);

  return (
    <div className="homepage-card">
      <GatsbyImage
        className="homepage-card__image"
        image={cardImage}
        alt={image.altText}
      />

      <div className="homepage-card__content-wrapper">
        <p className="homepage-card__content">
          <span className="homepage-card__client">{client}</span>{' '}
          {director && <span className="homepage-card__name">{director}</span>}
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
  director: PropTypes.string,
};

HomepageCard.defaultProps = {
  director: '',
};

export default HomepageCard;
