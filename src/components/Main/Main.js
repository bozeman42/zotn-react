import React, {Component}  from 'react';
import { Switch, Route } from 'react-router-dom';
import PlayerSelect from '../../views/PlayerSelect/PlayerSelect'
import RegisterPlayer from '../../views/RegisterPlayer/RegisterPlayer'
import Kills from '../../views/Kills/Kills'
import './Main.css';

const Main = () => (
  <main className="main-section">
    <Switch>
      <Route exact path='/' component={PlayerSelect} />
      <Route path='/register-player' component={RegisterPlayer} />
      <Route path='/kills/:playerId' component={Kills} />
    </Switch>
  </main>    
)

export default Main;