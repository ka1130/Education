import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  renderInput({ input }) {
    return <input {...input} />;
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        {/* name: required; a name of a property that this Field is going to manage */}
        {/* component: either a React component or a function for the Field to call */}
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);