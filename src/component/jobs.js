import React, { Component } from 'react';

// import firebase from './auth/firebase'
// const db = firebase.firestore()

class Jobs extends Component {

  render() {
    return (
      <div>
      <br />
        <br />
        <br />
        <div className="d-flex  justify-content-between">
        <h1 className="font-weight-bold">Jobs</h1>
        <div><button type="button" class="btn btn-outline-success">Add Your Jobs</button></div>
        
    </div>
        <div className="list-group">
  <button type="button" className="list-group-item list-group-item-action active">
    Jobs
  </button>


        <div className="list-group">
  <div className="list-group-item list-group-item-action " >

    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <div className="d-flex w-100 justify-content-between">
    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <button type="button" className="btn btn-outline-primary">Intersted</button>
    </div>
  </div>

  <div className="list-group-item list-group-item-action " >

    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <div className="d-flex w-100 justify-content-between">
    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <button type="button" className="btn btn-outline-primary">Intersted</button>
    </div>
  </div>
  <div className="list-group-item list-group-item-action " >

    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <div className="d-flex w-100 justify-content-between">
    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <button type="button" className="btn btn-outline-primary">Intersted</button>
    </div>
  </div>
</div>
</div>

        
      </div>
    );
  }
}



export default Jobs;
