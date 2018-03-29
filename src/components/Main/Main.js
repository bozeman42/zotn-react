import React, {Component}  from 'react';
import { Switch, Route } from 'react-router-dom';
import PlayerSelect from '../../views/PlayerSelect/PlayerSelect'
import RegisterPlayer from '../../views/RegisterPlayer/RegisterPlayer'

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={PlayerSelect} />
          <Route path='/register-player' component={RegisterPlayer} />
        </Switch>
      </main>    
    );
  }

}

export default Main;