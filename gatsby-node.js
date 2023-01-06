const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Editor Detail pages
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
      path: page.slug,
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
