import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// reduxForm is a function, similar to the connect function from redux
// it allows as to communicate with the form piece of state in the rootReducer, the main reducer
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostNew extends Component {
  renderField(field) {
    /*
      this field argument contains some event handlers that we need
      so that the input knows how to react to changes, submissions etc.
      field argument represents a single input / a single piece of state
      field can be given arbitrary properties like field.label below
      it also gets some automatic properties like field.input below
      another automatic prop for field is responsible for handling validation: field.meta.error given by our validate function
    */
    const { meta: { touched, error } } = field; // destructuring from destructured :) => field.meta.touched, field.meta.error
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
          /*
            it's an object with a bunch of different event hadlers and props, value etc.
            so we're saying we want all these things as props on our input
            so that we don't have to write things like onChange={field.input.onChange}
          */
        />
        <div className="text-help">
          {touched ? error : ''}
          {/* we only want to show errors on a field in a touched state, not right away */}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    // console.log(values); => { title: 'aaa', categories: 'hjkhjk', content: 'jjkkjl' }
    // there has to be an action creator to post data to the API

    this.props.createPost(values, () => {
      this.props.history.push('/');
      // go back to the root route of the application
      // this route only needs to match one of the routes defined for our application
      // but we only want to navigate after the request so we pass this.history.push
      // as a callback to the createPost fn
    });
  }

  render() {
    const { handleSubmit } = this.props;
    /*
      just like connect, reduxForm also adds some props that are paased to our component
      handleSubmit is one of those props passed to PostNew on behalf of reduxForm
      but we still have to pass to this handleSubmit function our own fn to handle the submission
      reduxForm helps us tell if the form is ready for being submitted but we have to handle submission ourselves
    */

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          /*
            name tells us what piece of state is the user editing
            name refers to a piece of state
            it's also important for validation, this name will correspons to errors.title prop on the errors object
          */
          component={this.renderField} // => only a reference to the function
          /*
            component takes a function/component that will be used to display this field
            Fields only know how to interact with Redux form but not how to show on the screen
            the jsx blob, the 'component' is to describe how the Fields looks like
            the function from the component attribute returns jsx that describes the appearance
          */
          label="Title for Post"
        />
        <Field name="categories" component={this.renderField} label="Categories"/>
        <Field name="content" component={this.renderField} label="Post Content"/>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  /*
    values is an object that contains all the different values that user entered to the form
    console.log(values)-> { title: 'asdf', categories: 'hkkhkj', content: 'hjkj' }
  */
  const errors = {};

  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that has at least three characters";
    // errors.title: title corresponds to the <Field />'s  name property
    // if this value is falsy/nonexistent, add a property to the errors object and assign it a message that we'll show to the user
  }

  if (!values.categories) {
    errors.categories = "Enter some categories";
  }

  if (!values.content) {
    errors.content = "Enter some content please";
  }

  return errors;
  /*
    if it's an empty object at this point, Redux will assume there's nothing wrong with this form
    if errors has *any* properties, redux assumes form is invalid
  */
}
/*
  this fn will be called automatically at some point of the compoennt's lifecycle
  most notably whenever user tries to submit the form
*/

export default reduxForm({
  form: 'PostsNewForm',
  /*
    this form property is like a name on the form
    this string assigned should be unique to differentiate one form on our app from another
    any form in the whole app must have a unique 'name'
  */
  validate,
  /* a configuration option */

})(
  connect(null, { createPost })(PostNew)
  // that's how we stack multiple connect-like helpers
);
/*
  we pass a single argument to the reduxForm which is a function
  this function takes some number of configuration options
*/

/*
There's 3 states of our form: pristine / touched / invalid
 => pristine: how every single input is rendered by default, when it first appears on the screen
    noone touched it yet, user hasnot yet selected it
 => touched: user has selected or focused the input and the focused out of the input; user has done some work on the field
    and now considers it as complete
 => invalid: we have some error messages and need to show the to the user
*/
