import React from "react"

import * as projectCardStyles from "./projectCard.module.scss"

const ProjectCard = ({ cardTitle, id, onClickCallback, bgImg }) => {
  return (
    <div
      className={projectCardStyles.card}
      onClick={onClickCallback}
      id={id}
      style={{
        backgroundImage:
          "linear-gradient(to right bottom, #ffc31f, #ffd970), url(" +
          bgImg +
          ")",
      }}
    >
      <div className={projectCardStyles.banner}>
        <h1 className={projectCardStyles.heading}>{cardTitle}</h1>
      </div>
    </div>
  )
}

export default ProjectCard

// #ffce47, #ffd970

// $color-primary: #ffce47;
// $color-primary-dark: #ffc31f;
// $color-primary-light: #ffd970;
// $color-primary-very-dark: #f5b400;
// $color-primary-very-light: #fffaeb;
