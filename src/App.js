import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './App.css';

const transitionClassName = "transition-group";
const transitionDuration = 300;
const transitionEnterTimeout = 2 * transitionDuration;

class App extends Component {
  render() {
    return (
      <div>
        <CSSTransitionGroup
        component="div"
        className={transitionClassName}
        transitionName="example"
        transitionEnterTimeout={transitionEnterTimeout}
        transitionLeaveTimeout={transitionDuration}
      >
        {this.props.children ?
          React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          }) :
          null}
      </CSSTransitionGroup>
      </div>
    );
  }
}

export default App;
