import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import * as screens from './component'

// import firebase from './auth/firebase'
// const db = firebase.firestore()

class App extends Component {

  constructor(){
    super();
  }

  authToggle = ()=>{

    if (localStorage.getItem('toggle')=="login"){
      return <div>

<button type="button" className="btn btn-primary nav-link" 
    onClick={()=>{localStorage.setItem('toggle','logOut')}}
    >LogOut</button>

      </div>
    }
    else if (localStorage.getItem('toggle')== "logOut"){

      return<div>

    
<Link to="/Login" className="nav-link" style={{display:"inline"}}>
    <button type="button" className="btn btn-primary" >Login</button>
    </Link>
  
    <Link to="/SignUp" className="nav-link" style={{display:"inline"}}>
    <button type="button" className="btn btn-primary" >SignUp</button>
    </Link>
  
    
      </div>
    }

    else{

      return<div>

    
<Link to="/Login" className="nav-link" style={{display:"inline"}}>
    <button type="button" className="btn btn-primary" >Login</button>
    </Link>
  
    <Link to="/SignUp" className="nav-link" style={{display:"inline"}}>
    <button type="button" className="btn btn-primary" >SignUp</button>
    </Link>
  
    
      </div>
    }
        
  }

  render() {
    return (
      <div className="container">

      
        

<Router>

  
      <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">
    
    </span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
      <Link to="/" className="nav-link">Home </Link>
      </li>
      <li className="nav-item">
      <Link to="/job" className="nav-link">Jobs <span className="badge badge-primary badge-pill">14</span></Link>
      </li>
      <li className="nav-item ">
      <Link to="/student" className="nav-link">Students</Link>
      </li>
    </ul>
    
  </div>
  <div>
    

  
  {this.authToggle()}
  


  

</div>


  
</nav>


        <Route path="/Login" component={screens.login} />
        <Route path="/SignUp" component={screens.signup} />
        <Route path="/job" component={screens.jobs} />
        <Route path="/student" component={screens.students} />
        <Route exact path="/" component={screens.home} />
      </div>
    </Router>
      </div>
    );
  }
}



export default App;
