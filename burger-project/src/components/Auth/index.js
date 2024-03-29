import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import _ from "lodash";
import { auth, setAuthRedirectPath } from "redux/actions/authActions";
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

const Auth = ({ auth, authenticate, buildingBurger, setAuthRedirectPath }) => {
  const [controls, setControls] = useState(initialControls);
  const [isSignedUp, setIsSignedUp] = useState(true);
  const isAuthenticated = auth.token !== null;
  const { authRedirectPath } = auth;

  useEffect(() => {
    if (!buildingBurger && authRedirectPath !== "/") {
      setAuthRedirectPath("/");
    }
  }, []);

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

  return (
    <div className={styles.wrapper}>
      {auth.loading ? <Spinner /> : null}
      {auth.error ? <h5>{auth.error}</h5> : null}
      {isAuthenticated ? <Redirect to={authRedirectPath} /> : null}
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

const mapStateToProps = state => ({
  auth: state.auth,
  buildingBurger: state.burger.building
});

export default connect(
  mapStateToProps,
  { authenticate: auth, setAuthRedirectPath }
)(Auth);
