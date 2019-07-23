import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import './App.css';
import '../../assets/fonts.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
