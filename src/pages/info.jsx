/* eslint-disable jsx-a11y/media-has-caption */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Sanitized from 'react-sanitized';

import Layout from '../components/layout';
import SEO from '../components/seo';

import video from '../images/info-video.mp4';

const InfoPage = ({ data: { allWpPage }, location }) => {
  const {
    infoCopy,
    infoPrimaryContactPersonEmail,
    infoPrimaryContactPersonName,
    infoPrimaryContactPersonPhoneNumber,
    infoPrimaryContactPersonTitle,
    infoSecondaryContactPersonEmail,
    infoSecondaryContactPersonName,
    infoSecondaryContactPersonPhoneNumber,
    infoSecondaryContactPersonTitle,
  } = allWpPage.edges[0].node.infoPage;

  return (
    <Layout location={location}>
      <SEO title="Info" />
      <article className="info">
        <video autoPlay muted playsInline loop src={video} />
        <Sanitized html={infoCopy} wrapperTag="div" className="info__copy" />

        <section className="contact">
          <div className="contact__copy">
            <p>
              {infoPrimaryContactPersonName} - {infoPrimaryContactPersonTitle} •{' '}
              <a href={`mailto:${infoPrimaryContactPersonEmail}`}>
                {infoPrimaryContactPersonEmail}
              </a>{' '}
              •{' '}
              <a
                href={`tel:${infoPrimaryContactPersonPhoneNumber.replaceAll(
                  '-',
                  ''
                )}`}
              >
                {infoPrimaryContactPersonPhoneNumber}
              </a>
            </p>

            <p>
              {infoSecondaryContactPersonName} -{' '}
              {infoSecondaryContactPersonTitle}{' '}
              {infoSecondaryContactPersonEmail && (
                <Fragment>
                  •{' '}
                  <a href={`mailto:${infoSecondaryContactPersonEmail}`}>
                    {infoSecondaryContactPersonEmail}
                  </a>
                </Fragment>
              )}
              {infoSecondaryContactPersonPhoneNumber && (
                <Fragment>
                  {' '}
                  •{' '}
                  <a
                    href={`tel:${infoSecondaryContactPersonPhoneNumber.replaceAll(
                      '-',
                      ''
                    )}`}
                  >
                    {infoSecondaryContactPersonPhoneNumber}
                  </a>
                </Fragment>
              )}
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
};

InfoPage.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            infoPage: PropTypes.shape({
              infoCopy: PropTypes.string,
              infoAddressLine1: PropTypes.string,
              infoAddressLine2: PropTypes.string,
              infoPrimaryContactPersonEmail: PropTypes.string,
              infoPrimaryContactPersonName: PropTypes.string,
              infoPrimaryContactPersonPhoneNumber: PropTypes.string,
              infoPrimaryContactPersonTitle: PropTypes.string,
              infoSecondaryContactPersonEmail: PropTypes.string,
              infoSecondaryContactPersonName: PropTypes.string,
              infoSecondaryContactPersonPhoneNumber: PropTypes.string,
              infoSecondaryContactPersonTitle: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({}),
};

InfoPage.defaultProps = {
  location: {},
};

export default InfoPage;

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 686 } }) {
      edges {
        node {
          infoPage {
            infoCopy
            infoPrimaryContactPersonEmail
            infoPrimaryContactPersonName
            infoPrimaryContactPersonPhoneNumber
            infoPrimaryContactPersonTitle
            infoSecondaryContactPersonEmail
            infoSecondaryContactPersonName
            infoSecondaryContactPersonPhoneNumber
            infoSecondaryContactPersonTitle
          }
        }
      }
    }
  }
`;
