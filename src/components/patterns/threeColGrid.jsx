import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import VideoCard from './videoCard';

const ThreeColGrid = ({ videos }) => (
  <div className="container">
    <ul className="three-col-grid">
      {videos.map((item) => {
        const pageLink = `/work/${item.node.project.client
          .toLowerCase()
          .replaceAll(' ', '-')
          .replaceAll('/', '-')
          .replaceAll('’', '')
          .replaceAll("'", '')
          .replaceAll('‘', '')
          .replaceAll('*', '')
          .replaceAll(':', '')}-${item.node.project.projectName
          .toLowerCase()
          .replaceAll(' ', '-')
          .replaceAll(':', '')
          .replaceAll('*', '')
          .replaceAll('.', '')
          .replaceAll('’', '')
          .replaceAll("'", '')
          .replaceAll('‘', '')}`;

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
