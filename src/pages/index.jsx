import React from "react"
import {Layout} from "../components/layout"
import {FrontPage} from "./frontpage"
import Blog from "./blog"
//styles
import "../assets/style.scss"
class IndexPage extends React.Component {
  render() {
    return (
        // <Blog />
        <Layout location={this.props.location}>
          <FrontPage />
        </Layout>
    )
  }
}

export default IndexPage
