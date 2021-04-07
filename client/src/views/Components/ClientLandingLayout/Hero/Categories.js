import React from "react";
// import "sass/hero/categories.scss";

import card06 from "assets/hero/5-design.jpg";
import card07 from "assets/hero/6-software.jpg";
import card08 from "assets/hero/7-development.jpg";

const Categories = () => {
  return (
    <>
      <div className="heroSlider">
        <h3 className="heading-3 heading-2--dark-2">
          Top events
          <span className="color-logo u-margin-left-small u-margin-right-small">
            categories
          </span>
        </h3>
        <div className="viewEvent--para u-margin-top-small">
          <div className="viewEvent--para__box">
            <div className="viewEvent--para__box--card viewEvent--para__box--card--background">
              <img
                src={card06}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <p className="viewEvent--para__box--card__event-name text-cap">
                Design
              </p>
            </div>
            <div className="viewEvent--para__box--card  viewEvent--para__box--card--background">
              <img
                src={card07}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <p className="viewEvent--para__box--card__event-name text-cap">
                Development
              </p>
            </div>
            <div className="viewEvent--para__box--card  viewEvent--para__box--card--background">
              <img
                src={card08}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <p className="viewEvent--para__box--card__event-name text-cap">
                IT & Software
              </p>
            </div>
            <div className="viewEvent--para__box--card  viewEvent--para__box--card--background">
              <img
                src={card06}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <p className="viewEvent--para__box--card__event-name text-cap">
                Design
              </p>
            </div>
            <div className="viewEvent--para__box--card  viewEvent--para__box--card--background">
              <img
                src={card07}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <p className="viewEvent--para__box--card__event-name text-cap">
                Development
              </p>
            </div>
            <div className="viewEvent--para__box--card  viewEvent--para__box--card--background">
              <img
                src={card08}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <p className="viewEvent--para__box--card__event-name text-cap">
                IT & Software
              </p>
            </div>

            <div className="viewEvent--para__box--card  viewEvent--para__box--card--background">
              <img
                src={card06}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <p className="viewEvent--para__box--card__event-name text-cap">
                Design
              </p>
            </div>

            <div className="viewEvent--para__box--card  viewEvent--para__box--card--background">
              <img
                src={card07}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <p className="viewEvent--para__box--card__event-name text-cap">
                Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Categories;
