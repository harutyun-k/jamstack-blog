import * as React from "react"

interface Layout {
  children: JSX.Element;
}

export default function Layout({children}: Layout): JSX.Element {
  return (
    <main>
      {children}
    </main>
  )
}