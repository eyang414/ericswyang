import React from 'react';
import '../App.css'

import profPic from '../images/EricYangProfPic.png'

const About = () => (


  <div className="container2 container-padding">

    <div className="header-font-bl section-title">
      About Me
    </div>
    <div className="col-md-2 col-sm-2" />
    <div className="col-md-8 col-sm-8">
      <hr className="underline"></hr>
    </div>
    <div className="col-md-2 col-sm-2" />

    <div className="row container-row">
      <img src={profPic} className="prof-pic" alt="Eric's Face"></img>
    </div>

    <div className="row container-row-nopads">
      <div className="col-md-2 col-sm-2" />
      <div className="col-md-8 col-sm-8 container2-text text-font">
        - Eric Yang -
      </div>
      <div className="col-md-2 col-sm-2" />
    </div>
    <div className="row container-row-nopads">
      <div className="col-md-2 col-sm-2" />
      <div className="col-md-8 col-sm-8 container2-text text-font">
        - 25 Years Old -
      </div>
      <div className="col-md-2 col-sm-2" />
    </div>
    <div className="row container-row">
      <div className="col-md-2 col-sm-2" />
      <div className="col-md-8 col-sm-8 container2-text text-font">
        - Greater NYC Area -
      </div>
      <div className="col-md-2 col-sm-2" />
    </div>

    <div className="row container-row">
      <div className="col-md-2 col-sm-2" />
      <div className="col-md-8 col-sm-8 container2-text about-body-font">
        I am an intuitive problem solver always thinking of solutions
      </div>
      <div className="col-md-2 col-sm-2" />
    </div>

    <div className="row container-row">
      <div className="col-md-2 col-sm-2" />
      <div className="col-md-8 col-sm-8 container2-text about-body-font2">
        From an early age, I felt a deep need to help others and wanted to invent products that would positively impact our society.  This need led me become an engineer in the manufacturing industry and transition to Fullstack Academy where I learned to code in JavaScript, HTML, and CSS.  Now, I am a software engineer who will endlessly pursue his life goals.
      </div>
      <div className="col-md-2 col-sm-2" />
    </div>

  </div>

)

export default About
