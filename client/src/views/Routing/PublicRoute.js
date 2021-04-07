import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PublicRoute = ({
  component: Component,
  auth: { isAuthenticated, loading, user },
  restricted,
  ...rest
}) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated && !loading && !restricted) {
          return <Component {...props} />;
        } else {
          if (user !== null) {
            return <Redirect to="/profile" />;
          }
          return <Component {...props} />;
        }
      }}
    />
  );
};

PublicRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PublicRoute);
