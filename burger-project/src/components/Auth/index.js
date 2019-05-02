import React, { useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { auth } from "redux/actions/authActions";
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

const Auth = props => {
  const [controls, setControls] = useState(initialControls);

  const handleInputChange = (e, inputIdentifier) => {
    const updatedData = _.cloneDeep(controls);
    updatedData[inputIdentifier].value = e.target.value;
    setControls(updatedData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = controls;
    props.auth(email.value, password.value);
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
      <form onSubmit={e => handleSubmit(e)}>
        {renderInputs()}
        <Button btnType="success" type="submit">
          SUBMIT
        </Button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { auth }
)(Auth);
