import React from "react"
import { Link } from "gatsby"
export const Header = props => (
    <>
    <header>
        <nav className="nav">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                    <Link to="/" className="navbar-brand">
                        DOTIK
                    </Link>
                    </div>
                    <div className="col right">
                        <ul>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link href="/" className="btn hire-us">Hire Us</Link></li>
                        </ul>
                    </div>
                </div>  
            </div>
        </nav>
    </header>
    </>
)


