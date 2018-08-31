import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>I am Ai Le to join JAM hackathon:</p>
    <ul>
      <li>My e-mail: ktlqai@gmail.com</li>
      <li>My Github id: ktlqai</li>
      <li>My Github repository for the hackathon: freecodecamp-jam-hackathon</li>
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
