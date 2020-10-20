/* global gapi */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewContainerComponent from './containers/newContainer';
const CLIENT_ID = '609742289433-45uq942q6u8vmeh8ce069pqomgjieubo.apps.googleusercontent.com'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
    }
  }


  doGoogleSigIn = () => {
    try {
      window.gapi.load("auth2", () => {
        if (!window.gapi.auth2.getAuthInstance()) {
          window.gapi.auth2
            .init({
              client_id: CLIENT_ID,
            })
            .then((data, erro) => {
              if (data && data.currentUser) {
                this.setState({
                  isSignedIn: true
                });
              } else {
                this.setState({
                  isSignedIn: false
                });
              }
            }).catch((error) => {
              console.log(error)
              this.setState({
                isSignedIn: false
              });
            })
        } else {
          this.setState({
            isSignedIn: true
          });
        }
      });
    } catch (error) {
      this.setState({
        isSignedIn: false
      });
      console.log(error)
    }

  }

  getContent() {
    if (this.state.isSignedIn) {
      return <NewContainerComponent />
    } else {
      return (
        <div>
          <p>You are not signed in. Click here to sign in.</p>
          <button id="loginButton" onClick={() => { this.doGoogleSigIn() }}>Login with Google</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
