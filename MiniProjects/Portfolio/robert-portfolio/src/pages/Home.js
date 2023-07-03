/*
import React from 'react';

function Home() {
  return (
    <div className='home'>
      <h1>Welcome to My Portfolio</h1>
      <img src="/path/to/your/image.jpg" alt="Portfolio" />
      <p></p>
            <p>
      As a passionate and versatile professional, I have expertise in both data engineering and data science, enabling me to seamlessly bridge the gap between raw data and actionable insights. With a strong foundation in data engineering principles and tools, coupled with advanced data analysis and modeling techniques, I bring a comprehensive skill set to tackle complex data challenges.
      </p>
    </div>
  );
}

export default Home;
*/

import React from 'react'
import Header from '../components/Header'
import HomePage from '../components/HomePage'

function Home() {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  )
}

export default Home;