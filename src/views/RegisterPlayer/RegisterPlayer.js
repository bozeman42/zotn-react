import React, { Component } from 'react';

import './RegisterPlayer.css';

class PlayerSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Please scan your con badge..."
    }
  }
  render() {
    return (
      <div className="container">
        <h1>Player Registration</h1>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default PlayerSelect;
