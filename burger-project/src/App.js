import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import BurgerBuilder from "components/BurgerBuilder";
import Layout from "components/Layout";
import Checkout from "components/Checkout";
import Orders from "components/Orders";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
