const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/article-post.tsx`)

  const { data } = await graphql(`
    query MyQuery {
      allDatoCmsArticle {
        nodes {
          slug
        }
      }
    }
  `);

  data.allDatoCmsArticle.nodes.forEach(node => {
    createPage({
      path: `/${node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.slug
      }
    });
  });
};