import * as React from "react"
import { Link } from "gatsby"
import Title from "../components/Title"

interface IFeatureArticle {
  cover: {
    url: String;
  }
  id: String;
  meta: {
    createdAt: String;
  }
  slug: String;
  title: String;
}

interface FeatureArticleProps {
  data: IFeatureArticle;
}

export default function FeatureArticle ({data}: FeatureArticleProps) {
  return (
    <article className="relative bg-slate-100 rounded-2xl overflow-hidden">
      <Link to={`/${data.slug}`}>
        <img
          className="w-full h-60 object-cover"
          src={data.cover.url}
          width="300"
        />
      </Link>
      <div className="p-8 flex flex-col gap-2">
        <Title
          tagName="h3"
          text={data.title}
          key={data.id}
        />
        <time>
          { data.meta.createdAt }
        </time>
      </div>
    </article>
  )
}