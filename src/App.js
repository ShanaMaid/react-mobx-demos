import React, { Component } from 'react';
import logo from './logo.svg';
import {observer} from 'mobx-react';
import {observable, action} from 'mobx';
import './App.css';


class App extends Component {
  arr = observable([1,2,3,4]);
  arrUp = action(() => this.arr.push(1));
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={this.arrUp}>
          点我arr长度变化  arr.length：{this.arr.length} 
        </p>
      </div>
    );
  }
}

export default observer(App);
