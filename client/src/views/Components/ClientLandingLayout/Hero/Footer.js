import React from "react";
import { Link } from "react-router-dom";
// import "sass/footer.scss";

import logo from "assets/logo.png";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="footers">
        <div className="footer">
          <div className="footer__img">
            <img src={logo} className="footer__img--logo" />
            <p className="para--size-10">
              &copy; copyright 2020-21
            </p>
          </div>
        </div>
        <div className="footer">
          {/* <div className="footer__all"> */}
          <Link to="" className="footer__link">
            Home
          </Link>
          <Link to="" className="footer__link">
            Events
          </Link>
          <Link to="" className="footer__link">
            Leads
          </Link>
          <Link to="" className="footer__link">
            API
          </Link>
          {/* </div> */}
        </div>
        <div className="footer">
          {/* <div className="footer__all"> */}
          <Link to="" className="footer__link">
            About Us
          </Link>
          <Link to="" className="footer__link">
            Careers
          </Link>
          <Link to="" className="footer__link">
            FAQ's
          </Link>
          <Link to="" className="footer__link">
            Contact Us
          </Link>
          {/* </div> */}
        </div>
        <div className="footer">
          {/* <div className="footer__all"> */}
          <Link to="" className="footer__link">
            Terms of service
          </Link>
          <Link to="" className="footer__link">
            Privacy Policy
          </Link>
          <Link to="" className="footer__link">
            Agreements
          </Link>
          <Link to="" className="footer__link">
            API
          </Link>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
export default Footer;
