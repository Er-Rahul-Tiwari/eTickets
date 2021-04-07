import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import ComponentRoutes from "views/Routing/ComponentRoutes";
import Sidebar from "views/Components/Layout/Sidebar";
import Header from "views/Components/Layout/Header";
import "sass/main.scss";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Index = ({ alerts, ...props }) => {
  const createNotification = (type, message) => {
    switch (type) {
      case "info":
        return NotificationManager.info(message, "", 10000);
      case "success":
        return NotificationManager.success(message, "", 10000);
      case "warning":
        return NotificationManager.warning(message, "", 10000);
      case "danger":
        return NotificationManager.error(message, "", 10000);
      default:
        break;
    }
  };
  useEffect(() => {
    alerts !== null &&
      alerts.length > 0 &&
      alerts.map((alert, idx) => {
        createNotification(`${alert.alertType}`, alert.msg);
        return true;
      });
  }, [alerts]);
  return (
    <div className="App">
      <div className="container">
        {/* <Sidebar {...props} /> */}
        <Header />
        <NotificationContainer />
        <Switch>
          {ComponentRoutes.map((route, idx) => {
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                component={route.component}
              />
            ) : null;
          })}
        </Switch>
      </div>
    </div>
  );
};

Index.prototype = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(withRouter(Index));
