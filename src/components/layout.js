import React from "react"
import { Helmet } from "react-helmet"

import SideBar from "./SideBar"

import * as layoutStyles from "./layout.module.scss"
import "../styles/sass/global.scss"

const Head = () => {
  return (
    <Helmet>
      <title>Sean Barker WebDev Portfolio</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300,400,600&display=swap"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  )
}

export default ({ children }) => {
  return (
    <div className={layoutStyles.layout}>
      <Head />
      <div className={layoutStyles.sidebar}>
        <SideBar />
      </div>
      <div className={layoutStyles.content}>{children}</div>
    </div>
  )
}
