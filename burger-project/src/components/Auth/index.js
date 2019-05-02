import React, { useState } from "react";
import Input from "components/UI/Input";
import Button from "components/UI/Button";

const initialControls = {
  email: {
    elementType: "input",
    elementConfig: {
      type: "email",
      placeholder: "Email address"
    },
    value: ""
  },
  password: {
    elementType: "input",
    elementConfig: {
      type: "password",
      placeholder: "Password"
    },
    value: ""
  }
};

const Auth = () => {
  const [controls, setControls] = useState(initialControls);

  const renderInputs = () => {
    return Object.entries(controls).map(entry => {
      const { elementType, elementConfig, value } = entry[1];
      const id = entry[0];
      return (
        <>
          <Input
            key={id}
            elementType={elementType}
            elementConfig={elementConfig}
            value={value}
            // onChange={e => handleInputChange(e, id)}
          />
        </>
      );
    });
  };

  return (
    <div>
      <form>
        {renderInputs()}
        <Button btnType="Success">SUBMIT</Button>
      </form>
    </div>
  );
};

export default Auth;
