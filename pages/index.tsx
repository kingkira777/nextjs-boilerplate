import { ReactElement } from "react"
import Layout from "./components/layout"
 
export default function Page() {
  return (
      <>HOME!</>
  )
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}