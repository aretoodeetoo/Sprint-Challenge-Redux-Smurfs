import React, { Component } from 'react';
import './App.css';

import SmurfListView from './views/SmurfListView';
import SmurfFormView from './views/SmurfFormView';
class App extends Component {
  render() {
    return (
      <div className="header">
      <h1>Welcome to Smurf Village!</h1>
      <div className="App">
        <SmurfListView />
        <SmurfFormView />
      </div>
    </div>
    );
  }
}

export default App;
