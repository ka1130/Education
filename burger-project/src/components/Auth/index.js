import React, { useState } from "react";
import _ from "lodash";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import styles from "./Auth.module.scss";

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

  const handleInputChange = (e, inputIdentifier) => {
    const updatedData = _.cloneDeep(controls);
    updatedData[inputIdentifier].value = e.target.value;
    setControls(updatedData);
  };

  const renderInputs = () => {
    return Object.entries(controls).map(entry => {
      const { elementType, elementConfig, value } = entry[1];
      const id = entry[0];
      return (
        <Input
          key={id}
          elementType={elementType}
          elementConfig={elementConfig}
          value={value}
          onChange={e => handleInputChange(e, id)}
        />
      );
    });
  };

  return (
    <div className={styles.wrapper}>
      <form>
        {renderInputs()}
        <Button btnType="Success">SUBMIT</Button>
      </form>
    </div>
  );
};

export default Auth;
