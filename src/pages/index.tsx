import * as React from "react"
import type { HeadFC } from "gatsby"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout";
import Card from "../components/Card"

interface IIndexPage {
  data: {
    allDatoCmsArticleCategory: {
      nodes: [{
        id: string;
        category: string;
      }];
    };

    allDatoCmsArticle: {
      nodes: [{
        meta: {
          createdAt: string;
        };
        id: string;
        slug: string;
        title: string;
        cover: {
          url: string;
        };
        tag: [{
          category: string;
        }];
      }];
    };

    allDatoCmsFeatured: {
      nodes: [{
        posts: [{
          id: string;
          slug: string;
          cover: {
            url: string;
          };
          title: string;
          meta: {
            createdAt: string;
          };
        }];
      }];
    };
  }
}

const IndexPage = ({data}: IIndexPage) => {
  const categories = data.allDatoCmsArticleCategory.nodes
  const latestNews = data.allDatoCmsArticle.nodes
  const featuredStories = data.allDatoCmsFeatured.nodes[0].posts

  return (
    <Layout>
      <div className="container m-auto flex flex-col gap-7 md:gap-12 p-3 md:p-5 lg:p-8">
        <h1 className="mb-3 w-full font-black text-5xl uppercase">
          Gatsby blog
        </h1>
        <div className="flex flex-wrap gap-5">
          <h2 className="w-full font-black text-3xl uppercase">Topics</h2>
          {categories.map(category => {
            return <Link className="uppercase rounded-sm bg-slate-200 hover:bg-slate-300 p-2" to={`/category/${category.category.toLowerCase()}`}>{category.category}</Link>
          })}
        </div>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <h2
            className="w-full font-black text-3xl uppercase"
            style={{ gridColumn: "1 / -1" }}
          >
            Latest news
          </h2>
          {latestNews.map(news => {
            return <Card
              key={news.id}
              data={news} 
            />
          })}
          <Link
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg p-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center uppercase"
            style={{ gridColumn: "1 / -1" }}
            to="/archive"
          >
            Archive
          </Link>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <h2
            className="w-full font-black text-3xl uppercase"
            style={{ gridColumn: "1 / -1" }}
          >
            Featured Stories
          </h2>
          {featuredStories.map(story => {
            return <Card
              key={story.id}
              data={story}
            />
          })}
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsArticleCategory(
      sort: {
        order: DESC,
        fields: meta___createdAt
      }
    ) {
      nodes {
        id
        category
      }
    }
    
    allDatoCmsArticle(
      sort: {
        order: DESC,
        fields: meta___createdAt
      }, 
      limit: 3
    ) {
      nodes {
        meta {
          createdAt(formatString: "MMMM DD, YYYY")
        }
        id
        slug
        title
        cover {
          url
        }
        tag {
          category
        }
      }
    }

    allDatoCmsFeatured(
      sort: {
        order: DESC,
        fields: meta___createdAt
      },
      limit: 3
    ) {
      nodes {
        posts {
          id
          slug
          cover {
            url
          }
          title
          meta {
            createdAt(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
export default IndexPage
export const Head: HeadFC = () => <title>Home Page</title>
