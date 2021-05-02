/* cSpell:enable */

import React from "react"
let aboutMe = () => {
  return (
    <>
      My names Sean Barker. I am an engineering graduate and full-time
      consultant who is looking for new opportunities in full stack development.
    </>
  )
}
export const aboutMeText = aboutMe()
let education = () => {
  return (
    <>
      I graduated from the University of Bristol 2019 with a First Class Masters
      Degree in Aerospace Engineering.
      <p></p>
      My studies helped me to become a strong problem solver with a solid
      technical and numerical background. I thoroughly enjoyed the challenge of
      learning new and challenging technical concepts in my degree, and I am now
      looking to continue this learning through a career in web development.
    </>
  )
}
export const educationText = education()

let web = () => {
  return (
    <>
      I have experience with both front and back-end technologies.
      <p></p>I have strong experience in using React and Redux for building
      website UIs, especially in the context of CRUD applications. I am
      experienced with the core concepts and features of React and Redux -
      notably functional components, hooks, reusable components for DRY code,
      and thunks for asynchronous action creators and API communication.
      <p></p>I have also used CSS and Sass to create various online course
      projects, as well as this website. This has included utilising CSS modules
      for more robust and scalable CSS code, using Sass mixins, functions, loops
      and variables, and experience in implementing CSS animations.
      <p></p>I have completed a Vanilla JS online course, and am familiar with
      core Javascript technologies, concepts and features. Some key ones to
      mention would be:
      <ul className={{}}>
        <li>The DOM and DOM events</li>
        <li>Asynchronous JS</li>
        <li>Object Orientated Programming</li>
        <li>Higher order functions</li>
        <li>HTTP and exchanging data with APIs</li>
      </ul>
    </>
  )
}
export const developmentExperienceText = web()
