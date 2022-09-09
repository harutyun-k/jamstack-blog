import * as React from "react"
import { Link, graphql } from "gatsby"
import Article from "../components/Article"
import Pagination from "../components/Pagination"

interface IPostArchive {
  pageContext: {
    currentPage: number;
    limit: number;
    numPages: number;
    skip: number;
  };

  data: {
    allDatoCmsArticle: {
      nodes: [{
        cover: {
          url: string;
        }
        id: string;
        meta: {
          createdAt: string;
        }
        slug: string;
        subtitle: string;
        tag: [{
          category: string;
        }]
        title: string;
      }]
    }
  };
}

export default function PostArchive({pageContext, data}: IPostArchive): JSX.Element {
  const allArticles = data.allDatoCmsArticle.nodes

  return (
    <section className="container m-auto flex flex-col gap-4 p-3 md:p-5 lg:p-8">
      <Link
        className="mb-3 p-2 underline uppercase"
        to="/"
      >
        Home
      </Link>
      <h1 className="mb-15 font-black text-3xl uppercase">
        Archive
      </h1>
      <div className="mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allArticles.map(article => {
          return <Article
            key={article.id}
            data={article} 
          />
        })}
      </div>
      <Pagination data={pageContext} />
    </section>
  )
}

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