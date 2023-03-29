const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Project Detail pages
  const workDetailResult = await graphql(`
    {
      allWpProject(limit: 200) {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (workDetailResult.errors) {
    reporter.error(
      'There was an error fetching posts',
      workDetailResult.errors
    );
  }

  const { allWpProject } = workDetailResult.data;

  const workDetailTemplate = path.resolve(`./src/templates/workDetail.jsx`);

  allWpProject.nodes.forEach((page) => {
    createPage({
      // will be the url for the page
      path: `work/${page.slug}`,
      // specify the component template of your choice
      component: slash(workDetailTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this page's data.
      context: {
        id: page.id,
      },
    });
  });

  // Reel page
  const reelPageResult = await graphql(`
    {
      allWpReel {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (reelPageResult.errors) {
    reporter.error(
      'There was an error fetching posts',
      workDetailResult.errors
    );
  }

  const { allWpReel } = reelPageResult.data;

  allWpReel.nodes.forEach((page) => {
    createPage({
      // will be the url for the page
      path: `work/${page.slug}`,
      // specify the component template of your choice
      component: slash(workDetailTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this page's data.
      context: {
        id: page.id,
      },
    });
  });
};
