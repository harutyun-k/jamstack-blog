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
    <div className="container">
      <div className="m-5 mb-10">
        {categories.map(category => {
          return <Link className="mr-5 uppercase" to={`/category/${category.category.toLowerCase()}`}>{category.category}</Link>
        })}
      </div>

      <section className="m-5 mb-20">
        <h2 className="mb-5 font-black text-2xl uppercase">Latest news</h2>
        {latestNews.map(news => {
          return <Article
            key={news.id}
            data={news} 
          />
        })}
        <Link
          className="font-black text-2xl underline uppercase"
          to="/archive"
        >
          Archive
        </Link>
      </section>

      <section className="m-5">
        <h2 className="mb-5 text-2xl font-black">
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
