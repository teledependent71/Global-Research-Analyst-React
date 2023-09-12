import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Global Research Analyst</title>
        <meta property="og:title" content="Global Research Analyst" />
      </Helmet>
    </div>
  )
}

export default Home
