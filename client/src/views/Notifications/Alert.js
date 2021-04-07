import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert as ShowAlert } from "reactstrap";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert, idx) => (
    <ShowAlert key={idx} color={`${alert.alertType}`}>
      <p className="para--size-11 text-upper u-margin-bottom-small">
        {alert.msg}
      </p>
    </ShowAlert>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
