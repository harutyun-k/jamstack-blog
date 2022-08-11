import * as React from "react"
import type { HeadFC } from "gatsby"
import { graphql } from "gatsby"
import Article from "../components/Article"
import FeatureArticle from "../components/FeatureArticle"

const IndexPage = ({data}) => {
  const latestNews = data.allDatoCmsArticle.nodes
  const featuredStories = data.allDatoCmsFeatured.edges

  return (
    <div className="container">
      <section className="m-5 mb-20">
        <h2 className="mb-5 font-black text-2xl uppercase">Latest news</h2>
        {latestNews.map(news => {
          return <Article
            key={news.id}
            data={news} 
          />
        })}
      </section>

      <section className="m-5">
        <h2 className="mb-5 text-2xl font-black">
          Featured Stories
        </h2>
        {featuredStories.map(story => {
          return <FeatureArticle
            key="story.id"
            data={story}
          />
        })}
      </section>
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    allDatoCmsArticle(limit: 10) {
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
    
    allDatoCmsFeatured(limit: 3) {
      edges {
        node {
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
  }
`
export default IndexPage
export const Head: HeadFC = () => <title>Home Page</title>
