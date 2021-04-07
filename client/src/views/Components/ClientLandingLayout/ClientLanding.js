import React, { useState } from "react";
import "sass/rootScss/root.scss";
// import "sass/clientLanding/clientLanding";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { login, registerRedirect } from "../../../actions/auth";
// import { login, registerRedirect } from "actions/auth";
import { Form, Input, Button } from "reactstrap";
import Errors from "../../Notifications/Errors";
// import Errors from "views/Notifications/Errors";

const ClientLanding = () => {
  

  return (
    <div className="mainClientLayout">
    <div className="clientLayout">
        <div className="box">
            <h4 className='heading-4 text-upper'>Ticket Viral</h4>
            <div className='clientLayout__box'>

                <div className='clientLayout__box--youAre'>
                    <p className='para para--size-11 text-cap'>Do you want to buy Event's ticket(s) ?</p>
                    <p className='para para--size-11 text-cap'>Do you want to buy Leads ?</p>
                    <p className='para para--size-11 text-cap'>if yes click it</p>
                    <button className='btn btn--blue u-margin-top-small'>User / Buyer</button>
                </div>
                <div className='clientLayout__box--youAre'>
                    <p className='para para--size-11 text-cap'>Do you want to Create Event(s) & ticket(s) ?</p>
                    <p className='para para--size-11 text-cap'>Do you want to Upload your Leads ?</p>
                    <p className='para para--size-11 text-cap'>if yes click it</p>
                    <button className='btn btn--blue u-margin-top-small'>Manager / Lead's</button>
                </div>

            </div>
        </div>
    </div>
    </div>
  );
};



ClientLanding.propTypes = {
    login: PropTypes.func.isRequired,
    errorList: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    registerRedirect: PropTypes.func.isRequired,
  };
  const mapStateToProps = (state) => ({
    errorList: state.errors,
    loading: state.auth.loading,
  });
  
  export default connect(mapStateToProps, { login, registerRedirect })(ClientLanding);
