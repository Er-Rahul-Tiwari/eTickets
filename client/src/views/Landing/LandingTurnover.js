import React from "react";
// import "sass/rootScss/root.scss";
import "sass/landingPage/landingTurnover.scss";
// import demoVideo from "assets/landingTurnOverViedo.m4v";
import imgld from "assets/landingManage.jpg";

const TurnoverContent = () => {
  return (
    <>
      <div className="turnover__content">
        <h3 className="heading-3-sub para--light-4">
          ticketviral
        </h3>
        <h2 className="heading-2 para--light-4">
          {" "}
          Manage your own events
        </h2>
        <p className="para para--size-22 para--light-4 line-height-1_3">
          How you can increase your earning and sells worldwide. How you can
          increase your earning and sells worldwide.
        </p>
      </div>
      <div className="turnover__picture">
        <img className="turnover__picture--img" src={imgld} alt="backgrund" />
        {/* <div className='turnover__picture--vid'>
          <video
            className=""
            autoPlay=""
            playsInline=""
            muted=""
            loop="5"
          >
            <source src={demoVideo} type="video/mp4"></source>
          </video> 
        // </div> */}
      </div>
    </>
  );
};
export default TurnoverContent;
