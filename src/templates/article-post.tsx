import * as React from "react"
import { Link, graphql } from "gatsby"
import Article from "../components/Article"

const ArticlePost = ({data}) => {
  const latestNews = data.allDatoCmsArticle.nodes

  const result = data.datoCmsArticle
  const title = result.title
  const tag = result.tag[0].category
  const time = result.meta.createdAt
  const subtitle = result.subtitle
  const content = result.content

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "20px"
      }}
    >
      <Link to="/">
        Home
      </Link>
      <Link
        className="uppercase underline"
        to={`/category/${tag.toLowerCase()}`}
      >
        {tag}
      </Link>
      <time>
        {time}
      </time>
      <h1 className="font-bold">
        {title}
      </h1>
      <h2 className="font-bold">
        {subtitle}
      </h2>
      <div
        className="mb-10"
        dangerouslySetInnerHTML={{__html: content}}
      />

      <section>
        <h2 className="mb-5 font-black text-2xl uppercase">Latest news</h2>
        {latestNews.map(news => {
          return <Article
            key={news.id}
            data={news} 
          />
        })}
        <Link
          className="font-black text-2xl underline uppercase"
          to="/archive"
        >
          Archive
        </Link>
      </section>
    </div>
  )
};

export default ArticlePost

export const query = graphql`
  query ($slug: String) {
    datoCmsArticle(
      slug: {
        eq: $slug
      }
    ) {
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

    allDatoCmsArticle(
      sort: {
        order: DESC,
        fields: meta___createdAt
      }, 
      limit: 3
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