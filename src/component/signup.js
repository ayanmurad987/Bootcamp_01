import React, { Component } from 'react';

import firebase from '../auth/firebase'
// const db = firebase.firestore()



class SignUp extends Component {


  signup =() =>{

    const {email,pass} = this.state
    console.log("this is email and padd ==>",email,"   ",pass)
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((res)=>{
      console.log('signup sccesfully',res.user.uid)
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
        <h1 className="font-weight-bold">SignUp</h1>

        <form >
        <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="name">Name</label>
      <input type="text" className="form-control" id="inputEmai" placeholder="Name" />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="fathername">Father Name</label>
      <input type="text" className="form-control" id="inputPasswor" placeholder="Father Name" />
    </div>
  </div>

  


  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" 
      onChange={(e)=>{this.setState({email:e.target.value})}}
      />
    </div>
    
  </div>

  <div className="form-row">
    
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password"
      onChange={(e)=>{this.setState({pass:e.target.value})}}
      
      />
    </div>

    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Re-enter Password</label>
      <input type="password" className="form-control" id="inputPassword41" placeholder="Re-enter Password" />
    </div>
  </div>


  <div className="form-group">
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  
  
  
</form>

<button  className="btn btn-primary"
onClick={this.signup}  
  >SignUp</button>
        
      </div>
    );
  }
}



export default SignUp;
