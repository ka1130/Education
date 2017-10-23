import React from 'react';

import Name from './Name'
import Select from './Select';
import Checkbox from './Checkbox';

function Form(props) {
  return (
    <form className="form" onSubmit={props.submit}>
      <Name label="First Name" name="firstName" handleChange={props.handleChange}/>
      <Name label="Last Name" name="lastName" handleChange={props.handleChange}/>
      <Select activity={props.activity} changeActivity={props.changeActivity}/>
      <p>Check all that apply</p>
      <Checkbox name="dietaryRestrictions" title="Dietary Restrictions" handleCheckbox={props.handleChange}/>
      <Checkbox name="physicalDisabilities" title="Physical Disabilities" handleCheckbox={props.handleChange}/>
      <Checkbox name="medicalNeeds" title="Medical Needs" handleCheckbox={props.handleChange}/>
      <button type="submit" onClick={props.submit}>Submit</button>
    </form>
  )
}

export default Form;
