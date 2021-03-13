import React from "react"
import {Layout} from "../components/layout"
import {Link} from "gatsby"
import "../assets/blog.scss"
class Blog extends React.Component {
  render() {
    return (
      <Layout title="Our Blog" className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="categories">
                <li className="is-active">Category 1</li>
                <li>Category 2</li>
                <li>Category 3</li>
                <li>Category 4</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="posts">
          <div className="container">
            <div className="row">
              {[1,2,3,4,5,6].map((e, i) => (
              <div className="col-lg-4" key={i}>
                <Link to="/post" className="post">
                  <div className="post-cover">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/God2-Sistine_Chapel.png" alt=""/>
                  </div>
                  <div className="post-category">Processes and Tools</div>
                  <h6 className="post-title">
                    How outsource design process help your business prosper?
                  </h6>
                  <div className="post-author">
                    by Anastasiya Rogatyuk 
                  </div>
                </Link>
              </div>
              ))}
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <button className="btn btn-outlined btn-medium btn-load-more">Load more</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Blog