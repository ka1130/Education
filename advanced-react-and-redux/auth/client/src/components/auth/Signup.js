import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import * as actions from "actions";

const Signup = ({ handleSubmit, signup, errorMessage }) => {
  const onSubmit = formProps => {
    signup(formProps);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field name="email" type="text" component="input" autoComplete="none" />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <div>{errorMessage}</div>
      <button>Sign Up!</button>
    </form>
  );
};

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage
});

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signup" })
)(Signup);
