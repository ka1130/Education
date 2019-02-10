import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class CommentForm extends Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, meta, label }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input type="text" {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="name"
          label="Comment name"
          component={this.renderInput}
          // placeholder/value with previous name
        />
        <Field
          name="body"
          component={this.renderInput}
          label="Comment body"
          // placeholder/value with previous body
        />
        <Field name="email" component={this.renderInput} label="Email" />
        {/*  placeholder/value with previous email */}
        <button type="submit" className="ui button primary">
          Submit
        </button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.name) {
    errors.name = "Please enter a comment's name";
  }

  if (!formValues.body) {
    errors.body = "Please enter a comment's body";
  }

  if (!formValues.email) {
    //properly valudate email with a regex here
    errors.email = "Please enter a comment's email";
  }

  return errors;
};

export default reduxForm({ form: "CommentForm", validate })(CommentForm);
