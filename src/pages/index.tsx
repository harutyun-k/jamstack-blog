import * as React from "react"
import type { HeadFC } from "gatsby"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {
  console.log(data);

  return (
    <h1>
      {JSON.stringify(data.allDatoCmsArticle)}
    </h1>
  )
}

export const query = graphql`
  query MyQuery {
    allDatoCmsArticle {
      nodes {
        title
      }
    }
  }
`
export default IndexPage
export const Head: HeadFC = () => <title>Home Page</title>
