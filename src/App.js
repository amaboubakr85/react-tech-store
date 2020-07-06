import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import Default from "./pages/Default";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        {/* navbar , sidebar , cart, footer */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/products" exact component={Products}></Route>
          <Route path="/products/:id" component={SingleProduct}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
      </>
    );
  }
}

export default App;
