import * as React from "react";

const Tag = ({ tagName, children, ...props }) => (
  React.createElement(tagName, props , children)
)

interface TitleProps {
  tagName: String;
  text: String;
}

const Title = ({tagName, text}: TitleProps) => {
  return (
    <Tag tagName={tagName}>
      {text}
    </Tag>
  )
};

export default Title;