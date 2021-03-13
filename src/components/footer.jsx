import React from "react"
import { Link } from "gatsby"
import Inst from "../assets/icons/inst.svg"
import Behance from "../assets/icons/beh.svg"
import Drible from "../assets/icons/drible.svg"
import Linked from "../assets/icons/linked.svg"
export const Footer = props => (
    <footer>
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                <Link to="/" className="brand">Dotik</Link>
                <p className="desc">
                We use the Force of UX/UI to design Web & Mobile <br />Apps with a human touch
                </p>
                <div className="copywrite">
                © Dotik Agency 2021
                </div>
            </div>
            <div className="col-lg-6">
                <ul className="nav menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/">Hire Us</Link></li>
                </ul>
                <ul className="nav social">
                    <li><Behance/></li>
                    <li><Drible/></li>
                    <li className="linked"><Linked/></li>
                    <li><Inst/></li>
                </ul>
                <ul className="nav nav-secondary">
                    <li><Link to="/">Terms of conditions</Link></li>
                    <li><Link to="/">Privicy Policy</Link></li>
                </ul>
            </div>
            </div>
        </div>
    </footer>
)


