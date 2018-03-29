import React, { Component } from 'react';
import PlayerList from '../../components/PlayerList/PlayerList';
import './PlayerSelect.css';

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
        <h1>{this.state.message}</h1>
        <PlayerList />
      </div>
    );
  }
}

export default PlayerSelect;
