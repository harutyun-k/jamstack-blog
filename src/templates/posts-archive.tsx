import * as React from "react"
import { Link, graphql } from "gatsby"
import Article from "../components/Article"

const PostArchive = ({data}) => {
  const allArticles = data.allDatoCmsArticle.nodes

  return (
    <section className="m-5 mb-20">
      <Link to="/">
        Home
      </Link>
      <h2 className="mb-5 font-black text-2xl uppercase">Archive</h2>
      {allArticles.map(article => {
        return <Article
          key={article.id}
          data={article} 
        />
      })}
    </section>
  )
};

export default PostArchive
export const query = graphql`
  {
    allDatoCmsArticle (
      sort: {
        order: DESC,
        fields: meta___createdAt
      },
      limit: 10
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
  }
`