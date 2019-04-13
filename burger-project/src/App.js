import React, { Component } from "react";
import BurgerBuilder from "components/BurgerBuilder";
import Layout from "components/Layout";

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </>
    );
  }
}

export default App;
