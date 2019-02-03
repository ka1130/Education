import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        {/* name: required; a name of a property that this Field is going to manage */}
        {/* component: either a React component or a function for the Field to call */}
        <Field name="description" component={this.renderInput} label="Enter Description" />
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);