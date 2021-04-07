import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import "sass/rootScss/root.scss";
import "sass/landingPage/landingHome.scss";
import { login, registerRedirect } from "actions/auth";
import LandingTurnover from "./LandingTurnover";
import LandingSearch from "./LandingSearch";
import LandingHelp from "./LandingHelp";
import LandingFooter from "./LandingFooter";
import { Form } from "reactstrap";

const Landing = ({ login, errorList, loading, registerRedirect, history }) => {
  return (
    <div className="landingLayout">
      <div className="home">
        <div className="home__nav">
          <h3 className="home__heading heading-3 text-upper">
            {process.env.REACT_APP_APP_NAME}
          </h3>
          <Link
            to="/register"
            onClick={(e) => registerRedirect(history)}
            className="home__signIn "
          >
            Sign Up
          </Link>
        </div>
        <h3 className="heading-3-sub para--light line-height-1">
          Create your own event & tickets
        </h3>
        <h1 className="heading-1 para--light-3 line-height-1">
          To sell unlimited tickets and
          <br></br>
          genrate revenues anywhere anytime
        </h1>
        <Form className="form u-margin-top-medium">
          <span className=" para--light-4">
            {/* Ready to start? Enter your email to create events & do live here */}
            Ready to start? Get start to create events & do live here
          </span>
          <div className="form__group home__input--box u-margin-top-small">
            <Link to="/login" type="submit" className=" btn--blue home__btn">
              get started
            </Link>
          </div>
        </Form>
      </div>
      <LandingTurnover />
      <LandingSearch />
      <LandingHelp />
      <LandingFooter />
    </div>
  );
};

Landing.propTypes = {
  login: PropTypes.func.isRequired,
  errorList: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  registerRedirect: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  errorList: state.errors,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { login, registerRedirect })(Landing);
