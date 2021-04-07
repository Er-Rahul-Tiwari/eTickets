import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { login, registerRedirect } from "actions/auth";

import "sass/emailTemplate/index.scss";
import Header from './Header';

const emailTemplate = ({ login, errorList, loading, registerRedirect, history }) => {
  return (
    <div className='emailTemplate'>
        <Header />
    </div>
  );
};

emailTemplate.propTypes = {
  login: PropTypes.func.isRequired,
  errorList: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  registerRedirect: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  errorList: state.errors,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { login, registerRedirect })(emailTemplate);
