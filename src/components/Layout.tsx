import * as React from "react"

interface ILayout {
  children: JSX.Element;
}

export default function Layout({children}: ILayout): JSX.Element {
  return (
    <main>
      {children}
    </main>
  )
}