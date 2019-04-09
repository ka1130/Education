import React, { useState, useEffect } from "react";

const Greeting = () => {
  const name = useFormInput("Mary");
  const surname = useFormInput("Poppins");

  useEffect(() => {
    document.title = `${name.value} ${surname.value}`;
  });

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <form className="ui form">
      <div className="field">
        <label>First Name</label>
        <input type="text" {...name} />
      </div>
      <div className="field">
        <label>Last Name</label>
        <input type="text" {...surname} />
      </div>
      <div className="field">
        <label>Width: </label>
        <span>{width}</span>
      </div>
    </form>
  );
};

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleValueChange = e => setValue(e.target.value);
  return { value, onChange: handleValueChange };
};

export default Greeting;
