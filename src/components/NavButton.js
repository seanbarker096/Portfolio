import React from "react"
import { navigate } from "gatsby"

import Button from "./Button"

const NavButton = ({ children, className, to }) => {
  const handleClick = () => {
    navigate(to)
  }
  return (
    <div onClick={handleClick} className="navButtonWrapper">
      <Button className={className}>{children}</Button>
    </div>
  )
}

export default NavButton
