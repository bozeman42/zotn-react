import React, { Component } from 'react';
import PlayerModel from '../../models/PlayerModel';
import axios from 'axios';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import './PlayerList.css';

class PlayerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: {}
    };
  }


  componentDidMount() {
    this.getPlayers()
    .then((players) => {
      this.setState({players: players})
    })
  }

  getPlayers() {
    return axios.get('/players')
    .then((response) => {
      const players = response.data;
      const playerObject = players.reduce((players, player) => {
        players[player.id] = new PlayerModel(player);
        return players
      }, {})
      return playerObject
    })
    .catch((error) => console.error('an error occured',error));
  }

  displayPlayerList() {
    let list = Object.keys(this.state.players).map((id) => {
      return this.displayPlayer(this.state.players[id]);
    })
    return list;
  }

  displayPlayer(player) {
    return (
      <div key={player.id}>
        <PlayerInfo player={player} select={true}/>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.displayPlayerList()}
      </div>
    )
  }
}

export default PlayerList;