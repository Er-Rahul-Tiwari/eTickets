import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "views/Components";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import ForgotPassword from "../Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "../Auth/ForgotPassword/ResetPassword";
import ConfirmAccount from "../Auth/ConfirmAccount";

// import Landing from "views/Landing";
// import Landing from "views/Components/ClientLandingLayout/ClientLanding";
// import Landing from "views/Components/ClientLandingLayout/detailEventPage";
// import Landing from "views/Components/ClientLandingLayout/Hero";
import Landing from "views/Components/ClientLandingLayout/emailTemplate";
// import Landing from "views/Components/ClientLandingLayout/shoppingCart";

import NotFoundPage from "views/NotFound";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Routes = () => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route

    <Switch>
      <PublicRoute
        exact
        path="/register"
        restricted={true}
        component={Register}
      />
      <PublicRoute exact path="/login" restricted={true} component={Login} />
      <PublicRoute
        exact
        path="/forgotPassword"
        restricted={true}
        component={ForgotPassword}
      />
      <PublicRoute
        exact
        path="/confirmAccount/:token"
        restricted={true}
        component={ConfirmAccount}
      />
      <PublicRoute
        exact
        path="/resetPassword/:token"
        restricted={true}
        component={ResetPassword}
      />
      <PublicRoute exact path="/" restricted={true} component={Landing} />
      <PrivateRoute exact path="/*" name="Home" component={HomePage} />
      <Route exact path="/page-not-found" component={NotFoundPage} />
      <Redirect to="/page-not-found" />
    </Switch>
  );
};

export default Routes;
