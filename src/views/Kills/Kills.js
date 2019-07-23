import React, { Component } from 'react'

class Kills extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div>
        Hi, player {this.props.match.params.playerId}!
      </div>
    )
  }
}
      // <h1>Welcome <img ng-src="{{kc.data.currentPlayer.icon}}" class="factionIcon" ng-class="{zombieGreen: kc.data.currentPlayer.isZombie(), hunterOrange: kc.data.currentPlayer.isHunter()}"> {{kc.data.currentPlayer.nickname}}</h1>
      // <h2>{{kc.message}}</h2>
      // <player-info player="kc.data.currentPlayer" select="false"></player-info>
      // <button ng-click="kc.finalizeKills()">Finalize Kills</button>

export default Kills