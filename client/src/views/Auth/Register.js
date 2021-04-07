import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register, loginRedirect } from "actions/auth";
import Errors from "views/Notifications/Errors";
import { Form, Input, Label } from "reactstrap";
import "../../sass/signUp.scss";
import { APP_NAME, USER_TYPE_MANAGER } from "config";
import Alert from "views/Notifications/Alert";

const Register = ({ register, loginRedirect, loading, errorList, history }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: USER_TYPE_MANAGER,
  });
  const [toggle, setToggle] = useState(true);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clickToggle = () => setToggle(!toggle);

  const onSubmit = async (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <div className="signUp" id="signUp">
      <div className="signUp__content">
        <div className="signUp__content--box">
          <i data-spec="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.2 19.1c1-2.8 3.7-4.7 6.7-4.7s5.7 1.9 6.7 4.7c-4.1 2.5-9.3 2.5-13.4 0zm16.1-1.9c-.5.5-1.1 1-1.7 1.5a8.15 8.15 0 0 0-7.6-5.2c-3.3 0-6.3 2.1-7.6 5.1-.6-.4-1.1-.9-1.6-1.4l-.8.7C4.8 20.6 8.4 22 12 22s7.2-1.4 10-4.1l-.7-.7zM12 2C9.2 2 7 4.2 7 7s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 9c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
              ></path>
            </svg>
          </i>
          <h3 className="heading-3--dark-2">Welcome To {APP_NAME}</h3>
          <p className="para--size-12 para--dark-2 u-margin-bottom-small">
            create an account
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
                invalid={errorList.email ? true : false}
                onChange={(e) => onChange(e)}
                required
              />
              <span className="form__label--error">
                <Errors current_key="email" key="email" />
              </span>
              <Label for="email" className="form__label">
                Email address*
              </Label>
            </div>

            <div className="form__group u-margin-bottom-small">
              <Input
                className="form__input"
                type="text"
                name="firstname"
                id="firstname"
                onChange={(e) => onChange(e)}
                invalid={errorList.firstname ? true : false}
                required
              />
              <span className="form__label--error">
                <Errors current_key="firstname" key="firstname" />
              </span>
              <Label for="firstname" className="form__label">
                First Name*
              </Label>
            </div>
            <div className="form__group u-margin-bottom-small">
              <Input
                className="form__input"
                type="text"
                name="lastname"
                id="lastname"
                onChange={(e) => onChange(e)}
                invalid={errorList.lastname ? true : false}
                required
              />
              <span className="form__label--error">
                <Errors current_key="lastname" key="lastname" />
              </span>
              <Label for="lastname" className="form__label">
                Last Name*
              </Label>
            </div>
            <div className="form__group">
              <Input
                className="form__input"
                name="password"
                type={toggle ? "password" : "text"}
                id="password"
                invalid={errorList.password ? true : false}
                onChange={(e) => onChange(e)}
                required
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
            <p className="para--size-11 para--dark-2 u-margin-bottom-small text-lower">
              Your password must be at least 8 characters*
            </p>
            {loading ? (
              <div className="form__group btn--blue u-margin-bottom-small">
                {/* <img src={loader} alt="Loading..." /> */}
                <div className="loader__box">
                  <div className="loader"></div>
                </div>
              </div>
            ) : (
              <Input
                className="form__input btn btn-blue"
                type="submit"
                value="Sign Up"
              />
            )}
          </Form>
          <Link
            onClick={(e) => loginRedirect(history)}
            to="/login"
            className="para--size-12 text-lower"
          >
            Sign In
          </Link>
          <p className="para--size-10 u-margin-top-medium">
            By continuing, I agree to {APP_NAME}'s{" "}
          </p>
          <p className="para--size-10">
            <Link to="#!" className='link-b'>Terms Of Service</Link>, 
            <Link to="#!"  className='link-b'>Privacy Policy</Link>{" "}
          </p>
          <p className="para--size-10">
            and <Link to="#!" className='link-b'>Community Guidelines.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  loginRedirect: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errorList: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  errorList: state.errors,
});

export default connect(mapStateToProps, {
  register,
  loginRedirect,
})(Register);
