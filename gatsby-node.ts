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
    const { slug } = node.slug;

    createPage({
      path: `/${slug}`,
      component: blogPostTemplate,
      context: {
        slug
      }
    });
  });
};