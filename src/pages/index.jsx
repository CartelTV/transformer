import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HomepageCard from '../components/patterns/homepageCard';

const IndexPage = ({ data }) => {
  const homepageData = data.allWpProject.nodes
    .filter((item) => item?.project?.showOnHomepage)
    .reverse();

  return (
    <Layout>
      <SEO title="Home" />
      {homepageData.map((item) => {
        const pageLink = `${item.project.client
          .toLowerCase()
          .replaceAll(' ', '-')
          .replaceAll('/', '-')
          .replaceAll(':', '')}-${item.project.projectName
          .toLowerCase()
          .replaceAll(' ', '-')
          .replaceAll(':', '')}`;

        return (
          <Link to={pageLink} key={pageLink}>
            <HomepageCard
              image={item.project.image}
              client={item.project.client}
              director={item.project.director}
            />
          </Link>
        );
      })}
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWpProject: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          project: PropTypes.shape({
            client: PropTypes.string,
            director: PropTypes.string,
            image: PropTypes.shape({}),
            projectName: PropTypes.string,
          }),
        })
      ),
    }),
  }).isRequired,
};

export default IndexPage;

export const query = graphql`
  query {
    allWpProject {
      nodes {
        project {
          client
          director
          projectName
          showOnHomepage
          image {
            gatsbyImage(
              breakpoints: [376, 751, 1920]
              cropFocus: CENTER
              fit: COVER
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 1920
            )
            altText
          }
        }
      }
    }
  }
`;
