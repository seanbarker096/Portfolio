/* cSpell:enable */
import React from "react"
import { useState } from "react"

import Layout from "../components/Layout"
import * as skillsStyles from "./skills.module.scss"
// import skillsText from "../text/skills-text"

const Skills = () => {
  const initialActiveText = "Click an icon to view text"
  const [activeText, setActiveText] = useState(["My skills", initialActiveText])
  const [activeFaintText, setActiveFaintText] = useState(["", ""])
  const [iconClicked, setIconClicked] = useState(false)

  const handleIconClick = e => {
    const id = e.target.id
    if (id) {
      setActiveText([skillsText[id][0], skillsText[id][1]])
      setActiveFaintText(["", ""])
      setIconClicked(true)
    }
  }

  const handleMouseOver = e => {
    const id = e.target.id
    //if statement checks following:
    //    if id (i.e. mouseover icon not parent) AND yet to click an icon
    //    AND either first mouseover (initialtext set) OR activeText blank (subsequent mouseovers)
    //    as long as user yet to click
    // prettier-ignore

    if (
      id &&
      !iconClicked &&
      (activeText[1] === initialActiveText || !activeText[1])
    ) {
      setActiveFaintText([skillsText[id][0], skillsText[id][1]])
      //on first mouseOver want initial message to fade out
      setActiveText(["", ""])
    }
  }

  const handleMouseOut = e => {
    setActiveFaintText(["", ""])
  }

  return (
    <Layout>
      <main className={skillsStyles.skills}>
        <div
          onClick={handleIconClick}
          onMouseOver={handleMouseOver}
          onFocus={handleMouseOver}
          onMouseOut={handleMouseOut}
          onBlur={handleMouseOut}
          className={skillsStyles.iconsContainer}
        >
          <ul>
            <li className={skillsStyles.icon} id="cssSass">
              <p id="cssSass">CSS & Sass</p>
            </li>
            <li className={skillsStyles.icon} id="js">
              <p id="js">JS</p>
            </li>
            <li className={skillsStyles.icon} id="mongo">
              <p id="mongo">Mongo</p>
            </li>
            <li className={skillsStyles.icon} id="node">
              <p id="node">Node.js</p>
            </li>
            <li className={skillsStyles.icon} id="react">
              <p id="react">React</p>
            </li>
            <li className={skillsStyles.icon} id="redux">
              <p id="redux">Redux</p>
            </li>
            <li className={skillsStyles.icon} id="express">
              <p id="express">Express</p>
            </li>
            <li className={skillsStyles.icon} id="gatsby">
              <p id="gatsby">Gatsby</p>
            </li>
          </ul>
        </div>
        <div className={skillsStyles.textContainer}>
          <div className={skillsStyles.headings}>
            <h1 className={skillsStyles.headingMain}>{activeText[0]}</h1>
            <h1
              className={
                activeFaintText[0] && !iconClicked
                  ? skillsStyles.headingFaintActive
                  : skillsStyles.headingFaint
              }
            >
              {activeFaintText[0]}
            </h1>
          </div>
          <div className={skillsStyles.textBox}>
            <div className={skillsStyles.textMain}>{activeText[1]}</div>
            <div
              className={
                activeFaintText[0] && !iconClicked
                  ? skillsStyles.textFaintActive
                  : skillsStyles.textFaint
              }
            >
              {activeFaintText[1]}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Skills

const mongoText = (
  <>
    <p>
      I have built several backend databases using MongoDB and Mongoose, in
      online courses as well as in personal projects. I have good experience in
      building schemas to create document-orientated databases.
    </p>
    <br></br>
    <p>
      My experience with MongoDB and Mongoose includes creating basic schema
      middlewares, validation middlewares, and creating statics and methods. I
      have experience in using parent, child, and two-way referencing in schemas
      to model different relationships between resources. For one of the more
      advanced personal projects I have built, I also used MongoDB aggregation
      pipelines in schema middlewares to generate nested data structures to
      reflect the interdependencies between users, comments and comment
      reactions.
    </p>
  </>
)

const CSSSassText = (
  <>
    <p>
      I am familiar with many fundamental concepts, technologies and design
      philosophies behind CSS, such as specificity, the box-model, flex-box and
      responsive design. I have experience in using SCSS too, including mixins,
      functions and loops.
    </p>
    <br></br>
    <p>
      This portfolio website was built without the use of CSS frameworks, using
      CSS and Sass (SCSS) only. I also have experience with the use of BEM
      notation, as well as CSS Modules in React applications for more localised
      and modular CSS design.
    </p>
    <br></br>
    <p>
      I would like to continue to develop my understanding of CSS animations and
      Sass, and begin to explore using CSS grid in personal projects in the near
      future.
    </p>
  </>
)

const JSText = (
  <>
    I have a solid foundation of Javascript knowledge having used it for the
    front and backend of applications. I have built apps using Vanilla JS as
    well as various frameworks and technology stacks.
  </>
)

const reactText = (
  <>
    I am a confident user of the React library, and have built lots of
    applications which use it. Some of the core React concepts and features I am
    experienced in include:
    <ul className={skillsStyles.textList}>
      <br></br>
      <li>
        Hooks, including useRef to prevent stale state issues, useEffect for
        replicating class component life-cycle methods, and useMemo/useCallback
        for optimization.
      </li>
      <li>Functional components and class components.</li>
      <li>Component level state in class and functional components.</li>
      <li>Controlled components.</li>
      <li>React Router.</li>
    </ul>
  </>
)

const reduxText = (
  <>
    I have experience with building Redux stores for React applications to
    manage global state. My experience includes:
    <ul className={skillsStyles.textList}>
      <br></br>
      <li>Basic Redux including building action creators and reducers.</li>
      <li>
        Creating thunks with redux-thunk, particularly when using asynchronous
        action creators.
      </li>
      <li>
        Building reducers and applications capable of tracking the lifecycle of
        asynchronous requests (pending, failed, completed etc.).
      </li>
      <li>
        Creating both normalized and nested state objects for applications
        receiving nested data from APIs.
      </li>
      <li>
        Redux hooks, including useSelector to select specific slices of a Redux
        store.
      </li>
      <li>
        React-Redux, including use of common functions such as connect and
        mapStateToProps.
      </li>
    </ul>
  </>
)

const nodeJsText = (
  <>
    I have experience in using Node.js through some popular libraries including
    Express and Gatsby and have an understanding of some of the fundamental
    concepts important to how Node.js operates, including asynchronous
    programming and callbacks, promises, async await and the event loop. I am
    very interested in learning more about how Node.js works, as well as
    exploring other popular Node.js libraries.
  </>
)

const expressText = (
  <>
    I have built various backend servers in online course and personal projects
    using Express. I am confident in creating custom Express middleware
    functions route handling, and have experience with popular Express
    middlewares such as cookie-parser for cookie-based authentication, and
    Passport for O-Auth flows. Course and personal project applications i have
    built have also used custom Express error handling middleware. Several of
    the applications I have built have used a model-view-controller approach to
    server design.
  </>
)

const gatsbyText = (
  <>
    I am new to Gatsby, and have experienced it for the first time when building
    this website. I plan to continue to learn more about Gatsby and it's plug-in
    libraries to assist me in creating static sides. I also hope to learn more
    about hydration and how it can be used to add app-like features to Gatsby
    sites whilst retaining the benefits of server-side rendering.
  </>
)

const skillsText = {
  mongo: ["MongoDB", mongoText],
  cssSass: ["CSS & Sass (SCSS)", CSSSassText],
  react: ["React", reactText],
  redux: ["Redux", reduxText],
  node: ["Node.js", nodeJsText],
  express: ["Express", expressText],
  gatsby: ["Gatsby", gatsbyText],
  js: ["Javascript", JSText],
}

// I am aware of some of the important trade offs and
// considerations in the use of server side rendering compared to full
// client-side rendering, and and how libaries such as Gatsby can assist in the
// generation of static sites, but still allow app-like-features through
// process such as hydration.
// </p>
// <br></br>
// <p>
