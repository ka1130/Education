import React from 'react';

const AddForm = props => {
  const addingGist = props.addingGist;

  if(addingGist) {
    return (
      <form className="form form-add" onSubmit={props.handleSubmit}>
        <input type="text" placeholder="test" className="form-header" />
        <textarea placeholder="props.content" className="form-desc"></textarea>
        <button type="submit" className="button button-submit" onClick={props.handleSubmit}>Add gist</button>
      </form>
    );
  } else {
    return null;
  }
}

export default AddForm;
