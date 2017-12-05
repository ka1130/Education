import React from 'react';

const AddForm = props => {
  const addingGist = props.addingGist;

  if(addingGist) {
    return (
      <form className="form form-add" onSubmit={props.handleSubmit}>
        <input type="text" placeholder="Gist header goes here" className="form-header" />
        <textarea placeholder="Gist content goes here" className="form-desc"></textarea>
        <button type="button" className="button button-submit" onClick={props.handleSubmit}>Add gist</button>
      </form>
    );
  } else {
    return null;
  }
}

export default AddForm;
