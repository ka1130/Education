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
          name="Comment name"
          label="Comment name"
          component={this.renderInput}
          pal
          // placeholder/value with previous name
        />
        <Field
          name="Comment body"
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

export default reduxForm({ form: "CommentForm" })(CommentForm);
