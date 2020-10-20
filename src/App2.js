import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewContainerComponent from './containers/newContainer';
/* 
 * mapDispatchToProps
*/

/* 
 * mapStateToProps
*/

/**
 * @class App
 * @extends {Component}
 */
export default class App extends Component {
  /**
   * @memberof App
   * @summary handles button click 
   */
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <NewContainerComponent /> 
        <button onClick={() => {this.simpleAction()}}>Test redux action</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

