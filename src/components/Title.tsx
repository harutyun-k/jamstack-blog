import * as React from "react";

interface Tag {
  tagName: string;
  children: string;
}

function Tag({ tagName, children, ...props }: Tag): JSX.Element {
  return React.createElement(tagName, props , children)
}

interface Title {
  tagName: string;
  text: string;
}

export default function Title({tagName, text}: Title): JSX.Element {
  return (
    <Tag tagName={tagName}>
      {text}
    </Tag>
  )
}
