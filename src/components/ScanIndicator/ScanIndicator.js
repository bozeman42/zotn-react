import React, { Component } from 'react';
import commonEmitter from '../../modules/common-emmitter';
import './ScanIndicator.css';

class ScanIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scanLight: false
    }
    this.handleScan = this.handleScan.bind(this);
  }

  componentDidMount() {
    commonEmitter.addListener('scan',this.handleScan);
  }

  componentWillUnmount() {
    commonEmitter.removeListener('scan',this.handleScan);
  }

  handleScan(event) {
    this.setState({
      scanLight: true
    })
    setTimeout(() => {
      this.setState({
        scanLight: false
      })
    }, 500);
  }

  render() {
    return (
      <div className={`scanIndicator${this.state.scanLight? ' scanLightOn': ''}`} />
    );
  }
}

export default ScanIndicator;