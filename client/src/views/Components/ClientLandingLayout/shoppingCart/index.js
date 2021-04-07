import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { login, registerRedirect } from "actions/auth";

import "sass/shoppingCart/index.scss";
import Jumbotron from './Jumbotron';
import Cart from './Cart';
import Price from './Price';

const ShoppingCart = ({ login, errorList, loading, registerRedirect, history }) => {
  return (
    <div className='shoppingCart'>
        <Jumbotron />
        <Cart />
        <Price />
    </div>
  );
};

ShoppingCart.propTypes = {
  login: PropTypes.func.isRequired,
  errorList: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  registerRedirect: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  errorList: state.errors,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { login, registerRedirect })(ShoppingCart);
