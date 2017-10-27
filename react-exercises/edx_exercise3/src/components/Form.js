import React from 'react';

import Name from './Name'
import Select from './Select';
import Checkbox from './Checkbox';

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      activity: "Science Lab",
      restrictions: {
        "a": false,
        "b": false,
        "c": false
      }
    }
  }

  changeActivity = (event) => {
    this.setState({
      activity: event.target.value
    });
  }

  handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const updatedState = {};
    updatedState[event.target.name] = value;
    this.setState(updatedState);
    console.log(this.state);
  }

  handleCheckbox = (event) => {
    const restriction = event.target.name;
    const value = event.target.checked;
    const updatedRestrictions = {...this.state.restrictions};

    if(value === true) {
      updatedRestrictions[restriction] = true;
    } else {
      updatedRestrictions[restriction] = false;
    }

    this.setState({ restrictions: updatedRestrictions });
  }

  submitItem = (event) => {
    event.preventDefault();
    this.props.addItem(this.state);
    console.log(this.state);
  }

  render() {
    return (
      <form className="form" onSubmit={this.submitItem}>
        <Name label="First Name" name="firstName" handleChange={this.handleInputChange}/>
        <Name label="Last Name" name="lastName" handleChange={this.handleInputChange}/>
        <Select activity="Science Lab" changeActivity={this.changeActivity}/>
        <p className="p-title">Check all that apply</p>
        <Checkbox name="a" title="Dietary Restrictions" handleCheckbox={this.handleCheckbox}/>
        <Checkbox name="b" title="Physical Disabilities" handleCheckbox={this.handleCheckbox}/>
        <Checkbox name="c" title="Medical Needs" handleCheckbox={this.handleCheckbox}/>
        <button className="submit" type="submit">Submit</button>
      </form>
    )
  }

}

export default Form;
