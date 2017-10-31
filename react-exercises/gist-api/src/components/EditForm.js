import React from 'react';

const EditForm = props => {
  const isEdited = props.isEdited;

  if(isEdited) {
    return (
      <form className="form">
        <input type="text" className="form-header" value={props.content}/>
        <textarea value={props.desc} className="form-desc"></textarea>
        <button className="button button-submit" type="submit" onClick={props.submitEdit}>Save</button>
      </form>
    );
  } else {
    return null;
  }
}

export default EditForm;
