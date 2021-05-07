import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes";
import Header from "./Header";
import Footer from "./Footer";

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
        <Redirect from="*/*" to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default MainLayout;
