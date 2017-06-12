import React from 'react';
import '../App.css'

import lehighLogo from '../images/lehighLogo.svg.png'
import FSALogo from '../images/FSALogo.png'

const Education = () => (

  <div className="container-resume text-font">

    <div className="container-padding">
      <div className="header-font section-title">
        Education
      </div>
      <div className="col-md-2 col-sm-2"></div>
      <div className="col-md-8 col-sm-8">
        <hr className="underline"></hr>
      </div>
      <div className="col-md-2 col-sm-2"></div>

      <div className="row container-row">
        <div className="col-md-2 col-sm-2">
        </div>
        <div className="col-md-8 col-sm-8">
          <div className="col-md-4 col-sm-4">
            <img src={FSALogo} className="lehigh-logo" alt="FSA"></img>
            <h4 className="bold-text">Fullstack Academy of Code</h4>
            <div className="">Dec 2016 - Apr 2017</div>
          </div>
          <div className="col-md-8 col-sm-8">
            <h4 className="degree bold-text">Fullstack Engineer Student</h4>
            <div className="degree-descr">
              Completed the 17-week immersive coding bootcamp at Fullstack Academy of Code, one of the nation’s top-rated bootcamps.  At FSA, I primarily focused on mastering the PERN (PostreSQL, Express.js, React.js w/ Redux, and Node.js) stack by developing multiple apps with an Agile team environment.
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-2">
        </div>
      </div>

      <div className="row container-row">
        <div className="col-md-2 col-sm-2">
        </div>
        <div className="col-md-8 col-sm-8">
          <div className="col-md-4 col-sm-4">
            <img src={lehighLogo} className="lehigh-logo" alt="Lehigh"></img>
            <h4 className="bold-text">
                Lehigh University
              </h4>
            <div className="">Aug 2010 - May 2014</div>
          </div>
          <div className="col-md-8 col-sm-8">
            <h4 className="degree bold-text">B.S. Materials Science and Engineering</h4>
            <div className="degree-descr">
              At one of the nation’s top materials science and engineering departments, I studied the fundamental material sciences and learned how to engineer a range of materials including metals, polymers, and ceramics to yield specific properties.
              <br></br>It was also at Lehigh University, where I dealt with my first programming language and created simple input/output console apps using C++.
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-2">
        </div>
      </div>

    </div>
  </div>

)

export default Education
