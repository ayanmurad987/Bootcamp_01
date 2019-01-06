import React, { Component } from 'react';

import firebase from '../auth/firebase'
// const db = firebase.firestore()

class Login extends Component {

  login = () => {

const {email , pass} =this.state
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then((res) => {
      console.log("login Succes ==>>" , res.user.uid)
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorMessage = error.message;
      console.log(errorMessage)
      // ...
    });
  }

  render() {
    return (
      <div >
        <br />
        <br />
        <br />
        <h1 className="font-weight-bold">Login</h1>

        <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    onChange={(e)=>{this.setState({email:e.target.value})}}
    />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
    onChange={(e)=>{this.setState({pass:e.target.value})}}
    
    />
  </div>
  
</form>
  <button type="submit" className="btn btn-primary" onClick={this.login}>Submit</button>
        
      </div>
    );
  }
}



export default Login;
