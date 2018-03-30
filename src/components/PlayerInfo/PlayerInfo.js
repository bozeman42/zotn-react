import React from 'react';
import './PlayerInfo.css';

export default function (props) {
  const { player } = props;
  let factionClass = '';
  if (player.isZombie()) {
    factionClass = 'zombie-green';
  } else if (player.isHunter()) {
    factionClass = 'hunter-orange';
  }
  let button = null;
  if (props.select) {
    button = (
      <button className="btn btn-primary drop-shadow">
        Select
    </button>
    )
  }
  return (
    <div className="player-info drop-shadow">
        <h3>{player.nickname}</h3>
      <div className="float-left">
        {button}
        <img className={`faction-icon ${factionClass}`} alt={`${player.factionName} faction icon`} src={player.icon} />
      </div>
      <div className="float-right">
        {`Level: ${player.level}`}<br />{`XP: ${player.xp}`}<br />{`Score: ${player.score}`}
      </div>
    </div>
  )
}