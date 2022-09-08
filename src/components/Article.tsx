import * as React from "react"
import { Link } from "gatsby"
import Title from "../components/Title"

interface IArticle {
  data: {
    cover: {
      url: String;
    };
    id: String;
    meta: {
      createdAt: String;
    }
    slug: String;
    subtitle: String;
    tag: Array<{
      category: String;
    }>;
    title: String;
  }
}

export default function Article({data}: IArticle): JSX.Element {
  return (
    <article className="relative bg-slate-100 rounded-2xl overflow-hidden">
      <Link to={`/${data.slug}`}>
        <img
          className="w-full h-60 object-cover"
          src={data.cover.url}
          alt={data.title}
        />
      </Link>
      <div className="p-8 flex flex-col gap-2">
        <Link
          className="block font-bold hover:underline uppercase"
          to={`/category/${data.tag[0].category.toLowerCase()}`}
        >
          { data.tag[0].category }
        </Link>
        <Title
          tagName="h3"
          text={data.title}
          key={data.id}
        />
        <time className="italic text-sm">
          { data.meta.createdAt }
        </time>
      </div>
    </article>
  )
}