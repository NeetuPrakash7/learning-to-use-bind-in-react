import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state ={
    name:"Neetu Gera"
  }
  
changeName = (newName) => {
  this.setState({
    name:newName
  })
}
changeNamefromInput = (event) => {
  this.setState({
    name:event.target.value
  })
}
  render() {
    return (
      <div className="App">
       <br/> <br/>
       <button onClick={() => this.changeName("Yep!!! That's Me :(")}>Change state using Anon Function</button>
       <button onClick={this.changeName.bind(this, "Yep!!! That's Me :)")}>Change state using Bind Function</button>
       <br/> <br/>
       <input type="text" onChange={this.changeNamefromInput} value={this.state.name}/>
       <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
