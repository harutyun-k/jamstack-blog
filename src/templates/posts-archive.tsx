import * as React from "react"
import { Link, graphql } from "gatsby"
import Article from "../components/Article"
import Pagination from "../components/Pagination"

const PostArchive = ({pageContext, data}) => {
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
      <Pagination data={pageContext} />
    </section>
  )
};

export default PostArchive
export const query = graphql`
  query ($skip: Int, $limit: Int) {
    allDatoCmsArticle (
      sort: {
        order: DESC,
        fields: meta___createdAt
      },
      limit: $limit,
      skip: $skip
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