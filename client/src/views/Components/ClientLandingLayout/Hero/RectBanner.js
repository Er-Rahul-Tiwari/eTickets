import React from "react";
import { Link } from "react-router-dom";
import "sass/hero/rectBanner.scss";

import imgld from "assets/banner/b-1400.png";

const RectBanner = () => {
  return (
    <>
      <div className="rectBanner">
        <div className="rectBanner__picture">
          <img
            className="rectBanner__picture--img"
            src={imgld}
            alt="rect image"
          />
          <div className="rectBanner__picture--paragraph">
            <h3 className="heading-3-sub para--light-3 line-height-2">
              ticketviral
            </h3>
            <h2 className="heading-2 heading-2--dark-2">
              Find the talent needed to get your business growing.
            </h2>
            <div className="u-margin-top-medium">
              <Link to="" className="linkColor">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RectBanner;
