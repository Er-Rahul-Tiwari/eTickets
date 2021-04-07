import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "actions/auth";
// import logoBlue from "assets/img/logo-01.svg";
import managerPhoto from "assets/img/defaultUser.png";
import logoBlue from "assets/logo.png";

const Header = ({ logout }) => {
  return (
    <div className="topNav">
      <div className="topNav__content">
        <img src={logoBlue} className="topNav__content__logo" />
        <div className="topNav__content__links topNav__link">
          <Link to="/createEvent">
            <button className=" btn-circle">
              Create Event
            </button>
          </Link>
          <Link to="/profile" className="topNav__link">
            Profile
          </Link>
          <Link to="/events" className="topNav__link">
            Events
          </Link>
          <Link to="/tickets" className="topNav__link">
            tickets
          </Link>
          <Link to="/viewEvent" className="topNav__link">
            view-Events
          </Link>
          <Link to="/sells" className="topNav__link">
            Sells
          </Link>
          <Link to="/Revenues" className="topNav__link">
            Revenues
          </Link>

          <Link to="/login" onClick={logout}>
            <img src={managerPhoto} className="topNav__content__right__user" />
          </Link>
        </div>
        {/* <div className="topNav__content__links"> */}
          
        {/* </div> */}
      </div>
    </div>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Header);
