import React, { Component } from 'react';
import './App.scss';
import WHeader from './component/WHeader';
import Commodit from './component/Commodit';

class App extends Component {
  render() {
    return (
      <main className="app">
      <WHeader/>
      <Commodit/>
      </main>
    );
  }
}

export default App;
