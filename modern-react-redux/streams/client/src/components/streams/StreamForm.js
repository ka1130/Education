import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        {/* name: required; a name of a property that this Field is going to manage */}
        {/* component: either a React component or a function for the Field to call */}
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button type="submit" className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Please enter a title';
  }

  if (!values.description) {
    errors.description = 'Please enter a description';
  }

  return errors;
}

export default reduxForm({ form: 'StreamForm', validate })(StreamForm);