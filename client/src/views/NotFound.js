import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="noMatch">
      <div className="box">
        <h2 className="heading-2 heading-2--dark">Sorry! Page Not Found</h2>
        <div className="  u-margin-top-medium">
          <Link to="/profile" className="para para--size-12 text-cap">
            Go to Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
