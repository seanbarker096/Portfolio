import React from "react"

import * as footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p className={footerStyles.info}>
        Designed by Sean Barker using Gatsby & Sass, 2021
      </p>
    </footer>
  )
}

export default Footer
