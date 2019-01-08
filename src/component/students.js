import React, { Component } from 'react';
import swal from 'sweetalert';

import firebase from '../auth/firebase'
import { students } from '.';
const db = firebase.firestore()
class Students extends Component {

  constructor(){
    super();
    this.state={
      cv_contact:'agaya',
      student:[],
      condition:false
    }
  }
cv = ()=>{
  swal("Type Your Contact", {
    content: {
      element: "input",
      attributes: {
        placeholder: "Type your contact",
        type: "text",
      },
    },
  })
  
  .then((value) => {
    this.setState({cv_contact:value})
db.collection('user').doc(localStorage.getItem('data')).update({
  resume:value
})
  })
}

List_cv =()=>{

db.collection("user").get().then((querySnapshot)=> {
  querySnapshot.forEach((doc)=> {
           this.state.student.push( doc.data())
});
}).then(
  ()=>{
    console.log(this.state.cv_contact)
    this.setState({condition:true})
  })

}

showCv = (e)=>{
  swal(e);
  swal("Contact #", e)

}

componentWillMount(){


  this.List_cv()
  

}


  render() {
    return (
      <div >
{console.log('stutent==',this.state.student)}
        <br />
        <br />
    <br />

        <div className="d-flex  justify-content-between">
        <h1 className="font-weight-bold">Students</h1>
        <div><button type="button" class="btn btn-outline-success"
        onClick={this.cv}
        >Add Your Resume</button></div>
        
    </div>

        <div className="list-group">
  <button type="button" className="list-group-item list-group-item-action active">
    Students List
  </button>

  <ul className="list-group">
  {/* <li className="list-group-item d-flex justify-content-between align-items-center">
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
  </li> */}
  {this.state.condition && <List state={this.state.student} func ={this.showCv} />}
  
</ul>

  </div>
      </div>
    );
  }
}



export default Students;





//  const List1  =(props) => {
//   var ayan = ['taha','noor','nimra']
//   // console.log('resume=>',props.state)
//   const listed=ayan.map((val,ind)=>{
//     <li>{val}</li>
//   })
//   return <ul>{listed}</ul>
// } 


const List = (props) => {

  const my = props.state.map((val)=>{
      // return <li>{val.resume}</li>    

      if(val.resume==""){
        return true
      }
      else{
        return   <li className="list-group-item d-flex justify-content-between align-items-center">
        {val.name} s/o {val.fname}
        <button type="button" className="btn btn-outline-primary"
        onClick={()=>props.func(val.resume)}
        >Resume</button>

        </li> 
      }
  })

  return my



}