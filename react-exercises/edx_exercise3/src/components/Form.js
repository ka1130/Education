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
      dietaryRestrictions: false,
      physicalDisabilities: false,
      medicalNeeds: false,
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

  submitItem = (event) => {
    event.preventDefault();
    this.props.addItem(this.state);
  }

  render() {
    return (
      <form className="form" onSubmit={this.submitItem}>
        <Name label="First Name" name="firstName" handleChange={this.handleInputChange}/>
        <Name label="Last Name" name="lastName" handleChange={this.handleInputChange}/>
        <Select activity="Science Lab" changeActivity={this.changeActivity}/>
        <p className="p-title">Check all that apply</p>
        <Checkbox name="dietaryRestrictions" title="Dietary Restrictions" handleCheckbox={this.handleInputChange}/>
        <Checkbox name="physicalDisabilities" title="Physical Disabilities" handleCheckbox={this.handleInputChange}/>
        <Checkbox name="medicalNeeds" title="Medical Needs" handleCheckbox={this.handleInputChange}/>
        <button className="submit" type="submit">Submit</button>
      </form>
    )
  }

}

export default Form;
