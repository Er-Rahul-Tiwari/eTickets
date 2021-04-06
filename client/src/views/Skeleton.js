import React, { Fragment } from "react";
// import spinner from "../assets/spinner.gif";
// import 'sass/rootScss/root.scss';

export default (type) => {
  return (
    <Fragment>
      { (type === "list") ? "" : 
      <div className='list'></div> 
      }
    </Fragment>
)};
