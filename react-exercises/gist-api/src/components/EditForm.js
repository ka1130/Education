import React from 'react';

const EditForm = props => {
  return (
    <form>
      <input type="text" value={props.content}/>
      <textarea value={props.desc}></textarea>
      <button className="button button-submit" type="submit">Submit</button>
    </form>
  );
}

export default EditForm;
