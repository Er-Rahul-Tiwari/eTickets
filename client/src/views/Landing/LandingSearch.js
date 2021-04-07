import React from "react";
import "sass/landingPage/landingSearch.scss";
import landingSearch from "assets/landingSerach.jpg";
// import "sass/rootScss/root.scss";

const LandingSearch = () => {
  return (
    <>
      <div className="search__content">
        <h3 className="heading-3-sub para--light-4 ">
          ticketviral
        </h3>
        <h2 className="heading-2 para--light-4">
          Search on search engine
        </h2>
        <p className="para para--size-22 para--light-4 line-height-1_3">
          Here you can create your event with tickets. Here you can create your
          event with tickets.
        </p>
      </div>
      <div className="search__picture">
        <img
          className="turnover__picture--img"
          src={landingSearch}
          alt="TV demo graphics"
        />
      </div>
    </>
  );
};

export default LandingSearch;
