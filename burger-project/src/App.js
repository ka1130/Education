import React, { Component } from "react";
import BurgerBuilder from "components/BurgerBuilder";
import Layout from "components/Layout";
import Checkout from "components/Checkout";

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>
      </>
    );
  }
}

export default App;
