import * as React from "react"
import { Link, graphql } from "gatsby"
import Article from "../components/Article"

interface IArticlePost {
  data: {
    datoCmsArticle: {
      meta: {
        createdAt: string;
      },
      title: string;
      subtitle: string;
      content: string;
      tag: [{
        category: string;
      }];
    }

    allDatoCmsArticle: {
      nodes: [{
        meta: {
          createdAt: string;
        };
        id: string;
        slug: string;
        title: string;
        subtitle: string;
        cover: {
          url: string;
        };
        tag: [{
          category: string;
        }]
      }]
    }
  }
}

export default function ArticlePost({data}: IArticlePost): JSX.Element {
  const article = data.datoCmsArticle;
  const articleTitle = article.title;
  const articleCategory = article.tag[0].category;
  const articleCategoryLink = `/category/${articleCategory.toLowerCase()}`;
  const articleTime = article.meta.createdAt;
  const articleSubtitle = article.subtitle;
  const articleContent = article.content;

  const latestNews = data.allDatoCmsArticle.nodes;

  return (
    <div className="container m-auto flex flex-col gap-4 p-3 md:p-5 lg:p-8">
      <Link to="/">
        Home
      </Link>
      <Link
        className="font-black uppercase"
        to={ articleCategoryLink }
      >
        { articleCategory }
      </Link>
      <time className="italic">
        { articleTime }
      </time>
      <h1 className="mb-3 font-black text-5xl uppercase">
        { articleTitle }
      </h1>
      <h2 className="font-black text-4xl uppercase">
        { articleSubtitle }
      </h2>
      <div
        className="mb-10 flex flex-col gap-4"
        dangerouslySetInnerHTML={{__html: articleContent}}
      />
      <section className="flex flex-col gap-5">
        <h2 className="w-full font-black text-3xl uppercase mb-5">
          Latest news
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {latestNews.map(news => {
            return <Article
              key={news.id}
              data={news} 
            />
          })}
        </div>
        <Link
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg p-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center uppercase"
          to="/archive"
        >
          Archive
        </Link>
      </section>
    </div>
  )
};

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