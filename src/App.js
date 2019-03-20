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
      <h1>Vehicle List</h1>
              <Vehicles />
      </div>
    );
  }
}

export default App;

