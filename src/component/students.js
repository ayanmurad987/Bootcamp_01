import React, { Component } from 'react';

// import firebase from './auth/firebase'
// const db = firebase.firestore()

class Students extends Component {

  render() {
    return (
      <div >
        <br />
        <br />
        <br />
        <h1 className="font-weight-bold">Students</h1>

        <div className="list-group">
  <button type="button" className="list-group-item list-group-item-action active">
    Students List
  </button>

  <ul className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Cras justo odio
    <button type="button" className="btn btn-outline-primary">Resume</button>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <button type="button" className="btn btn-outline-primary">Resume</button>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Morbi leo risus
    <button type="button" className="btn btn-outline-primary">Resume</button>
  </li>
</ul>
  

  </div>
      </div>
    );
  }
}



export default Students;
