import React from "react";
import { Route, Switch } from "react-router";

import Home from "../pages/home";
import NotFound from "../pages/not-found";
import Products from "../pages/products";
import Cart from "../pages/cart";

function Layout(props) {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    </>
  );
}

export default Layout;
