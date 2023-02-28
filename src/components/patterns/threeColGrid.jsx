import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import VideoCard from './videoCard';

const ThreeColGrid = ({ videos }) => (
  <div className="three-col-grid">
    <ul className="three-col-grid__list">
      {videos.map((item) => {
        const pageLink = `/work/${item.node.slug}`;

        return (
          <li className="three-col-grid__item" key={pageLink}>
            <Link to={pageLink}>
              <VideoCard
                staticImage={item.node.project.staticImage}
                activeImage={item.node.project.image}
                client={item.node.project.client}
                projectName={item.node.project.projectName}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

ThreeColGrid.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        project: PropTypes.shape({
          client: PropTypes.string,
          projectName: PropTypes.string,
          image: PropTypes.shape({
            altText: PropTypes.string,
          }),
        }),
      }),
    })
  ).isRequired,
};

ThreeColGrid.defaultProps = {};

export default ThreeColGrid;
