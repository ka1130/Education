import React, { useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { auth } from "redux/actions/authActions";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import Spinner from "components/UI/Spinner";
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

const Auth = ({ auth, authenticate }) => {
  const [controls, setControls] = useState(initialControls);
  const [isSignedUp, setIsSignedUp] = useState(true);

  const handleInputChange = (e, inputIdentifier) => {
    const updatedData = _.cloneDeep(controls);
    updatedData[inputIdentifier].value = e.target.value;
    setControls(updatedData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = controls;
    authenticate(email.value, password.value, isSignedUp);
  };

  const switchAuthMode = () => setIsSignedUp(!isSignedUp);

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

  if (auth.loading) return <Spinner />;
  if (auth.error) return <h5>{auth.error}</h5>;

  return (
    <div className={styles.wrapper}>
      <form onSubmit={e => handleSubmit(e)}>
        {renderInputs()}
        <Button btnType="success" type="submit">
          SUBMIT
        </Button>
      </form>
      <Button btnType="danger" onClick={switchAuthMode}>
        SWITCH TO {isSignedUp ? "SIGN IN" : "SIGN UP"}
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(
  mapStateToProps,
  { authenticate: auth }
)(Auth);
