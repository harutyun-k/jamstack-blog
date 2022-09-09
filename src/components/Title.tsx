import * as React from "react";

interface ITag {
  tagName: string;
  children: string;
}

function Tag({ tagName, children, ...props }: ITag): JSX.Element {
  return React.createElement(tagName, props , children)
}

interface ITitle {
  tagName: string;
  text: string;
}

export default function Title({tagName, text}: ITitle): JSX.Element {
  return (
    <Tag tagName={tagName}>
      {text}
    </Tag>
  )
}
