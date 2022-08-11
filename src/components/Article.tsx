import * as React from "react"
import { Link } from "gatsby"
import Title from "../components/Title"

const Article = ({data}) => {
  const dataID = data.id
  const slug = data.slug
  const coverURL = data.cover.url
  const category = data.tag[0].category
  const title = data.title
  const time = data.meta.createdAt

  return (
    <article className="mb-5">
      <Link to={`/${slug}`}>
        <img
          src={coverURL}
          width="300"
        />
      </Link>
      <span>
        {category}
      </span>
      <Title
        tagName="h3"
        text={title}
        key={dataID}
      />
      <time>
        { time }
      </time>
    </article>
  )
};

export default Article;