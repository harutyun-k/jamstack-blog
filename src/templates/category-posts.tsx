import * as React from "react"
import { Link, graphql } from "gatsby"
import Article from "../components/Article"

const CategoryPosts = ({data}) => {
  const result = data.allDatoCmsArticle.nodes
  const categoryTitle = result[0].tag[0].category

  return (
    <div className="container ml-20" style={{padding: "20px"}}>
      <Link to="/">
        Home
      </Link>
      <h1 className="font-black text-3xl uppercase" style={{margin: "20px 0", fontSize: "30px"}}>
        {categoryTitle}
      </h1>
      {result.map(v => {
        return <Article
          className="mb-5"
          key={v.id}
          data={v} 
        />
      })}
    </div>
  )
};

export default CategoryPosts
export const query = graphql`
  query ($category: String) {
    allDatoCmsArticle(
      sort: {
        order: DESC,
        fields: meta___createdAt
      },
      filter: {
        tag: {
          elemMatch: {
            category: {
              eq: $category
            }
          }
        }
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
`;