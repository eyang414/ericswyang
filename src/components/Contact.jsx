import React from 'react';
import '../App.css'

import githubLogo from "../images/GitHub-Mark-120px-plus.png"
import linkedinLogo from "../images/linkedinlogo3.png"
import gmailLogo from '../images/gmailLogo.svg.png'
import stackoverflowLogo from '../images/stackoverflowLogo.png'
import angellistLogo from '../images/angellistLogo2.svg'

const displayNone = {
  opacity: 0
}

const Contact = () => (

  <div className="container-contact">
    <div className="header-font-bl section-title">
      Contact
    </div>
    <div className="col-md-2 col-sm-2" />
    <div className="col-md-8 col-sm-8">
      <hr className="underline"></hr>
    </div>
    <div className="col-md-2 col-sm-2" />


    <div className="col-md-4 col-sm-4 col-xs-1" />
    <div className="col-md-8 col-sm-8 col-xs-11">
      <div style={displayNone}>
        <a href="http://github.com/eyang414" className="">
          <span className="link-response">http://github.com/eyang414</span>
        </a>
      </div>
      <div className="contact-link">
        <a href="https://www.linkedin.com/in/ericswyang/" className="">
          <img src={linkedinLogo} className="logo" alt="linkedinLogo"></img>
          http://linkedin.com/in/ericswyang/
        </a>
      </div>

      <div className="contact-link">
        <a href="http://github.com/eyang414" className="">
          <img src={githubLogo} className="logo logo-white" alt="github octocat"></img>
          http://github.com/eyang414
        </a>
      </div>

      <div className="contact-link">
        <a href="https://stackoverflow.com/users/story/7667185" className="">
          <img src={stackoverflowLogo} className="logo" alt="stackoverflow logo"></img>
          stackoverflow.com/users/story/7667185
        </a>
      </div>

      <div className="contact-link">
        <a href="https://angel.co/eric-yang-20" className="">
          <img src={angellistLogo} className="logo logo-white" alt="gmail logo"></img>
          http://angel.co/eric-yang-20
        </a>
      </div>

      <div className="contact-link">
        <a className="">
          <img src={gmailLogo} className="logo" alt="gmail logo"></img>
          eyang414@gmail.com
        </a>
      </div>
    </div>
  </div>

)

export default Contact;
