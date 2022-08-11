import * as React from "react"
import type { HeadFC } from "gatsby"
import { graphql } from "gatsby"
import Article from "../components/Article";

const IndexPage = ({data}) => {
  const articles = data.allDatoCmsArticle.nodes;
  console.log(data)

  return (
    <div className="container">
      <section className="m-5">
        <h2 className="mb-5">Latest news</h2>
        {articles.map(art => {
          return <Article
            key={art.id}
            data={art} 
          />
        })}
      </section>
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    allDatoCmsArticle {
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
  }
`
export default IndexPage
export const Head: HeadFC = () => <title>Home Page</title>
