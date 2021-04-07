import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "actions/alert";
import { resetLink, loginRedirect } from "actions/auth";
import Errors from "views/Notifications/Errors";
import Alert from "views/Notifications/Alert";
import "../../../sass/forgotPassword.scss";
import PropTypes from "prop-types";
import { Form, Input, Label } from "reactstrap";

const ResetLink = ({
  resetLink,
  history,
  errorList,
  loginRedirect,
  loading,
}) => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    resetLink({ email });
  };

  return (
    <div className="forgotPassword" id="forgotPassword">
      <div className="forgotPassword__content">
        <div className="forgotPassword__content--box">
          <i data-spec="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.2 19.1c1-2.8 3.7-4.7 6.7-4.7s5.7 1.9 6.7 4.7c-4.1 2.5-9.3 2.5-13.4 0zm16.1-1.9c-.5.5-1.1 1-1.7 1.5a8.15 8.15 0 0 0-7.6-5.2c-3.3 0-6.3 2.1-7.6 5.1-.6-.4-1.1-.9-1.6-1.4l-.8.7C4.8 20.6 8.4 22 12 22s7.2-1.4 10-4.1l-.7-.7zM12 2C9.2 2 7 4.2 7 7s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 9c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
              ></path>
            </svg>
          </i>
          <h3 className="heading-3--dark-2">Forgot Password</h3>
          <p className="para--size-12 para--dark-2 u-margin-bottom-small">
            Set a new password
          </p>
          <Alert />
          <Form onSubmit={(e) => onSubmit(e)}>
            <div className="form__group u-margin-bottom-small">
              <Input
                className="form__input"
                type="email"
                autoFocus
                name="email"
                id="email"
                onChange={(e) => onChange(e)}
                required
                invalid={errorList.email ? true : false}
              />
              <span className="form__label--error">
                <Errors current_key="email" key="email" />
              </span>
              <Label for="email" className="form__label">
                Email Address*
              </Label>
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
                value=" Send Link"
              />
            )}

            <Link
              to="/login"
              onClick={(e) => loginRedirect(history)}
              className="para--size-11 text-lower"
            >
              remember password? Sign In
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

ResetLink.propTypes = {
  setAlert: PropTypes.func.isRequired,
  resetLink: PropTypes.func.isRequired,
  loginRedirect: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  errorList: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errorList: state.errors,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {
  setAlert,
  resetLink,
  loginRedirect,
})(ResetLink);
