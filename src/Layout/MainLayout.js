import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes";
import Footer from "./Footer";
import Header from "./Header";
import { ErrorPage } from "./ErrorPage";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <Switch>
        {routes.map((route) => (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
            props={props}
          />
        ))}
        <Route path="/error" component={ErrorPage} />
        <Redirect from="/admin" to="/admin/products" />
        <Redirect from="*/*" to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default MainLayout;
