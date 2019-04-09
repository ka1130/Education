import React, { useState } from "react";

const Greeting = props => {
  const [name, setName] = useState("Mary");

  return (
    <form className="ui form">
      <div className="field">
        <label>First Name</label>
        <input type="text" value={name} />
      </div>
      <div className="field">
        <label>Last Name</label>
        <input type="text" />
      </div>
    </form>
  );
};

export default Greeting;
