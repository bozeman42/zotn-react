import React, { Component } from 'react';
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
    const vm = this;
    const { scanner } = this.props;
    console.log(this.props.scanner);
    if (scanner.scanner) {
      this.attachListeners();
    } else {
      scanner.addListener('scanner-started', this.attachListeners);
    }
    console.log('mounted');
  }

  attachListeners() {
    const vm = this;
    const {scanner } = this.props;
    scanner.scanner.addListener('scan', vm.handleScan);
    scanner.addListener('scanner-stopped',vm.removeScannerListeners);
    scanner.removeListener('scanner-started',vm.attachListeners);
  }

  removeScannerListeners(){
    const vm = this;
    const { scanner } = this.props;
    console.log('scanner-stopped. removing listeners');
    scanner.scanner.removeListener('scan',vm.handleScan);
    scanner.removeListener('scanner-started',vm.attachListeners)
  }

  componentWillUnmount() {
    console.log('unmounted');
    const vm = this;
    const {scanner} = this.props;
    vm.removeScannerListeners();
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