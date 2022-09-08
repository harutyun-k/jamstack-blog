import * as React from "react";

const Tag = ({ tagName, children, ...props }) => (
  React.createElement(tagName, props , children)
)

interface ITitle {
  tagName: String;
  text: String;
}

export default function Title({tagName, text}: ITitle): JSX.Element {
  return (
    <Tag tagName={tagName}>
      {text}
    </Tag>
  )
}
