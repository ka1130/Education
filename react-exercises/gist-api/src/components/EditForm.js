import React from 'react';

const EditForm = props => {
  const isEdited = props.isEdited;

  if(isEdited) {
    return (
      <form className="form">
        <input type="text" className="form-header" placeholder={props.desc} onChange={props.descChange}/>
        <textarea placeholder={props.content} className="form-desc" onChange={props.contentChange}></textarea>
        <button className="button button-submit" type="submit" onClick={props.submitEdit}>Save</button>
      </form>
    );
  } else {
    return null;
  }
}

export default EditForm;
