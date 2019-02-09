import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class CommentForm extends Component {
  renderInput = ({ input, meta, label }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input type="text" {...input} />
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="name"
          label="Comment name"
          component={this.renderInput}
          pal
          // placeholder/value with previous name
        />
        <Field
          name="body"
          component={this.renderInput}
          label="Comment body"
          // placeholder/value with previous body
        />
        <Field name="Email" component={this.renderInput} label="Email" />
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
    errors.email = "Please enter a comment's email";
  }
};

export default reduxForm({ form: "CommentForm" })(CommentForm);
