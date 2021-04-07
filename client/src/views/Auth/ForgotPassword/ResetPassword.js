import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "actions/alert";
import {
  resetPassword,
  setPasswordError,
  getResetPassword,
  tokenInvalid,
  loginRedirect,
} from "actions/auth";
import Errors from "views/Notifications/Errors";
import Alert from "views/Notifications/Alert";

import PropTypes from "prop-types";
import { Form, Input } from "reactstrap";

const ResetPassword = ({
  setAlert,
  setPasswordError,
  resetPassword,
  getResetPassword,
  tokenInvalid,
  history,
  errorList,
  match,
  loading,
  loginRedirect,
}) => {
  const [formData, setFormData] = useState({
    password: "",
    passwordConfirm: "",
  });

  const [toggle, setToggle] = useState(true);

  useMemo(() => {
    getResetPassword(match.params.token).then((data) => {
      console.log(data);
      if (data && data.status !== true) tokenInvalid(history);
    });
  }, [getResetPassword, match.params, history, tokenInvalid]);

  const { password, passwordConfirm } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const clickToggle = () => {
    setToggle(!toggle);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setPasswordError("Passwords do not match", "passwordConfirm");
      setAlert(
        // "Errors! Please correct the following errors and submit again.",
        "Errors! Write correct information",
        "danger"
      );
    } else {
      resetPassword(password, passwordConfirm, match.params.token);
    }
  };

  return (
    <div className="signIn" id="signIn">
      <div className="signIn__content">
        <div className="signIn__content--box">
          <i data-spec="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.2 19.1c1-2.8 3.7-4.7 6.7-4.7s5.7 1.9 6.7 4.7c-4.1 2.5-9.3 2.5-13.4 0zm16.1-1.9c-.5.5-1.1 1-1.7 1.5a8.15 8.15 0 0 0-7.6-5.2c-3.3 0-6.3 2.1-7.6 5.1-.6-.4-1.1-.9-1.6-1.4l-.8.7C4.8 20.6 8.4 22 12 22s7.2-1.4 10-4.1l-.7-.7zM12 2C9.2 2 7 4.2 7 7s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 9c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
              ></path>
            </svg>
          </i>
          <h3 className="heading-3--dark-2">Reset Password</h3>
          <p className="para--size-12 para--dark-2 u-margin-bottom-small">
            Set New Password to your account
          </p>
          <Alert />
          <Form onSubmit={(e) => onSubmit(e)}>
            <div className="form__group u-margin-bottom-small">
              <Input
                className="form__input"
                type={toggle ? "password" : "text"}
                autoFocus
                name="password"
                id="password"
                invalid={errorList.password ? true : false}
                required
                onChange={(e) => onChange(e)}
              />
              <span className="form__label--error">
                <Errors current_key="password" key="password" />
              </span>
              <label htmlFor="password" className="form__label">
                Password*
              </label>
              <span
                className="form__toggle para--size-11 text-upper para--dark-2"
                onClick={clickToggle}
              >
                {toggle ? "Show" : "Hide"}
              </span>
            </div>

            <div className="form__group u-margin-bottom-small">
              <Input
                className="form__input"
                type={toggle ? "passwordConfirm" : "text"}
                name="passwordConfirm"
                id="passwordConfirm"
                onChange={(e) => onChange(e)}
                invalid={errorList.passwordConfirm ? true : false}
                required
              />
              <span className="form__label--error">
                <Errors current_key="passwordConfirm" key="passwordConfirm" />
              </span>
              <label htmlFor="passwordConfirm" className="form__label">
                Confirm Password*
              </label>
              <span
                className="form__toggle para--size-11 text-upper para--dark-2"
                onClick={clickToggle}
              >
                {toggle ? "Show" : "Hide"}
              </span>
            </div>
            {loading ? (
              <div className="form__group btn--blue u-margin-bottom-small">
                {/* <img src={loader} alt="Loading..." /> */}
                <div className="loader__box">
                  <div className="loader"></div>
                </div>
              </div>
            ) : (
              <Input
                className="form__input btn btn-blue u-margin-bottom-small"
                type="submit"
                value="Reset"
              />
            )}

            <Link
              onClick={(e) => loginRedirect(history)}
              to="/login"
              className="para--size-11 text-lower"
            >
              Have an account? Sign In
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

ResetPassword.propTypes = {
  setAlert: PropTypes.func.isRequired,
  setPasswordError: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  getResetPassword: PropTypes.func.isRequired,
  tokenInvalid: PropTypes.func.isRequired,
  loginRedirect: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  errorList: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  errorList: state.errors,
});

export default connect(mapStateToProps, {
  setAlert,
  setPasswordError,
  resetPassword,
  getResetPassword,
  tokenInvalid,
  loginRedirect,
})(ResetPassword);
