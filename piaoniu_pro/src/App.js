import React, { Component } from 'react';
import './App.css';


import Headad from './pages/home/head_ad.js'
import Input from './pages/home/input.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Headad/>
				<Input/>
      </div>
    );
  }
}

export default App;
