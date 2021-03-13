import React from "react"
import {Link} from "gatsby"
//icons
import Inst from "../assets/icons/inst.svg"
import Behance from "../assets/icons/beh.svg"
import Drible from "../assets/icons/drible.svg"
import ChevronLeft from "../assets/icons/chevronLeft.svg"
import ChevronRight from "../assets/icons/chevronRight.svg"
class FrontPage extends React.Component {
  render() {
    return (
      <>
        <section className="hero">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-l-12">
                <h1>
                  We use the Force of UX/UI to design Web & Mobile Apps with a human touch
                </h1>
              </div>
              </div>
              <div className="row align-items-end">
              <div className="col-lg-6">
                <ul className="social-links">
                  <li><Behance/></li>
                  <li><Drible /></li>
                  <li><Inst /></li>
                </ul>
              </div>
              <div className="col-lg-2 description">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/God2-Sistine_Chapel.png" alt=""/>
              </div>
              <div className="col-lg-4 description">
                 <p className="">Dotik [dotyik] is the Ukrainian word for “touch”. It implies trust and empathy. You trust us with your project and we empathize with you and the users, always keeping both your goals and their needs in mind.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="partner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h5 className="global-title">Trusted by</h5>
                <ul className="partner-list">
                  <li><Link to="/">1</Link></li>
                  <li><Link to="/">2</Link></li>
                  <li><Link to="/">3</Link></li>
                  <li><Link to="/">4</Link></li>
                  <li><Link to="/">5</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="research">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h3 className="global-title">The Star UX Design-saga or what can we do for you?</h3>
              </div>
            </div>
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-5">image</div>
                <div className="col-lg-6">
                  <div className="slider research-slider">
                    <div className="slider-wrapper">
                      <div className="slider-item">
                        <div className="label">
                          Episode 1
                        </div>
                        <h5>Discovery and Research</h5>
                        <p>We believe in data-driven UX design. So we start with a meticulous study of all available info and get more data if needed. What do your competitors do? What do your users need and why? Competitive analysis and user interviews will answer those questions. Value proposition canvas and customer journey maps are to be drawn and studied under the microscope. Rest assured: our UX Research will discover both your pains and the remedies for them.</p>
                      </div>
                    </div>
                    <div className="slider-action">
                      <div className="prev"><ChevronLeft/></div>
                      <div className="counter"><span className="counte-current">1</span>/<span className="counter-total">2</span></div>
                      <div className="next"><ChevronRight/></div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <div className="bg-gradient">
          <section className="works">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <h3 className="global-title">Works we proud of</h3>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4">
                  <div className="works-item">
                    <Link to="/" className="cover">
                      <div className="cover-picture">
                        <img src="https://i.pinimg.com/474x/25/64/d1/2564d18b69a2dae8339e3b2da5dbddb1.jpg" alt=""/>
                      </div>
                      <h3 className="help-text">
                        See our case on Behance
                      </h3>
                    </Link>
                    <h5 className="title">
                    Yangol
                    </h5>
                    <div className="tags">
                      <ul>
                        <li>#Mobile</li>
                        <li>#Web</li>
                      </ul>
                    </div>
                    <div className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </div>
                  </div> 
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-4">
                <div className="works-item second">
                    <Link to="/" className="cover">
                      <div className="cover-picture">
                        <img src="https://i.pinimg.com/474x/25/64/d1/2564d18b69a2dae8339e3b2da5dbddb1.jpg" alt=""/>
                      </div>
                      <h3 className="help-text">
                        See our case on Behance
                      </h3>
                    </Link>
                    <h5 className="title">
                    Yangol
                    </h5>
                    <div className="tags">
                      <ul>
                        <li>#Mobile</li>
                        <li>#Web</li>
                      </ul>
                    </div>
                    <div className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </section>
          <section className="review">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <h3 className="global-title">According to our clients...</h3>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="slider review-slider">
                    <div className="slider-wrapper">
                        <div className="slider-item">
                            <div className="author">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/God2-Sistine_Chapel.png" alt=""/>
                              <div className="author-details">
                                  <div className="author-name">
                                  German Gesse
                                  </div>
                                  <div className="author-position">
                                  Co-founder, Coca-Cola
                                  </div>
                              </div>
                            </div>
                            <p className="description">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    </div>
                    <div className="slider-action">
                        <div className="prev"><ChevronLeft/></div>
                        <div className="counter"><span className="counte-current">1</span>/<span className="counter-total">2</span></div>
                        <div className="next"><ChevronRight/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="blog">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <h3 className="global-title">A library of inspiring stories</h3>
                </div>
              </div>
              <div className="row justify-content-center">
                  <div className="col-lg-8 text-center">
                    <ul className="items">
                      <li>
                        <span className="date">Sep 14</span>
                        <Link to="/"><h6>UX Design Deliverables from a Silicon Valley Agency</h6></Link>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/God2-Sistine_Chapel.png" alt=""/>
                      </li>
                      <li>
                        <span className="date">Sep 14</span>
                        <Link to="/"><h6>UX Design Deliverables from a Silicon Valley Agency</h6></Link>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/God2-Sistine_Chapel.png" alt=""/>
                      </li>
                      <li>
                        <span className="date">Sep 14</span>
                        <Link to="/"><h6>UX Design Deliverables from a Silicon Valley Agency</h6></Link>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/God2-Sistine_Chapel.png" alt=""/>
                      </li>
                    </ul>
                    <Link to="/" className="btn btn-outline">Visit our blog</Link>
                  </div>
              </div>
            </div>
          </section>
          <section className="team">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <h3 className="global-title">Meet our UX-jedi!</h3>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4">
                 <img src="https://i.pinimg.com/474x/25/64/d1/2564d18b69a2dae8339e3b2da5dbddb1.jpg" alt=""/>
                </div>
                <div className="col-lg-6">
                    <p className="description">
                      Once upon a time in a galaxy not so far away a team of Design enthusiasts was united by a sincere belief that UX design is more than skin deep. We are convinced that really great design is data-driven and should not only affect business metrics but also change users’ quality of life. Understanding both the needs of your organization and your users is the cornerstone of our work. Thus, our clients, be it a startup or a big multigalactic multinational company, get the best products and the best service.
                    </p>
                    <ul>
                      <li>
                        <span className="sub-title">Our CEO</span>
                        <div className="name">Valentin Brodskiy</div>
                      </li>
                      <li>
                        <span className="sub-title">Our CEO</span>
                        <div className="name">Valentin Brodskiy</div>
                      </li>
                    </ul>

                </div>
              </div>
            </div>
          </section>
          <section className="faq">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <h3 className="global-title">FAQ</h3>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <ul className="items">
                    <li>
                      <h6>What is the Discovery stage? How does it influence the final outcome of the project?</h6>
                      <p>During this stage, we get to know the clients' businesses, their pains, and objectives. Moreover, we pay great attention to interviewing users, researching their needs, and motivations. Such detailed analysis allows us to understand, which problems are of prime importance and what users really want. As a result, our clients get a profitable product, which is pleasant to use.</p>
                    </li>
                    <li>
                      <h6>Why is UX audit important?</h6>
                      <p></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="contact">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <h3 className="global-title">Would you like to give your product
a UX-boost in one meeting?</h3> 
                </div>
                <div className="col-lg-6"><div className="sub-title text-center">We can help! Leave us your email, so we could contact you, examine your product, and offer some advice in UX design.</div></div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-6">
                    <form action="/">
                      <div className="group">      
                        <input type="text" required name="name"/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor="name">Your name</label>
                      </div>
                      <div className="group">      
                        <input type="text" required name="email"/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor="email">E-mail</label>
                      </div>
                      <div className="group">      
                        <textarea type="text" required name="description"/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor="description">Tell about your idea (optinal)</label>
                      </div>
                      <button className="btn btn-submit" type="submit">Send</button>
                    </form>
                </div>
              </div>
            </div>
          </section>
        </div>
    </>)
    }
}
export default FrontPage