import React from "react"

import * as iconStripStyles from "./iconStrip.module.scss"

const IconStrip = ({ iconTextArr }) => {
  const renderIcons = () => {
    return iconTextArr.map(iconText => {
      return (
        <li id={iconText}>
          <span>{iconText}</span>
        </li>
      )
    })
  }
  return <ul className={iconStripStyles.iconStrip}>{renderIcons()}</ul>
}

export default IconStrip
