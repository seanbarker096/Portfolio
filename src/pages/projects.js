import React from "react"
import { useState } from "react"

import Layout from "../components/layout"
import * as projectsStyles from "./projects.module.scss"
import ProjectPopUp from "../components/ProjectPopUp"
import ProjectCard from "../components/ProjectCard"

import icons from "../images/sprite.svg"
import herokuLogo from "../images/heroku-logo-solid-black.png"
import netlifyLogo from "../images/netlify-light.png"

//popup background images
import natoursBgImg from "../images/nat-2.jpg"
import natoursBgImg2 from "../images/nat-6.jpg"
import surveyBgImg from "../images/survey4.jpg"
import portfolioBgImg from "../images/pencil.jpg"
import ecommBgImg from "../images/credit-card.jpg"
import articleRaterBgImg from "../images/article.jpg"

//MAIN PAGE
const Projects = () => {
  const [popupClickedId, setPopupClickedId] = useState(null)
  const [showPopUp, setShowPopUp] = useState(false)

  const handleClick = e => {
    console.log("clicked", e.target.id)
    if (e.target.id) {
      setPopupClickedId(e.target.id)
      setShowPopUp(true)
    }
  }

  const handlePopUpClose = () => {
    setShowPopUp(false)
  }

  const renderPopUp = () => {
    const id = popupClickedId
    if (popupClickedId) {
      return (
        <ProjectPopUp
          active={showPopUp}
          popUpImages={projectData[id].popUpImages}
          projectText={projectData[id].projectText}
          projectName={projectData[id].projectName}
          projectIconsTextArr={projectData[id].projectIconsTextArr}
          closePopUp={handlePopUpClose}
          bgImg={projectData[id].bgImg}
          body={projectData[id].body}
          footer={projectData[id].footer}
        ></ProjectPopUp>
      )
    }
    return null
  }

  const renderProjectCards = () => {
    return Object.keys(projectData).map(projectKey => {
      return (
        <div className={projectsStyles.gridItem} key={projectKey}>
          <ProjectCard
            id={projectKey}
            onClickCallback={handleClick}
            cardTitle={projectData[projectKey].projectName}
            bgImg={projectData[projectKey].bgImg}
          />
        </div>
      )
    })
  }

  return (
    <Layout>
      <main className={projectsStyles.projects}>
        <h1 className={projectsStyles.headingPrimary}>My Projects</h1>
        <div className={projectsStyles.grid}>{renderProjectCards()}</div>
      </main>
      {renderPopUp()}
    </Layout>
  )
}

export default Projects

/////////////////////////////////////////////////////////////////////
//POPUP BODY CONTENT
const articleRaterBody = (
  <>
    <p>
      This Article Rater application is a full-stack personal project I created.
      It is an app where users can share articles they have read, and other
      users can interact with them, either by voting or by commenting.
    </p>
    <br></br>
    <p>
      It required the use of nested data structures generated on the server and
      then stored globally on the client-side using Redux. Client-side data was
      normalised and split into seperate Redux store slices for each resource
      (users, articles, comments, article votes, and comment votes).
    </p>
    <br></br>
    <p>
      This application implements user authentication via email and password
      login, as well as OAuth flow via Google OAuth 2.0. The application uses
      JSON web tokens stored in web cookies for authorization and for managing
      and maintaining user sessions. Refresh tokens and Cross Site Request
      Forgery (CSRF) tokens are also implemented to maintain user sessions and
      for protection given the JWT is stored in a web cookie.
    </p>
    <br></br>
    <b>Key app features</b>
    <ul className={projectsStyles.popupList}>
      <br></br>
      {/* <li>
        A React-Redux front-end communicating with an Express backend server
      </li> */}
      <li>
        Nested data structures, created using MongoDB aggregation pipelines.
      </li>
      <li>
        Normalization of the nested backend data on the client-side for easy
        access inside React components. Global state including server-side data
        is stored in a Redux store.
      </li>
      <li>
        Optimization using memoization and React hooks. Use of the useSelector
        Redux hook to only subscribe components to updates from specific slices
        of the Redux store.
      </li>
      <li>
        Custom Javascript classes which inherit methods from a base "Token"
        class - these are used for creating JWT, CSRF and JWT Refresh tokens.
      </li>
      <li>
        HTTP only cookies for storing JWTs. Double submittal of CSRF tokens (via
        HTTP header using token in local storage, and via a web cookie) to
        mitigate against CSRF attacks.
      </li>
      <li>OAuth and email/password authentication.</li>
      <li>
        Use of MongoDB schema middlewares and methods via Mongoose for processes
        including deleting child documents when a parent is deleted, or
        populating parents documents with children before sending to the client.
      </li>
    </ul>
  </>
)

const natoursBody = (
  <>
    <p>
      This application was built as part of "Node.js, Express, MongoDB & More:
      The Complete Bootcamp 2021", a Udemy course by Jonas Schmedtmann.
    </p>
    <br></br>
    <b>Key application features:</b>
    <ul className={projectsStyles.popupList}>
      <li>
        MongoDB backend with Mongoose for schema generation, middlewares and
        schema methods.
      </li>

      <li>Express middleware for creating route handlers.</li>
      <li>
        Use of Javascript classes in server-side confident, including an API
        features class with methods for query pagination, filtering and sorting.
      </li>
      <li>
        MongoDB aggregation pipelines for server side data processing and
        manipulation before sending to the client.
      </li>
      <li>
        Global error handling using custom Express middleware, custom Javascript
        error classes, and higher order functions to wrap controller functions
        in an asynchronous error catcher.
      </li>
      <li>User profile image uploads using Multer.</li>
      <li>Stripe integration to simulate online payments.</li>
      <li>
        Integration with nodemailer to send users password reset tokens via
        email.
      </li>
    </ul>
    <br></br>
    If you would like to play with the site, you can use the following test
    account details: testUser@gmail.com, password: "password".
  </>
)

const emailSurveyAppBody = (
  <>
    <p>
      This application was built as part of "Node with React: Fullstack Web
      Development", an online Udemy course by Stephen Girder.
    </p>
    <br></br>
    <b>Key application features:</b>
    <ul className={projectsStyles.popupList}>
      <li>
        OAuth authentication using Passportjs library integrated with an Express
        server. Client-side sessions managed using Express cookie-session
        middleware.
      </li>
      <li>MongoDB database with Mongoose for schema creation.</li>
      <li>Mongoose subdocuments for creating nested schemas.</li>
      <li>
        App integration with sendgrid and stripe for survey distribution and to
        simulate customer payments.
      </li>
      <li>React and Redux front-end.</li>
    </ul>
  </>
)

const portfolioBody = (
  <>
    <p>
      This website was built using Gatsby for server-side static site
      generation.
    </p>
    <br></br>
    <b>Key features of this website:</b>
    <ul className={projectsStyles.popupList}>
      <li>React hooks for handling component level state.</li>
      <li>CSS modules.</li>
      <li>Use of SCSS via Gatsby's Sass plugin.</li>
      <li>Responsive web design using Sass mixins to create media queries.</li>
    </ul>
  </>
)

const ecommBody = (
  <>
    <p>
      This website was built as part of "The Modern Javascript Bootcamp Course"
      by Colt Steele and Stephen Girder on Udemy.
    </p>
    <br></br>
    <b>Key features of this website:</b>
    <ul className={projectsStyles.popupList}>
      <li>Vanilla JS front-end code.</li>
      <li>
        Javascript classes and inheritance to create repositories to mimic a
        backend database. Data is read in from local JSON files.
      </li>
      <li>
        Client-side session storage using Express cookie-session middleware.
      </li>
    </ul>
  </>
)

const natours2Body = (
  <>
    <p>
      This website was built as part of the "Advanced CSS and SASS: Flexbox,
      Grid, Animations and More" Udemy Course, by Jonas Schmedtmann.
    </p>
    <br></br>
    <b>Key features of this website:</b>
    <ul className={projectsStyles.popupList}>
      <li>SCSS syntax for Sass with the 7-1 pattern.</li>
      <li>Mixins, Sass variables and utility classes.</li>
      <li>Pure CSS popups and custom radio buttons.</li>
      <li>CSS animations.</li>
      <li>Flexbox.</li>
      <li>Responsive web design using media queries and responsive images.</li>
      <li>BEM CSS methodology.</li>
    </ul>
  </>
)
/////////////////////////////////////////////////////////////////////
//POPUP FOOTERS
const Footer = ({ url1, icon1Id, url2, icon2Id, className }) => {
  return (
    <div>
      <a
        href={url1}
        rel="external"
        target="_blank"
        className={projectsStyles.popUpLinks}
      >
        <svg>
          <use xlinkHref={`${icon1Id}`} href={`${icon1Id}`}></use>
        </svg>
        Check out the source code
      </a>
      <a
        href={url2}
        rel="external"
        target="_blank"
        className={projectsStyles.popUpLinks}
      >
        <img
          src={`${icon2Id}`}
          alt="deployment-site-icon"
          className={className}
        ></img>
        Visit the live site
      </a>
    </div>
  )
}
const articleRaterFooter = (
  <Footer
    url1="https://github.com/seanbarker096/Article-Ranker"
    url2="https://serene-woodland-20052.herokuapp.com/"
    icon1Id={`${icons}#icon-github`}
    icon2Id={herokuLogo}
    className={projectsStyles.herokuLogo}
  />
)

const natoursFooter = (
  <Footer
    url1="https://github.com/seanbarker096/Natours"
    url2="https://natours-sean.herokuapp.com/"
    icon1Id={`${icons}#icon-github`}
    icon2Id={herokuLogo}
    className={projectsStyles.herokuLogo}
  />
)

const emailSurveyAppFooter = (
  <Footer
    url1="https://github.com/seanbarker096/Email-survey-app"
    url2="https://ancient-wave-79653.herokuapp.com/"
    icon1Id={`${icons}#icon-github`}
    icon2Id={herokuLogo}
    className={projectsStyles.herokuLogo}
  />
)

const portfolioFooter = (
  <div>
    <a
      href="https://github.com/seanbarker096"
      rel="external"
      target="_blank"
      className={projectsStyles.popUpLinks}
    >
      <svg>
        <use xlinkHref={`${icons}#icon-github`}></use>
      </svg>
      Check out the source code
    </a>
  </div>
)

const ecommFooter = (
  <Footer
    url1="https://github.com/seanbarker096/Vanilla-JS-Ecommerce"
    url2="https://murmuring-eyrie-03946.herokuapp.com/"
    icon1Id={`${icons}#icon-github`}
    icon2Id={herokuLogo}
    className={projectsStyles.herokuLogo}
  />
)

const natoursCssFooter = (
  <Footer
    url1="https://github.com/seanbarker096/Natours-CSS-only-"
    url2="https://fervent-wright-79d134.netlify.app/#"
    icon1Id={`${icons}#icon-github`}
    icon2Id={netlifyLogo}
  />
)

/////////////////////////////////////////////////////////////////////////
//CONSOLIDATED CONTENT OBJECT
const projectData = {
  1: {
    projectName: "Article Rater (Personal Project)",
    projectIconsTextArr: ["React", "Redux", "Node.js", "Express", "Mongo"],
    bgImg: articleRaterBgImg,
    body: articleRaterBody,
    footer: articleRaterFooter,
  },
  2: {
    projectName: "Natours (Online Course)",
    projectIconsTextArr: ["Node.js", "Express", "Mongo"],
    bgImg: natoursBgImg,
    body: natoursBody,
    footer: natoursFooter,
  },

  3: {
    projectName: "Email Survey Application (Online Course)",
    projectIconsTextArr: ["React", "Redux", "Node.js", "Express", "Mongo"],
    bgImg: surveyBgImg,
    body: emailSurveyAppBody,
    footer: emailSurveyAppFooter,
  },
  4: {
    projectName: "This Website! (Personal Project)",
    projectIconsTextArr: ["React", "Gatsby", "SCSS"],
    bgImg: portfolioBgImg,
    body: portfolioBody,
    footer: portfolioFooter,
  },
  5: {
    projectName: "Vanilla JS E-Commerce Website (Online Course)",
    projectIconsTextArr: ["Vanilla JS", "Node.js", "Express"],
    bgImg: ecommBgImg,
    body: ecommBody,
    footer: ecommFooter,
  },
  6: {
    projectName: "Natours 2 (Online Course, CSS only)",
    projectIconsTextArr: ["SCSS"],
    bgImg: natoursBgImg2,
    body: natours2Body,
    footer: natoursCssFooter,
  },
}
