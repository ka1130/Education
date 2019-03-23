import React from "react";
import Modal from "components/Modal";

const StreamList = () => {
  const actions = (
    <>
      <button className="ui negative button">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  );

  return (
    <div>
      <Modal
        title="Delete stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
      />
    </div>
  );
};

export default StreamList;
