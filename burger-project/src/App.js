import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import BurgerBuilder from "components/BurgerBuilder";
import Layout from "components/Layout";
import Checkout from "components/Checkout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/" component={BurgerBuilder} />
          <Route exact path="/checkout" component={Checkout} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
