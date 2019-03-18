import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput(formProps) {
    console.log(formProps);
    return (
      <input
        value={formProps.input.value}
        onChange={formProps.input.onChange}
      />
    );
  }

  render() {
    console.log(this.props);
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        {/* name is required, is like a prop we're going to manage */}
        {/*  a React component or a fn for the Field to call - 
          it has to return an element to be shown on the screen  */}
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
// the value is a name that we provide our form with
// call it whatever the purpose of the form is
// at this moment our component get a ton of specific props
