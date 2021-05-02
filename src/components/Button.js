import React from "react"

import * as buttonStyles from "./button.module.scss"

const Button = ({ children, className }) => {
  return (
    <div className={className} id={buttonStyles.button}>
      {children}
    </div>
  )
}

export default Button
