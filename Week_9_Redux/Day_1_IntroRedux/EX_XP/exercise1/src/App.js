
import React from 'react'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      property_one: 'property_one',
      property_two: 'property_two'
    }
  }
  handleChange = (e) => {
    this.setState({property_one: e.target.value})
  }

  render(){
    return (
     <div className="App-header">
        <header className="App-header">
          <h2>Redux Simple example</h2>
          <p> property_one= {this.state.property_one}</p>
          <p>property_two= {this.state.property_two}</p>
          <p><input type="text" onChange={this.handleChange}/></p>
        </header>
     </div> 
    
    );
    
  }
}





export default App;
