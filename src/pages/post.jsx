import React from "react"
import {Layout} from "../components/layout"
import {Link} from "gatsby"
import "../assets/blog.scss"
import ChevronRight from "../assets/icons/chevronRight.svg"
import ChevronLeft from "../assets/icons/chevronLeft.svg"
class Post extends React.Component {
  render() {
    return (
      <Layout className="article">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
                <Link to="/blog" className="btn btn-back"><ChevronLeft />Back to blog</Link>
            </div>
          </div>
        </div>
        <article className="article-wrapper">
          <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="cover">
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="article-category">Processes and Tools</div>
                    <h2 className="article-title">How outsource design process help your business prosper?</h2>
                    <div className="article-details">
                        <div className="article-author">Article by Anastasiya Rogatyuk </div>
                        <span className="splitter"></span>
                        <div className="article-date">4 Dec, 2020</div>
                    </div>
                </div>
                <div className="col-lg-8 article-content">
                    <p>Lucrative business development dwells mainly on UI/ UX app or website design. According to Forbes, better UI could increase conversion rate by 200%, and better UX design could yield conversion rates of up to 400%.</p>
                    <p>
                        Keep reading to find out the next:
                        <ul>
                            <li>how to visualize your concept;</li>
                            <li>how to visualize your concept;</li>
                        </ul>
                    </p>
                    <a href="#" className="custom-article-view">
                        <div className="sub-title">read also</div>
                        <div className="content-wrapper">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/God2-Sistine_Chapel.png" alt=""/>
                            <div>
                                <h6 className="title">Top tips how to improve user experience design for your web Site or App</h6>                            
                                <div className="author">by Anastasiya Rogatyuk </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="custom-download">
                        <div className="sub-title">download</div>
                        <div className="content-wrapper">
                            <h6 className="title">Top tips how </h6>                            
                            <ChevronRight />
                        </div>
                    </a>
                </div>
            </div>
          </div>
        </article>
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                    <div className="row">
                <div className="col-lg-12 text-center">
                    <h3>Fancy to make your product concept real?</h3>
                    <button className="btn btn-fill btn-medium btn-load-more">Kick off the project with us!</button>
                </div>
                </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="posts">
          <div className="container">
            <div className="row">
              {[1,2,3].map(e => (
              <div className="col-lg-4">
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
          </div>
        </div>
      </Layout>
    )
  }
}

export default Post