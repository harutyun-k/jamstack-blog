import * as React from "react"
import { Link } from "gatsby"
import Title from "../components/Title"

const FeatureArticle = ({data}) => {
  const post = data;
  const postID = post.id
  const postSlug = `/${post.slug}`
  const postCover = post.cover.url
  const postTitle = post.title
  const postTime = post.meta.createdAt

  return (
    <article className="mb-5">
      <Link to={postSlug}>
        <img
          src={postCover}
          width="300"
        />
      </Link>
      <Title
        tagName="h3"
        text={postTitle}
        key={postID}
      />
      <time>
        { postTime }
      </time>
    </article>
  )
};

export default FeatureArticle;