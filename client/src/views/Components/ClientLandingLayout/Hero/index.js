import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { login, registerRedirect } from "actions/auth";

import "sass/hero/index.scss";
import HeroBanner from "./HeroBanner";
import Slider from "./Slider";
import RectBanner from "./RectBanner";
import Categories from "./Categories";
import VIP_Banner from "./VIP_Banner";
import Footer from './Footer';

const Hero = ({ login, errorList, loading, registerRedirect, history }) => {
  return (
    <div className='hero'>
      <HeroBanner />
      <Slider />
      <RectBanner />
      <Categories />
      <VIP_Banner />
      <Footer />
    </div>
  );
};

Hero.propTypes = {
  login: PropTypes.func.isRequired,
  errorList: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  registerRedirect: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  errorList: state.errors,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { login, registerRedirect })(Hero);
