import * as React from "react"
import { Link } from "gatsby"
import Title from "../components/Title"

interface IArticle {
  data: {
    cover: {
      url: string;
    };
    id: string;
    meta: {
      createdAt: string;
    }
    slug: string;
    subtitle: string;
    tag: [{
      category: string;
    }];
    title: string;
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