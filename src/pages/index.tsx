import * as React from "react"
import type { HeadFC } from "gatsby"
import { Link, graphql } from "gatsby"
import Article from "../components/Article"
import FeatureArticle from "../components/FeatureArticle"

const IndexPage = ({data}) => {
  const categories = data.allDatoCmsArticleCategory.nodes
  const latestNews = data.allDatoCmsArticle.nodes
  const featuredStories = data.allDatoCmsFeatured.nodes[0].posts

  return (
    <div className="container m-auto">
      <div className="m-5 mb-10">
        {categories.map(category => {
          return <Link className="mr-5 uppercase" to={`/category/${category.category.toLowerCase()}`}>{category.category}</Link>
        })}
      </div>

      <section className="m-5 mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <h2
          className="w-full font-black text-3xl uppercase"
          style={{ gridColumn: "1 / -1" }}
        >
          Latest news
        </h2>
        {latestNews.map(news => {
          return <Article
            className="grow"
            key={news.id}
            data={news} 
          />
        })}
        <Link
          className="w-full font-black underline"
          style={{ gridColumn: "1 / -1" }}
          to="/archive"
        >
          Archive
        </Link>
      </section>

      <section className="m-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <h2
          className="w-full font-black text-3xl uppercase"
          style={{ gridColumn: "1 / -1" }}
        >
          Featured Stories
        </h2>
        {featuredStories.map(story => {
          return <FeatureArticle
            key={story.id}
            data={story}
          />
        })}
      </section>
    </div>
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
        subtitle
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
