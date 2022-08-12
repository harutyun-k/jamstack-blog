const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const categoryPostTemplate = path.resolve(`src/templates/category-posts.tsx`)
  const blogPostTemplate = path.resolve(`src/templates/article-post.tsx`)

  const { data } = await graphql(`
    query MyQuery {
      allDatoCmsArticleCategory {
        nodes {
          category
        }
      }

      allDatoCmsArticle {
        nodes {
          slug
        }
      }
    }
  `);

  data.allDatoCmsArticleCategory.nodes.forEach(node => {
    const categorySlug = node.category

    createPage({
      path: `/category/${categorySlug.toLowerCase()}`,
      component: categoryPostTemplate,
      context: {
        slug: categorySlug.toLowerCase(),
        category: categorySlug
      }
    });
  })

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