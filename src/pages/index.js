import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

const Home = () => {
  return (
    <div class="container">
      <Link to="/projects/">Projects</Link>
      <Header />
      <h1>My Portfolio</h1>
    </div>
  )
}

export default Home
