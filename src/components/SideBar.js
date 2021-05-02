import React from "react"
import { Link } from "gatsby"

import icons from "../images/sprite.svg"
import * as sideBarStyles from "./sidebar.module.scss"

const elements = [
  {
    text: "About Me",
    iconId: "icon-user",
    to: "/about-me/",
  },
  {
    text: "Skills",
    iconId: "icon-display",
    to: "/skills/",
  },
  {
    text: "Projects",
    iconId: "icon-pencil",
    to: "/projects/",
  },
]
const SideBar = () => {
  //loop over elements to render
  const renderedChildren = elements.map(el => {
    return (
      <Link className={sideBarStyles.sideBarLink} to={el.to} key={el.to}>
        <li className={sideBarStyles.sideBarItem}>
          <svg className={`${sideBarStyles.icon} ${sideBarStyles.mainIcon}`}>
            <use xlinkHref={`${icons}#${el.iconId}`}></use>
          </svg>
          <p className={sideBarStyles.text}>{el.text}</p>
        </li>
      </Link>
    )
  })
  return (
    <div className={sideBarStyles.sideBarContent}>
      <Link
        to="/"
        className={`${sideBarStyles.sideBarLink} ${sideBarStyles.heading}`}
      >
        Sean Barker
      </Link>

      <ul>{renderedChildren}</ul>
      <div className={sideBarStyles.socials}>
        <a
          href="mailto:sean.barker096@gmail.com"
          rel="external"
          target="_blank"
        >
          <svg className={`${sideBarStyles.icon} ${sideBarStyles.socialsIcon}`}>
            <use xlinkHref={`${icons}#icon-mail2`}></use>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/sean-barker-0821b1b2/"
          rel="external"
          target="_blank"
        >
          <svg className={`${sideBarStyles.icon} ${sideBarStyles.socialsIcon}`}>
            <use xlinkHref={`${icons}#icon-linkedin`}></use>
          </svg>
        </a>
        <a
          href="https://github.com/seanbarker096"
          rel="external"
          target="_blank"
        >
          <svg className={`${sideBarStyles.icon} ${sideBarStyles.socialsIcon}`}>
            <use xlinkHref={`${icons}#icon-github`}></use>
          </svg>
        </a>
      </div>
      <span className={sideBarStyles.footer}>
        Designed by Sean Barker, 2021
      </span>
    </div>
  )
}

export default SideBar
