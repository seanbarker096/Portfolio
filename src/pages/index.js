import React from "react"

import Layout from "../components/Layout"
import * as homeStyles from "./index.module.scss"
import NavButton from "../components/NavButton"
import icons from "../images/sprite.svg"

const Home = () => {
  return (
    <Layout>
      <main class={homeStyles.sectionHome}>
        <div class={homeStyles.container}>
          <h1 className={homeStyles.headingPrimary}>I'm Sean Barker,</h1>
          <h2 className={homeStyles.headingSecondary}>
            an engineering graduate looking for oppurtunities in full stack web
            development
          </h2>
          <div className={homeStyles.buttonContainer}>
            <NavButton className={homeStyles.button} to={"/about-me/"}>
              <span className={homeStyles.buttonText}>More about me</span>
              <svg className={homeStyles.buttonIcon}>
                <use xlinkHref={`${icons}#icon-circle-right`}></use>
              </svg>
            </NavButton>
            <NavButton className={homeStyles.button} to={"/projects/"}>
              <span className={homeStyles.buttonText}>My work</span>
              <svg className={homeStyles.buttonIcon}>
                <use xlinkHref={`${icons}#icon-circle-right`}></use>
              </svg>
            </NavButton>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
