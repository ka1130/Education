import React, { useEffect } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  const ComposedComponent = props => {
    useEffect(() => {
      if (!props.auth) {
        props.history.push("/");
      }
    }, [props]);

    return <ChildComponent {...props} />;
  };

  const mapStateToProps = state => ({ auth: state.auth.authenticated });

  return connect(mapStateToProps)(ComposedComponent);
};
