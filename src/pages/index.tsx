import * as React from "react"
import type { HeadFC } from "gatsby"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {
  return (
    <h1>
      {data.allArticles}
    </h1>
  )
}

export const query = graphql`
  query {
    allArticles {
      id
      title
      subtitle
    }
  }
`
export default IndexPage
export const Head: HeadFC = () => <title>Home Page</title>
