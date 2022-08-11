import * as React from "react"
import { graphql } from "gatsby"

const ArticlePost = ({data}) => {
  const result = data.datoCmsArticle
  const title = result.title
  const tag = result.tag[0].category
  const time = result.meta.createdAt
  const subtitle = result.subtitle
  const content = result.content

  return (
    <div>
      <div>
        {tag}
      </div>
      <time>
        {time}
      </time>
      <h1>
        {title}
      </h1>
      <h2>
        {subtitle}
      </h2>
      <div dangerouslySetInnerHTML={{__html: content}} />
    </div>
  )
};

export default ArticlePost

export const query = graphql`
  query PostQuery($slug: String) {
    datoCmsArticle(slug: {eq: $slug}) {
      meta {
        createdAt(formatString: "MMMM DD, YYYY")
      }
      title
      subtitle
      content
      tag {
        category
      }
    }
  }
`;