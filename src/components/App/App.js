import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Scanner from '../../modules/Scanner/Scanner';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scanner: new Scanner()
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
          <Main scanner={this.state.scanner} />
        <Footer scanner={this.state.scanner} />
      </div>
    );
  }
}

export default App;
