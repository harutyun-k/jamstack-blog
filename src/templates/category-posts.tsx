import * as React from "react"
import { Link, graphql } from "gatsby"
import Article from "../components/Article"

interface ICategoryPosts {
  data: {
    allDatoCmsArticle: {
      nodes: Array<{
        meta: {
          createdAt: String;
        }
        id: String;
        slug: String;
        title: String;
        subtitle: String;
        cover: {
          url: String;
        }
        tag: Array<{
          category: String;
        }>
      }>
    }
  }
}

export default function CategoryPosts({data}: ICategoryPosts): JSX.Element {
  const result = data.allDatoCmsArticle.nodes
  const categoryTitle = result[0].tag[0].category

  return (
    <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-auto p-3 md:p-5 lg:p-8">
      <Link
        className="underline uppercase"
        style={{ gridColumn: "1 / -1" }}
        to="/"
      >
        Home
      </Link>
      <h1
        className="mb-5 font-black text-3xl uppercase"
        style={{ gridColumn: "1 / -1" }}
      >
        { categoryTitle }
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

export const query = graphql`
  query (
    $category: String,
    $limit: Int,
    $skip: Int
  ) {
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
`;