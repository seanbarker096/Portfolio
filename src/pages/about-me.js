import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import * as aboutMeStyles from "./about-me.module.scss"
import icons from "../images/sprite.svg"
import bristolLogo from "../images/university-of-bristol-logo.png"
import mernLogo from "../images/mern-stack.png"

const AboutMe = () => {
  const PaddedAboutSection = ({
    title,
    text,
    iconId,
    padding,
    imgUrl = null,
    sectionName,
    children,
    id,
  }) => {
    return (
      <div
        className={
          padding === "left"
            ? aboutMeStyles.paddingLeft
            : aboutMeStyles.paddingRight
        }
      >
        <section
          className={`${aboutMeStyles.section} ${aboutMeStyles[sectionName]} ${id}`}
        >
          {/* <div
            className={`${aboutMeStyles.flexVertical} ${aboutMeStyles.inheritWidthParent}`}
          > */}
          {/* <h1 className={aboutMeStyles.heading}>{title}</h1> */}
          {/* <div className={aboutMeStyles.inheritSiblingWidthWrapper}></div> */}
          {/* </div> */}
          {imgUrl ? (
            <img
              className={aboutMeStyles.icon}
              alt="bristol-uni-logo"
              src={imgUrl}
            />
          ) : (
            <svg className={aboutMeStyles.icon}>
              <use xlinkHref={`${icons}#${iconId}`}></use>
            </svg>
          )}
          <div>{children}</div>
        </section>
      </div>
    )
  }
  return (
    <Layout>
      <main className={aboutMeStyles.about}>
        <h1 className={aboutMeStyles.headingMain}>About Me</h1>

        <PaddedAboutSection
          title="About Me"
          iconId="icon-user"
          padding="left"
          sectionName="aboutMe"
          id={aboutMeStyles.notLastPaddedSection}
        >
          {aboutMeText}
        </PaddedAboutSection>
        <PaddedAboutSection
          title="Education"
          iconId="icon-user"
          padding="right"
          imgUrl={bristolLogo}
          sectionName="education"
          id={aboutMeStyles.notLastPaddedSection}
        >
          {educationText}
        </PaddedAboutSection>
        <PaddedAboutSection
          title="Web Development"
          iconId="icon-user"
          padding="left"
          imgUrl={mernLogo}
          sectionName="webDevelopmentSection"
        >
          {developmentExperienceText}
        </PaddedAboutSection>

        <section className={`${aboutMeStyles.navSection}`}>
          <Link to="/projects/">
            <h1>Check out my work</h1>
          </Link>
        </section>
      </main>
    </Layout>
  )
}

export default AboutMe

let aboutMe = () => {
  return (
    <>
      My name is Sean Barker. I am an engineering graduate and full-time
      consultant who is looking for new opportunities in full stack development.
      I am a self taught full-stack developer with experience in building MERN
      stack applications.
    </>
  )
}
const aboutMeText = aboutMe()
let education = () => {
  return (
    <>
      <p>
        I graduated from the University of Bristol 2019 with a First Class
        Master's Degree in Aerospace Engineering.
      </p>
      <br></br>
      <p>
        My studies have helped me to become an experienced problem solver with a
        technical and numerical background. I thoroughly enjoyed the challenge
        of learning new and challenging technical concepts in my degree, and I
        am now hoping to continue this learning through a career in web
        development.
      </p>
    </>
  )
}
const educationText = education()

let web = () => {
  return (
    <>
      <h3>Front end</h3>
      <p>
        I am experienced in using React and Redux for building website UIs,
        especially in the context of CRUD applications. I understand many of the
        core concepts and features of React and Redux; for example, functional
        components, hooks, reusable components for DRY code, and thunks for
        asynchronous action creators and communication with APIs.
      </p>
      <br></br>
      <p>
        I have also used CSS and Sass to create various online course projects,
        as well as this website. This has included utilising CSS modules for
        more robust and scalable CSS code, Sass mixins for reusable styles and
        responsive design, Sass loops and variables, and experience in
        implementing CSS animations.
      </p>
      <br></br>
      <h3>Back end</h3>
      <p>
        I have built several MERN stack applications including a personal
        project, and some have experience in using javascript for backend
        development with Node.js. I have built online course and personal
        applications including APIs with Express using a model-view-controller
        model. This has included building APIs managing nested data structures.
      </p>
      <br></br>
      <p>
        Most applications I have built relied upon a MongoDB database for the
        backend with Mongoose. This has given me good experience working with
        document-orientated databases and schemas. Schemas I have developed in
        the past have also utilised more advanced database features such as
        asynchronous middlewares, validation middlewares and aggregation
        pipelines for generating nested API data structures.
      </p>
      <br></br>
      <p>
        I have completed a Vanilla JS online course, and am familiar with core
        Javascript technologies, concepts and features. This includes the DOM
        and DOM events, asynchronous JS, Object Orientated Programming, and
        higher order functions.
      </p>
    </>
  )
}
const developmentExperienceText = web()
