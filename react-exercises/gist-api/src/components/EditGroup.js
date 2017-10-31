import React from 'react';

const EditGroup = props => {
  const isEdited = props.isEdited;

  if(!isEdited) {
    return (
      <div className="button-group">
        <button className="button button-edit" onClick={props.editGist}>Edit</button>
        <button className="button button-delete" onClick={props.deleteGist}>Delete</button>
      </div>
    );
  } else {
    return null;
  }
}

export default EditGroup;
