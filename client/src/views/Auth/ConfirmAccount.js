import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginRedirect, confirmToken } from "actions/auth";
const ConfirmAccount = ({ match, confirmAccount, confirmToken }) => {
  useMemo(() => {
    confirmToken(match.params.token);
  }, [match, confirmToken]);
  return (
    <div className="signIn" id="signIn">
      <div className="signIn__content">
        <div className="signIn__content--box u-margin-bottom-small">
          {confirmAccount == null ? (
            <h4 className="heading-4 heading-4--dark-2 u-margin-top-medium u-margin-bottom-small">
              Please wait...
            </h4>
          ) : confirmAccount ? (
            <h4 className="heading-4 heading-4--dark-2 u-margin-top-medium u-margin-bottom-small">
              Verified...
            </h4>
          ) : (
            <h4 className="heading-4 heading-4--dark-2 u-margin-top-medium u-margin-bottom-small">
              Fail...
            </h4>
          )}
          <Link
            color="link"
            to="/login"
            className="btn btn--blue u-margin-top-small u-margin-bottom-small text-lower"
          >
            Have an account? Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

ConfirmAccount.propTypes = {
  confirmToken: PropTypes.func.isRequired,
  loginRedirect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  confirmAccount: state.auth.confirmAccount,
});
export default connect(mapStateToProps, {
  confirmToken,
  loginRedirect,
})(ConfirmAccount);
