import React, { useState, useEffect } from "react";
import Burger from "components/Burger";

const BurgerBuilder = props => {
  return (
    <>
      <Burger />
      <div>Build Controls</div>
    </>
  );
};

export default BurgerBuilder;
