import React, {Component}  from 'react';
import { Switch, Route } from 'react-router-dom';
import PlayerSelect from '../../views/PlayerSelect/PlayerSelect'
import RegisterPlayer from '../../views/RegisterPlayer/RegisterPlayer'
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <main className="main-section">
        <Switch>
          <Route exact path='/' render={() => {
            return <PlayerSelect scanner={this.props.scanner} />
          }} />
          <Route path='/register-player' component={RegisterPlayer} />
        </Switch>
      </main>    
    );
  }

}

export default Main;