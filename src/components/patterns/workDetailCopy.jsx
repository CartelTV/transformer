import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const WorkDetailCopy = ({
  client,
  projectName,
  director,
  agency,
  productionCompany,
  duration,
}) => (
  <Fragment>
    <div className="work-detail__text">
      <h1 className="work-detail__heading">
        {client}
        {projectName && <Fragment> &ldquo;{projectName}&rdquo;</Fragment>}
      </h1>
      <p className="work-detail__meta">
        {duration && duration} {duration && director && '•'}{' '}
        {director && <span>Director: {director}</span>}
      </p>
    </div>
    <p className="work-detail__meta">
      {agency && <span>Agency: {agency}</span>}{' '}
      {agency && productionCompany && '•'}{' '}
      {productionCompany && (
        <span>Production Company: {productionCompany}</span>
      )}
    </p>
  </Fragment>
);

WorkDetailCopy.propTypes = {
  client: PropTypes.string,
  projectName: PropTypes.string,
  director: PropTypes.string,
  agency: PropTypes.string,
  productionCompany: PropTypes.string,
  duration: PropTypes.string,
};

WorkDetailCopy.defaultProps = {
  client: '',
  projectName: '',
  director: '',
  agency: '',
  productionCompany: '',
  duration: '',
};

export default WorkDetailCopy;
