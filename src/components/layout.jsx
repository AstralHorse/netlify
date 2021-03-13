import React from "react"
import {Header} from "./header"
import {Footer} from "./footer"

export const Layout = props => {
    return (
      <>
        <Header/>
           <main className={props.className ? props.className : ""}>
              {props.title && (
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <h1 style={{margin: "72px 0"}}>{props.title}</h1>
                    </div>
                  </div>
                </div>
              )}
              {props.children}
           </main>
        <Footer />
      </>
    )
}
