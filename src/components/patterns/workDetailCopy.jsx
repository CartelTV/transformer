import React from 'react';
import PropTypes from 'prop-types';

const WorkDetailCopy = ({
  client,
  projectName,
  director,
  agency,
  productionCompany,
  duration,
}) => (
  <div className="work-detail__text">
    <h1 className="work-detail__heading">
      <span className="work-detail__client">{client}</span>
      {projectName && (
        <span className="work-detail__title"> - {projectName}</span>
      )}
    </h1>
    <ul className="work-detail__meta">
      {director && (
        <li className="work-detail__meta-item">
          <strong>Director:</strong> <span>{director}</span>
        </li>
      )}

      {agency && (
        <li className="work-detail__meta-item">
          <strong>Agency:</strong> <span>{agency}</span>
        </li>
      )}

      {productionCompany && (
        <li className="work-detail__meta-item">
          <strong>Production Company:</strong> <span>{productionCompany}</span>
        </li>
      )}

      {duration && (
        <li className="work-detail__meta-item">
          <strong>Duration:</strong> <span>{duration}</span>
        </li>
      )}
    </ul>
  </div>
);

WorkDetailCopy.propTypes = {
  client: PropTypes.string.isRequired,
  projectName: PropTypes.string,
  director: PropTypes.string,
  agency: PropTypes.string,
  productionCompany: PropTypes.string,
  duration: PropTypes.string,
};

WorkDetailCopy.defaultProps = {
  projectName: '',
  director: '',
  agency: '',
  productionCompany: '',
  duration: '',
};

export default WorkDetailCopy;
