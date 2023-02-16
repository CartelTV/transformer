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
