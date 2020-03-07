import React, { Component } from 'react';
import './App.css';
import Ninjas from "./Ninjas/Ninjas"
import AddNinja from "./AddNinja/AddNinja"

class App extends Component{
  state={
    ninjas:[
      {name: "Ayush", id:1},
      {name: "Aman", id:2},
      {name: "Sanskar", id:3}
    ]
  }

  qbAddNinjaFun=(ninja)=>{
    ninja.id=this.state.ninjas.length+1;
    let ninjaDatas=[...this.state.ninjas,ninja];
    
    this.setState({
      ninjas:ninjaDatas
    });
  }

  qbDeleteFun=(ninjaId)=>{
    let newNinjas=this.state.ninjas.filter((ninja)=>{
      return ninja.id!=ninjaId;
    });
    this.setState({
      ninjas:newNinjas
    })
  }
  render(){
    return (
      <div className="App">
        <Ninjas ninjas={this.state.ninjas} qbDeleteFun={this.qbDeleteFun}/>
        <AddNinja addNinja={this.qbAddNinjaFun}/>
      </div>
    );
  }
};

export default App;
