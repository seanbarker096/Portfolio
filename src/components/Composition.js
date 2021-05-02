import React from "react"

import * as compositionStyles from "./composition.module.scss"

const Composition = ({ imgs }) => {
  const renderImages = () => {
    return imgs.map((img, idx) => {
      console.log(compositionStyles.img1)
      return (
        <img
          src={img.path}
          alt={`${img.alt}`}
          key={`image ${idx}`}
          className={compositionStyles[`img${idx + 1}`]}
        ></img>
      )
    })
  }
  return <div className={compositionStyles.container}>{renderImages()}</div>
}

export default Composition
