import * as React from "react"
import { Link } from "gatsby"
import Title from "../components/Title"

interface Article {
  data: {
    cover: {
      url: string;
    };
    id: string;
    meta: {
      createdAt: string;
    }
    slug: string;
    tag?: [{
      category: string;
    }];
    title: string;
  }
}

export default function Article({data}: Article): JSX.Element {
  const cardID = data.id;
  const cardLink = `/${data.slug}`;
  const cardImage = data.cover.url;
  const cardTitle = data.title;
  const cardCategory = data.tag;
  const cardTime = data.meta.createdAt;

  return (
    <article className="relative bg-slate-100 rounded-2xl overflow-hidden">
      <Link to={cardLink}>
        <img
          className="w-full h-60 object-cover"
          src={cardImage}
          alt={cardTitle}
        />
      </Link>
      <div className="p-8 flex flex-col gap-2">
        {cardCategory && <Link
          className="block font-bold hover:underline uppercase"
          to={`/category/${cardCategory[0].category.toLowerCase()}`}
        >
          {cardCategory[0].category}
        </Link>}
        <Title
          tagName="h3"
          text={cardTitle}
          key={cardID}
        />
        <time className="italic text-sm">
          {cardTime}
        </time>
      </div>
    </article>
  )
}