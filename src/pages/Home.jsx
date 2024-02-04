import React from 'react'
import Hcard from '../components/Hcard'
import { Link } from 'react-router-dom'
import img from '../assets/home1.jpg'



function Home() {
  return (
    <div>
      <div class="main-banner">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="header-text">
                <h2>Enter a world of <em>Photos</em> &amp; Amazing <em>Awards</em></h2>
                <p>Photography is a professional website template with 5 different HTML pages for maximum customizations. It is free for commercial usage. This Bootstrap v5.1.3 CSS layout is provided by TemplateMo Free CSS Templates.</p>

                <div class="buttons">
                  <div class="big-border-button">
                    <Link to={'/login'}>Starts to Explore</Link>
                  </div>
                  <div class="icon-button">
                    <a href="" target="_blank"><i class="fa fa-play"></i> Watch Our Video Now</a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <marquee> <Hcard></Hcard></marquee>
      <div className="border rounded text-center align-item-center mb-3 p-2">
        <img src={img} alt="" />
      </div>
    </div>





  )
}

export default Home