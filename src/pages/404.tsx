import * as React from "react"
import { HeadFC } from "gatsby"
import Layout from "../components/Layout";


const NotFoundPage = () => {
  return (
    <Layout>
      <div>
        404
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
