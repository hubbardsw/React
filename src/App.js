import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.jsx'
import './Person/Person.css'
import Vehicles from './Components/Vehicles.jsx'
import PersonsInput from './Components/PersonsInput'

class App extends Component {
  state = {
    persons:[
      {name:'Scott', age:43},
      {name:'Jun', age:43}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('clicked')
    //Done do this this.state.persons[0].name
    this.setState({
      persons:[
        {name: newName, age:43},
        {name:'Jun', age:55}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState ({
    persons:[
      {name: event.currentTarget.value, age:43},
      {name:'Jun', age:55}
    ]
  })

  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'

    }
    return (
      <div className="App">
      <h1> I'm a React App</h1>
      <h1>Does this Work?</h1>
      <button 
      style = {style}
      onClick={() => this.switchNameHandler('Scotty!!')}>Change Me</button>
      <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} 
              changed={this.nameChangeHandler}></Person>
      <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'A Cool Dude')}></Person>
              <PersonsInput />
              <Vehicles />
      </div>
    );
  }
}

export default App;

