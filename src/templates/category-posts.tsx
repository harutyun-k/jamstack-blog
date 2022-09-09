import * as React from "react"
import { Link, graphql } from "gatsby"
import Card from "../components/Card"
import Layout from "../components/Layout";

interface CategoryPosts {
  data: {
    allDatoCmsArticle: {
      nodes: [{
        meta: {
          createdAt: string;
        }
        id: string;
        slug: string;
        title: string;
        subtitle: string;
        cover: {
          url: string;
        }
        tag: [{
          category: string;
        }]
      }]
    }
  }
}

export default function CategoryPosts({data}: CategoryPosts): JSX.Element {
  const result = data.allDatoCmsArticle.nodes
  const categoryTitle = result[0].tag[0].category

  return (
    <Layout>
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
          return <Card
            key={v.id}
            data={v} 
          />
        })}
      </div>
    </Layout>
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