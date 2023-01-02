import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HomepageCard from '../components/patterns/homepageCard';

const tempData = [
  {
    id: 1,
    imgSrcSmall: 'https://picsum.photos/id/237/375/210',
    imgSrcMedium: 'https://picsum.photos/id/237/750/420',
    imgSrcLarge: 'https://picsum.photos/id/237/1500/840',
    imgAlt: 'detailed description of the image',
    imgWidth: 1500,
    imgHeight: 840,
    client: 'High Noon',
    directorName: 'Editor Name',
    projectName: 'hn1',
  },
  {
    id: 2,
    imgSrcSmall: 'https://picsum.photos/id/238/375/210',
    imgSrcMedium: 'https://picsum.photos/id/238/750/420',
    imgSrcLarge: 'https://picsum.photos/id/238/1500/840',
    imgAlt: 'detailed description of the image',
    imgWidth: 1500,
    imgHeight: 840,
    client: 'New Amsterdam',
    directorName: 'Editor Name',
    projectName: 'na1',
  },
  {
    id: 3,
    imgSrcSmall: 'https://picsum.photos/id/239/375/210',
    imgSrcMedium: 'https://picsum.photos/id/239/750/420',
    imgSrcLarge: 'https://picsum.photos/id/239/1500/840',
    imgAlt: 'detailed description of the image',
    imgWidth: 1500,
    imgHeight: 840,
    client: 'Snapchat',
    directorName: 'Editor Name',
    projectName: 'sc1',
  },
  {
    id: 4,
    imgSrcSmall: 'https://picsum.photos/id/240/375/210',
    imgSrcMedium: 'https://picsum.photos/id/240/750/420',
    imgSrcLarge: 'https://picsum.photos/id/240/1500/840',
    imgAlt: 'detailed description of the image',
    imgWidth: 1500,
    imgHeight: 840,
    client: 'Lyft',
    directorName: 'Editor Name',
    projectName: 'lyft1',
  },
  {
    id: 5,
    imgSrcSmall: 'https://picsum.photos/id/241/375/210',
    imgSrcMedium: 'https://picsum.photos/id/241/750/420',
    imgSrcLarge: 'https://picsum.photos/id/241/1500/840',
    imgAlt: 'detailed description of the image',
    imgWidth: 1500,
    imgHeight: 840,
    client: 'High Noon',
    directorName: 'Editor Name',
    projectName: 'hn2',
  },
  {
    id: 6,
    imgSrcSmall: 'https://picsum.photos/id/242/375/210',
    imgSrcMedium: 'https://picsum.photos/id/242/750/420',
    imgSrcLarge: 'https://picsum.photos/id/242/1500/840',
    imgAlt: 'detailed description of the image',
    imgWidth: 1500,
    imgHeight: 840,
    client: 'Rohl',
    directorName: 'Editor Name',
    projectName: 'rohl1',
  },
  {
    id: 7,
    imgSrcSmall: 'https://picsum.photos/id/243/375/210',
    imgSrcMedium: 'https://picsum.photos/id/243/750/420',
    imgSrcLarge: 'https://picsum.photos/id/243/1500/840',
    imgAlt: 'detailed description of the image',
    imgWidth: 1500,
    imgHeight: 840,
    client: 'Vista Print',
    directorName: 'Editor Name',
    projectName: 'vp1',
  },
  {
    id: 8,
    imgSrcSmall: 'https://picsum.photos/id/244/375/210',
    imgSrcMedium: 'https://picsum.photos/id/244/750/420',
    imgSrcLarge: 'https://picsum.photos/id/244/1500/840',
    imgAlt: 'detailed description of the image',
    imgWidth: 1500,
    imgHeight: 840,
    client: 'High Noon',
    directorName: 'Editor Name',
    projectName: 'hn3',
  },
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {tempData.map((project) => {
      const pageLink = `${project.client
        .toLowerCase()
        .replace(' ', '-')}-${project.projectName
        .toLowerCase()
        .replace(' ', '-')}`;

      return (
        <Link to={pageLink}>
          <HomepageCard
            key={project.id}
            imgSrcSmall={project.imgSrcSmall}
            imgSrcMedium={project.imgSrcMedium}
            imgSrcLarge={project.imgSrcLarge}
            imgAlt={project.imgAlt}
            imgWidth={project.imgWidth}
            imgHeight={project.imgHeight}
            client={project.client}
            directorName={project.directorName}
            projectName={project.projectName}
          />
        </Link>
      );
    })}
  </Layout>
);

export default IndexPage;
