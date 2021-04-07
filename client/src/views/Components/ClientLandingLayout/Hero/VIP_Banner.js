import React from "react";
import { Link } from "react-router-dom";
import "sass/hero/vipBanner.scss";

import imgld from "assets/vipBanner/Support.png";
// import imgld from "assets/vipBanner/Quality.jpg";
// import imgld from "assets/vipBanner/desktop_main.jpg";
// import imgld from "assets/vipBanner/Curated.png";

const VIP_Banner = () => {
  return (
    <>
      {" "}
      <div className="VIP_Banner">
        <div className="VIP_Banner__picture">
          <img
            className="VIP_Banner__picture--img"
            src={imgld}
            alt="rect image"
          />
          <div className="VIP_Banner__picture--paragraph">
            <h3 className="heading-3-sub para--light-3 line-height-2">
              ticketviral
            </h3>
            <h1 className="heading-1 line-height-1">
              Be inspired to achieve more, and faster with top-quality work
              delivered by our Pros.
            </h1>
            <div className="u-margin-top-small">
              <Link to="" className="vipLink">
                # Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VIP_Banner;
