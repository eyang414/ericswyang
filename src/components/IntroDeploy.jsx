import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import { nameInput } from '../redux/index.js'
import { connect } from 'react-redux'
import '../CSSTransitionGroup.css'

const ENTER_KEY = 13

const mapStateToProps = (state) => {
  return {
    name: state.name
  };
};

class IntroDeployContainer extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount() {
      this.timer = null;
  }

  handleChange(event) {

    const targetValue = event.target.value
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      nameInput(targetValue)
      this.props.router.push('/resume')
      }, 650);
    }

  handleKeyDown(event) {
    const targetValue = event.target.value

    if (event.keyCode === ENTER_KEY) {
      nameInput(targetValue)
      this.props.router.push('/resume')
    }
  }



  render() {

    console.log('this.props in the container', this.props)

    return (
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false} >
        <div>
          <div>
            <div className="container-vflex">
              <div className="text-font">"Hi Eric, my name is <input className="text-font" type="text" autoComplete="off" name="name" placeholder="Name Please..." onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
              "</div>
          </div>
        </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default connect(mapStateToProps, {nameInput})(IntroDeployContainer);
