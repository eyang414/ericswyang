import React from 'react';
import '../App.css'

import profPic from '../images/EricYangProfPic.png'

const About = () => (


  <div className="container2 container-padding">

    <div className="header-font-bl section-title">
      About Me
    </div>
    <div className="col-xl-2 col-md-2 col-sm-2" />
    <div className="col-xl-8 col-md-8 col-sm-8">
      <hr className="underline"></hr>
    </div>
    <div className="col-xl-2 col-md-2 col-sm-2" />

    <div className="container-row">
      <img src={profPic} className="prof-pic" alt="Eric's Face"></img>
    </div>

    <div className="container-row-nopads">
      <div className="container2-text text-font">
        - Eric Yang -
      </div>
    </div>
    <div className="container-row-nopads">
      <div className=" container2-text text-font">
        - 25 Years Old -
      </div>
    </div>
    <div className="container-row">
      <div className=" container2-text text-font">
        - Greater NYC Area -
      </div>
    </div>

    <div className="container-row">
      <div className="col-xl-2 col-md-2 col-sm-2" />
      <div className="col-xl-8 col-md-8 col-sm-8 container2-text about-body-font">
        I am an intuitive problem solver always thinking of solutions
      </div>
      <div className="col-md-2 col-sm-2" />
    </div>

    <div className="container-row">
      <div className="col-xl-2 col-md-2 col-sm-2" />
      <div className="col-xl-8 col-md-8 col-sm-8 container2-text about-body-font2">
        My goal is to create products that help others, ultimately creating a more sustainable society. I started pursuing this vision as a hands-on engineer in the manufacturing industry. To broaden my reach, I attended Fullstack Academy and learned to code in JavaScript, HTML, and CSS. My transition from a material to software engineer has given me a new way to think about – and solve – problems.
      </div>
      <div className="col-xl-2 col-md-2 col-sm-2" />
    </div>

  </div>

)

export default About
