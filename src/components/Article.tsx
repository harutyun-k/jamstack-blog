import * as React from "react"
import Title from "../components/Title"

const Article = ({data}) => {
  return (
    <article className="mb-5">
      <a href={data.slug}>
        <img
          src={data.cover.url}
          width="300"
        />
      </a>
      <Title
        tagName="h3"
        text={data.title}
        key={data.id}
      />
    </article>
  )
};

export default Article;