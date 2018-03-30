import React, { Component } from 'react';
import PlayerList from '../../components/PlayerList/PlayerList';
import Scanner from '../../modules/Scanner/Scanner';
import chime from '../../assets/sounds/electronic_chime.mp3';
import './PlayerSelect.css';

class PlayerSelect extends Component {
  constructor(props) {
    super(props);
    console.log('player select props',props)
    this.state = {
      message: "Loading...",
      scanner: this.props.scanner
    }
    this.startPlayerSelectScanner = this.startPlayerSelectScanner.bind(this);
  }

  componentDidMount() {
    this.startPlayerSelectScanner();
  }

  componenetWillUnmount() {
    const { scanner } = this.state;
    scanner.stop();
  }

  startPlayerSelectScanner() {
    const vm = this;
    const { scanner } = this.state;
    this.setState({
      message: "Please scan your con badge..."
    });
    scanner.start((content) => {
      if (vm.isLoginSuccessful(content)) {
        scanner.stop()
          .then(() => vm.navigateToKillScreen(content))
      } else {
        scanner.reset(1000);
        setTimeout(() => {
          vm.setState({
            message: "Please scan your con badge..."
          });
        },1000);
      }
    });
  }

  isLoginSuccessful(content) {
    const vm = this;
    const { chime } = vm;
    let result = false;
    let badge = content
    console.log(content);
    if (!vm.isBadgeValid(badge)) {
      this.setState({
        message: "Please scan a valid player badge."
      })
      result = false;
    } else if (!vm.playerExists(badge)) {
      this.setState({
        message: "This badge is not associated with a player account."
      })
      result = false;
    } else {
      chime.play();
      result = true;
    }
    return result;
  }

  isBadgeValid(badge) {
    return (badge.EntityType === "Badge" && badge.EntityId);
  }


  render() {
    return (
      <div className="container">
        <h1>{this.state.message}</h1>
        <PlayerList selectButtons={true}/>
      </div>
    );
  }
}

export default PlayerSelect;
