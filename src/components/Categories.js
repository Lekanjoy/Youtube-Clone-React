import Explore from '../assets/explore.png'
import React from 'react'

function Categories() {

  return (
    <section className="categories">
      <div className="explore">
        <img src={Explore} alt="Explore Icon" />
        <span>Explore</span>
      </div>

      <div className="arrays">
        <p>All</p>
        <p>Premier League</p>
        <p>Live</p>
        <p>The Big Bang Theory</p>
        <p>Coding </p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React</p>
        <p>CFC Videos</p>
        <p>Comedy</p>
        <p>Chelsea FC</p>
        <p>Courses</p>
        <p>Pop Music</p>
        <p>Recently Uploaded</p>
        <p>Transfer Updates</p>
        <p>News to you</p>
        <p>HTML</p>
        <p>Trending</p>
      </div>
    </section>
  );
}

export default Categories