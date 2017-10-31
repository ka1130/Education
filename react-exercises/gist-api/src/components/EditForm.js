import React from 'react';

const EditForm = props => {
  const isEdited = props.isEdited;

  if(isEdited) {
    return (
      <form>
        <input type="text" value={props.content}/>
        <textarea value={props.desc}></textarea>
        <button className="button button-submit" type="submit">Save</button>
      </form>
    );
  }
}

export default EditForm;
