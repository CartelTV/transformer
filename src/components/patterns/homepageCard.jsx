import React from 'react';
import PropTypes from 'prop-types';

const HomepageCard = ({
  imgSrcSmall,
  imgSrcMedium,
  imgSrcLarge,
  imgAlt,
  imgWidth,
  imgHeight,
  client,
  directorName,
}) => (
  <div className="homepage-card">
    <picture>
      <source media="(min-width: 751px)" srcSet={imgSrcLarge} />
      <source media="(min-width: 376px)" srcSet={imgSrcMedium} />
      <img
        className="homepage-card__image"
        src={imgSrcSmall}
        alt={imgAlt}
        loading="lazy"
        width={imgWidth}
        height={imgHeight}
        decoding="async"
      />
    </picture>

    <div className="homepage-card__content-wrapper">
      <p className="homepage-card__content">
        <span className="homepage-card__client">{client}</span>{' '}
        <span className="homepage-card__name">{directorName}</span>
      </p>
    </div>
  </div>
);

HomepageCard.propTypes = {
  imgSrcSmall: PropTypes.string.isRequired,
  imgSrcMedium: PropTypes.string.isRequired,
  imgSrcLarge: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  imgWidth: PropTypes.string.isRequired,
  imgHeight: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  directorName: PropTypes.string.isRequired,
};

export default HomepageCard;
