/* eslint-disable no-new */
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import iconMapMarker from '../images/map-pin.png';

const ContactPage = ({ data: { allWpPage }, location }) => {
  const {
    infoPage: {
      businessAddressLine1,
      businessAddressLine2,
      businessPhoneNumber,
      primaryContactPersonEmail,
      primaryContactPersonName,
      primaryContactPersonPhoneNumber,
      primaryContactPersonTitle,
      secondaryContactPersonEmail,
      secondaryContactPersonName,
      secondaryContactPersonPhoneNumber,
      secondaryContactPersonTitle,
    },
  } = allWpPage.edges[0].node;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          disableDefaultUI: true,
          center: {
            lat: 34.03125,
            lng: -118.46401,
          },
          zoom: 14,
          styles: [
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [
                { visibility: 'simplified' },
                { color: '#b4b9bd' },
                { lightness: 15 },
              ],
            },
            {
              featureType: 'transit.line',
              stylers: [
                { lightness: 37 },
                { color: '#5e6871' },
                { visibility: 'simplified' },
              ],
            },
            {
              featureType: 'water',
              stylers: [{ color: '#3d4b56' }, { invert_lightness: true }],
            },
            {
              featureType: 'road',
              elementType: 'labels.text',
              stylers: [{ visibility: 'simplified' }, { color: '#10253a' }],
            },
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [
                { visibility: 'simplified' },
                { color: '#b0b5b8' },
                { lightness: 68 },
              ],
            },
            {
              featureType: 'landscape',
              stylers: [
                { visibility: 'simplified' },
                { color: '#ebecee' },
                { lightness: -7 },
              ],
            },
            {
              featureType: 'administrative',
              elementType: 'labels.text',
              stylers: [{ visibility: 'simplified' }, { color: '#10253a' }],
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [
                { visibility: 'on' },
                { color: '#7c8089' },
                { lightness: 48 },
              ],
            },
            {
              featureType: 'transit',
              elementType: 'labels.text',
              stylers: [{ visibility: 'simplified' }, { color: '#10253a' }],
            },
            {
              featureType: 'poi',
              elementType: 'labels.text',
              stylers: [{ visibility: 'simplified' }, { color: '#10253a' }],
            },
          ],
        });

        new window.google.maps.Marker({
          position: { lat: 34.03125, lng: -118.46401 },
          icon: iconMapMarker,
          map,
        });
      };
    }
  }, []);
  return (
    <Fragment>
      <Helmet>
        <script
          async
          defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAt8P10q1vokG0xnBf5O5pZEKp3ctyWFDw&callback=initMap"
        />
      </Helmet>
      <Layout location={location}>
        <SEO title="Info" />
        <article className="contact">
          <div className="contact__map">
            <div id="map" />
          </div>

          <div className="contact__copy">
            <h1 className="contact__heading">Contact</h1>
            <address>
              {businessAddressLine1}
              <br />
              {businessAddressLine2}
              <br />
              <a href={`tel:${businessPhoneNumber.replaceAll('-', '')}`}>
                {businessPhoneNumber}
              </a>
            </address>

            <p>
              {primaryContactPersonName} - {primaryContactPersonTitle}
              <br />
              <a href={`mailto:${primaryContactPersonEmail}`}>
                {primaryContactPersonEmail}
              </a>
              <br />
              <a
                href={`tel:${primaryContactPersonPhoneNumber.replaceAll(
                  '-',
                  ''
                )}`}
              >
                {primaryContactPersonPhoneNumber}
              </a>
            </p>

            <p>
              {secondaryContactPersonName} - {secondaryContactPersonTitle}
              <br />
              <a href={`mailto:${secondaryContactPersonEmail}`}>
                {secondaryContactPersonEmail}
              </a>
              <br />
              {secondaryContactPersonPhoneNumber && (
                <a
                  href={`tel:${secondaryContactPersonPhoneNumber.replaceAll(
                    '-',
                    ''
                  )}`}
                >
                  {secondaryContactPersonPhoneNumber}
                </a>
              )}
            </p>
          </div>
        </article>
      </Layout>
    </Fragment>
  );
};

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 17 } }) {
      edges {
        node {
          infoPage {
            businessAddressLine1
            businessAddressLine2
            businessPhoneNumber
            primaryContactPersonEmail
            primaryContactPersonName
            primaryContactPersonPhoneNumber
            primaryContactPersonTitle
            secondaryContactPersonEmail
            secondaryContactPersonName
            secondaryContactPersonPhoneNumber
            secondaryContactPersonTitle
          }
        }
      }
    }
  }
`;

ContactPage.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            infoPage: PropTypes.shape({
              businessAddressLine1: PropTypes.string,
              businessAddressLine2: PropTypes.string,
              businessPhoneNumber: PropTypes.string,
              primaryContactPersonEmail: PropTypes.string,
              primaryContactPersonName: PropTypes.string,
              primaryContactPersonPhoneNumber: PropTypes.string,
              primaryContactPersonTitle: PropTypes.string,
              secondaryContactPersonEmail: PropTypes.string,
              secondaryContactPersonName: PropTypes.string,
              secondaryContactPersonPhoneNumber: PropTypes.string,
              secondaryContactPersonTitle: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({}),
};

ContactPage.defaultProps = {
  location: {},
};

export default ContactPage;
