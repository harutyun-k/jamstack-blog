import * as React from "react"
import type { HeadFC } from "gatsby"
import { Link, graphql } from "gatsby"
import Article from "../components/Article"
import FeatureArticle from "../components/FeatureArticle"

const IndexPage = ({data}) => {
  const categories = data.allDatoCmsArticleCategory.nodes

  const news = data.allDatoCmsArticle.nodes
  const latestNews = news.reverse()
  latestNews.length = 3
  
  const featuredStories = data.allDatoCmsFeatured.nodes[0].posts

  latestNews.forEach((news, index) => {
    featuredStories.forEach(story => {
      if (news.id === story.id) {
        latestNews.splice(index, 1)
      }
    })
  })

  return (
    <div className="container">
      <div className="m-5 mb-30">
        {categories.map(category => {
          return <Link className="mr-5" to={`/${category.category.toLowerCase()}`}>{category.category}</Link>
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
query MyQuery {
  allDatoCmsArticleCategory {
    nodes {
      id
      category
    }
  }
  
  allDatoCmsArticle{
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
