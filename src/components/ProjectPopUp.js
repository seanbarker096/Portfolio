// import React from "react"

// import * as projectPopUpStyles from "./projectPopUp.module.scss"
// import IconStrip from "./IconStrip"

// const ProjectPopUp = ({
//   active,
//   projectIconsTextArr,
//   imgUrl,
//   projectName,
//   projectText,
//   closePopUp,
// }) => {
//   const handleCloseClick = () => {
//     closePopUp()
//   }
//   return (
//     <div
//       className={
//         active
//           ? `${projectPopUpStyles.popup} ${projectPopUpStyles.active}`
//           : `${projectPopUpStyles.popup} ${projectPopUpStyles.inActive}`
//       }
//     >
//       <span onClick={handleCloseClick} className={projectPopUpStyles.close}>
//         &times;
//       </span>
//       <img
//         src={imgUrl}
//         className={projectPopUpStyles.image}
//         alt="project-image"
//       ></img>
//       <div className={projectPopUpStyles.containerSecondary}>
//         <h1 className={projectPopUpStyles.headingMain}>{projectName}</h1>
//         <p className={projectPopUpStyles.textBody}>{projectText}</p>
//         <div className={projectPopUpStyles.iconsContainer}>
//           <IconStrip iconTextArr={projectIconsTextArr} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProjectPopUp

import React from "react"

import * as projectPopUpStyles from "./projectPopUp.module.scss"
import IconStrip from "./IconStrip"

const ProjectPopUp = ({
  active,
  projectIconsTextArr,
  bgImg,
  projectName,
  closePopUp,
  popUpImages,
  body,
  footer,
}) => {
  const handleCloseClick = () => {
    closePopUp()
  }

  return (
    <div
      className={
        active
          ? `${projectPopUpStyles.modal} ${projectPopUpStyles.modalActive}`
          : `${projectPopUpStyles.modal} ${projectPopUpStyles.modalInactive}`
      }
    >
      <div
        className={
          active
            ? `${projectPopUpStyles.popup} ${projectPopUpStyles.popupActive}`
            : `${projectPopUpStyles.popup} ${projectPopUpStyles.popupInactive}`
        }
      >
        <div
          src=""
          className={projectPopUpStyles.backgroundImage}
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, #ffc31f, #ffd970), url(" +
              bgImg +
              ")",
          }}
        ></div>
        <span onClick={handleCloseClick} className={projectPopUpStyles.close}>
          &times;
        </span>

        <div className={projectPopUpStyles.containerSecondary}>
          <h1 className={projectPopUpStyles.headingMain}>{projectName}</h1>
          <div className={projectPopUpStyles.popUpBody}>{body}</div>
          <div className={projectPopUpStyles.footer}>
            <div>{footer}</div>
            <IconStrip iconTextArr={projectIconsTextArr} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPopUp
