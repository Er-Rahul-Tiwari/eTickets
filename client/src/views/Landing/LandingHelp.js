import React from "react";
import { Link } from "react-router-dom";
import "sass/landingPage/landingHelp.scss";
// import "sass/rootScss/root.scss";

const LandingHelp = () => {
  return (
    <div className="help">
      <form className="form">
        <div className="form__group home__input--box">
          {/* <button className="btn btn--blue home__btn"> get started </button> */}
          <Link to="/login" className=" btn--blue home__btn">
            get started
          </Link>
          <p className=" para--light-4 u-margin-bottom-small">
            Ready to start? Get start to create events & do live here
          </p>
        </div>
      </form>
    </div>
  );
};

export default LandingHelp;
