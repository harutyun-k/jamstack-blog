import * as React from "react"
import { graphql } from "gatsby"

const ArticlePost = ({data}) => {
  const result = data.datoCmsArticle
  const title = result.title
  const subtitle = result.subtitle
  return (
    <div>
      <h1>
        {title}
      </h1>
      <h2>
        {subtitle}
      </h2>
    </div>
  )
};

export default ArticlePost

export const query = graphql`
  query PostQuery($slug: String) {
    datoCmsArticle(slug: {eq: $slug}) {
      title
      subtitle
    }
  }
`;