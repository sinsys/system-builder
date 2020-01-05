import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.USCurrencyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  };



  render() {
    return (
      <div className="App">
        <Header />
        <Main 
          features = {this.props.features}
          USCurrencyFormat = {this.USCurrencyFormat}
        />
      </div>
    );
  }
}

export default App;
