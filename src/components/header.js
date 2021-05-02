import React from "react"
import * as headerStyles from "./header.module.scss"
import icons from "../images/sprite.svg"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <img src="" alt="logo" className="header__logo" />
      <div className={headerStyles.textBox}>
        <h1 className="headingPrimary headingPrimaryLight">Sean Barker</h1>
        <h2 className="headingSecondary">
          Engineering graduate looking for full-stack development roles
        </h2>
      </div>
      <div className={headerStyles.iconContainer}>
        <svg className={headerStyles.icon}>
          <use xlinkHref={`${icons}#icon-mail2`}></use>
        </svg>
        <svg className={headerStyles.icon}>
          <use xlinkHref={`${icons}#icon-linkedin`}></use>
        </svg>
        <svg className={headerStyles.icon}>
          <use xlinkHref={`${icons}#icon-github`}></use>
        </svg>
      </div>
    </header>
  )
}

export default Header
