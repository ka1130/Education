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

  renderInput = ({ input, meta, label, placeholder }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input
          type="text"
          {...input}
          autoComplete="off"
          placeholder={placeholder}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    const { comment } = this.props;
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="name"
          label="Comment name"
          component={this.renderInput}
          placeholder={comment ? comment.name : ""}
        />
        <Field
          name="body"
          component={this.renderInput}
          label="Comment body"
          placeholder={comment ? comment.body : ""}
        />
        <Field
          name="email"
          component={this.renderInput}
          label="Email"
          placeholder={comment ? comment.email : ""}
        />
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

  if (!formValues.email || formValues.email.indexOf("@") < 0) {
    errors.email = "Please enter a comment's email";
  }

  return errors;
};

export default reduxForm({ form: "CommentForm", validate })(CommentForm);
