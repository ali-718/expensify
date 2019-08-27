import React, { Component } from "react";
import * as firebase from "firebase";

const googleProvider = new firebase.auth.GoogleAuthProvider();

export default class Login extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("logged in", user);
      } else {
        console.log("logged out");
      }
    });
  }

  Login = () => {
    firebase.auth().signInWithPopup(googleProvider);
  };

  Logout = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <div>
        <button onClick={this.Login}>Google Login</button>
        <button onClick={this.Logout}>logout</button>
      </div>
    );
  }
}
