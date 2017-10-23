import React from 'react';
import './App.css';

import Form from './components/Form';
import Table from './components/Table';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      activity: "Science Lab",
      dietaryRestrictions: false,
      physicalDisabilities: false,
      medicalNeeds: false,
    }
  }

  changeActivity = (event) => {
    this.setState({
      activity: event.target.value
    })
  }

  handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    const updatedState = {}
    updatedState[event.target.name] = value
    this.setState(updatedState)
  }

  submit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Form
          activity={this.state.activity}
          handleChange={this.handleInputChange}
          changeActivity={this.changeActivity}
          submit={this.submit}
        />
        <Table />
      </div>
    )
  }
}

export default App;
