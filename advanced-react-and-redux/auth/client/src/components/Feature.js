import React from "react";
import requireAuth from "components/requireAuth";

const Feature = () => {
  return <h3>Feature</h3>;
};
export default requireAuth(Feature);
