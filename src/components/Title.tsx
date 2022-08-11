import * as React from "react";

const Tag = ({ tagName, children, ...props }) => (
  React.createElement(tagName, props , children)
)

const Title = ({tagName, text}) => {
  return (
    <Tag tagName={tagName}>
      {text}
    </Tag>
  )
};

export default Title;