
import './App.css';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React, { Component } from 'react'
import Plan from './Plan'

export default class App extends Component {
  state={
    iteams:[],
    text:""
  }
   handleChange =e=>{
     this.setState({text:e.target.value})


 }
 handleAdd= e=>{
   if(this.state.text!==""){
     const iteams=[...this.state.iteams,this.state.text];
     this.setState({iteams: iteams,text:""});
   }
 }
 handleDelete=id=>{
   console.log("Deleted",id);
   const olditeams=[...this.state.iteams]
   console.log("olditeams",olditeams);
   const iteams=olditeams.filter((element,i)=>{
     return i!==id

   })
   this.setState({iteams:iteams});
 }
  render() {
    return (
      <div className="container-fluid my-5">
      <div className="row">
      <div className="col-sm-6 mx-auto text-White shadow-lg p-3">
      <h1 className="text-center">Today's Plane</h1>
      <div className="row">
      <div className="col-9">
      <input type ="text" className="form-control" placeholder="Write your plane Here" value={this.state.text}
       onChange={this.handleChange} />

      </div>
      <div className="col-2">
      <button className="btn btn-warning px-4 font-weight-bold" onClick={this.handleAdd}>Add</button>
      </div>
      <div className="container-fluid">
      <ul className="list-unstayled row m-5">
     {
       this.state.iteams.map((value,i)=>{
         return <Plan key={i} id={i} value={value} sendData={this.handleDelete}/>

       })
     }
      </ul>
      </div>
      </div>
      </div>
      </div>
        
      </div>
    )
  }
}





