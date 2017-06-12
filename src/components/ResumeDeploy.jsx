import React from 'react';
import { connect } from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'
import '../CSSTransitionGroup.css'
import '../App.css'

import Contact from './Contact.jsx'
import About from './About.jsx'
import Education from './Education.jsx'
import WorkExp from './WorkExp.jsx'
import Projects from './Projects.jsx'

const mapStateToProps = (state) => {
  return {
    name: state.name
  };
};

const Resume = (props) => (
  <CSSTransitionGroup
    transitionName="example"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false} >

    <div>
      <div className="container">
        <div className="welcome-header header-font">
          {props.name && "Hello, " + props.name || "Welcome to my site!"}
        </div>
      </div>
      <div className="parallax"></div>

      <About />
      <Education />
      <WorkExp />
      <Projects />
      <Contact />

    </div>
  </CSSTransitionGroup>
)

export default connect(mapStateToProps)(Resume)
