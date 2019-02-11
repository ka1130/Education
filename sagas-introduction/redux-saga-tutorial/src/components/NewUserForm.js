import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

class NewUserForm extends Component {
  state = { firstName: "", lastName: "" };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  handleFirstNameChange = e => {
    this.setState({ firstName: e.target.value });
  };

  handleLastNameChange = e => {
    this.setState({ lastName: e.target.value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>First Name</Label>
          <Input
            placeholder="First Name"
            onChange={this.handleFirstNameChange}
            value={this.state.firstName}
          />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            placeholder="Last Name"
            onChange={this.handleLastNameChange}
            value={this.state.lastName}
          />
        </FormGroup>
      </Form>
    );
  }
}

export default NewUserForm;
