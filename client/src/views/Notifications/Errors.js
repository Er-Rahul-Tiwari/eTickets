import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { FormText } from "reactstrap";

const Error = ({ errorList, current_key }) => {
  if (current_key in errorList) {
    return (
      // <FormText className="invalid-feedback-text">
      <p className="para--size-11 text-upper alert-danger">
        {errorList[current_key]}
      </p>
      // </FormText>
    );
    // return <FormFeedback>{errorList[current_key]}</FormFeedback>;
  }
  return "";
};

Error.propTypes = {
  errorList: PropTypes.object.isRequired,
  current_key: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  errorList: state.errors,
});

export default connect(mapStateToProps)(Error);
