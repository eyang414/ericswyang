import React, { Component } from 'react';
import '../App.css'
import '../Transitions.css'

class NotFound extends Component {
  render() {
    return (
      <div className="grid">
        <h1 className="pos-rel">404: NotFound</h1>
        <div>Looks like this URL link doesn't do anything yet...</div>
      </div>
    );
  }
}

export default NotFound;
