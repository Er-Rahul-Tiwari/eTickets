import React from "react";
import "sass/hero/slider.scss";

import card from "assets/img/card-01.jpg";
import card02 from "assets/img/card-02.jpg";
import card03 from "assets/img/card-03.jpg";
import card04 from "assets/img/card-04.jpg";
import card05 from "assets/img/card-05.jpg";

const Slider = () => {
  return (
    <>
      <div className="heroSlider">
        <h3 className="heading-3 heading-2--dark-2">
          The world's largest selection of
          <span className="color-logo u-margin-left-small u-margin-right-small">
            popular Events
          </span>
        </h3>
        <div className="heroSlider__sticky u-margin-top-small">
          <div class="slider">
            <div class="slides">
              <div id="slide-1">All</div>
              <div id="slide-2">For you</div>
              <div id="slide-3">Today</div>
              <div id="slide-4">This weekend</div>
              <div id="slide-5">free</div>
              <div id="slide-1">Music</div>
              <div id="slide-2">food & Drink</div>
              <div id="slide-3">Charity & Causes</div>
            </div>
          </div>
        </div>
        <div className="viewEvent--para u-margin-top-small">
          <div className="viewEvent--para__box">
            <div className="viewEvent--para__box--card ">
              <img
                src={card02}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <p className="viewEvent--para__box--card__date text-cap">
                Sat, 4 June 2021
              </p>
              <p className="viewEvent--para__box--card__event-name text-cap">
                Opening Night Gala at Delhi Comedy Festival 2020
              </p>
              <p className="viewEvent--para__box--card__name">Dr. Angela Yu</p>
              <p className="viewEvent--para__box--card__rating">
                <span className="viewEvent--para__box--card__rating--number">
                  4.5
                </span>
                <span className="rating-star u-margin-right-sub-small u-margin-left-sub-small">
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                </span>

                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>

              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
              </p>
            </div>

            <div className="viewEvent--para__box--card ">
              <img
                src={card03}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <p className="viewEvent--para__box--card__date text-cap">
                Sat, 4 June 2021
              </p>
              <p className="viewEvent--para__box--card__event-name text-cap">
                Opening Night Gala at Delhi Comedy Festival 2020 Opening Night
                Gala at Delhi Comedy Festival 2020
              </p>
              <p className="viewEvent--para__box--card__name">Dr. Angela Yu</p>
              <p className="viewEvent--para__box--card__rating">
                <span className="viewEvent--para__box--card__rating--number">
                  4.5
                </span>
                <span className="rating-star u-margin-right-sub-small u-margin-left-sub-small">
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                </span>

                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>

              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
              </p>
            </div>

            <div className="viewEvent--para__box--card ">
              <img
                src={card04}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <p className="viewEvent--para__box--card__date text-cap">
                Sat, 4 June 2021
              </p>
              <p className="viewEvent--para__box--card__event-name text-cap">
                Opening Night Gala at Delhi Comedy Festival 2020
              </p>
              <p className="viewEvent--para__box--card__name">Dr. Angela Yu</p>
              <p className="viewEvent--para__box--card__rating">
                <span className="viewEvent--para__box--card__rating--number">
                  4.5
                </span>
                <span className="rating-star u-margin-right-sub-small u-margin-left-sub-small">
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                </span>

                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>

              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
              </p>
            </div>

            <div className="viewEvent--para__box--card ">
              <img
                src={card05}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <p className="viewEvent--para__box--card__date text-cap">
                Sat, 4 June 2021
              </p>
              <p className="viewEvent--para__box--card__event-name text-cap">
                Opening Night Gala at Delhi Comedy Festival 2020
              </p>
              <p className="viewEvent--para__box--card__name">Dr. Angela Yu</p>
              <p className="viewEvent--para__box--card__rating">
                <span className="viewEvent--para__box--card__rating--number">
                  4.5
                </span>
                <span className="rating-star u-margin-right-sub-small u-margin-left-sub-small">
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                </span>

                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>

              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
              </p>
            </div>

            <div className="viewEvent--para__box--card ">
              <img
                src={card}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <p className="viewEvent--para__box--card__date text-cap">
                Sat, 4 June 2021
              </p>
              <p className="viewEvent--para__box--card__event-name text-cap">
                Opening Night Gala at Delhi Comedy Festival 2020
              </p>
              <p className="viewEvent--para__box--card__name">Dr. Angela Yu</p>
              <p className="viewEvent--para__box--card__rating">
                <span className="viewEvent--para__box--card__rating--number">
                  4.5
                </span>
                <span className="rating-star u-margin-right-sub-small u-margin-left-sub-small">
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                </span>

                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>

              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
              </p>
            </div>

            <div className="viewEvent--para__box--card ">
              <img
                src={card02}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <p className="viewEvent--para__box--card__date text-cap">
                Sat, 4 June 2021
              </p>
              <p className="viewEvent--para__box--card__event-name text-cap">
                Opening Night Gala at Delhi Comedy Festival 2020
              </p>
              <p className="viewEvent--para__box--card__name">Dr. Angela Yu</p>
              <p className="viewEvent--para__box--card__rating">
                <span className="viewEvent--para__box--card__rating--number">
                  4.5
                </span>
                <span className="rating-star u-margin-right-sub-small u-margin-left-sub-small">
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                </span>

                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>

              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
              </p>
            </div>

            <div className="viewEvent--para__box--card ">
              <img
                src={card03}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <p className="viewEvent--para__box--card__date text-cap">
                Sat, 4 June 2021
              </p>
              <p className="viewEvent--para__box--card__event-name text-cap">
                Opening Night Gala at Delhi Comedy Festival 2020 Opening Night
                Gala at Delhi Comedy Festival 2020
              </p>
              <p className="viewEvent--para__box--card__name">Dr. Angela Yu</p>
              <p className="viewEvent--para__box--card__rating">
                <span className="viewEvent--para__box--card__rating--number">
                  4.5
                </span>
                <span className="rating-star u-margin-right-sub-small u-margin-left-sub-small">
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                </span>

                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>

              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
              </p>
            </div>

            <div className="viewEvent--para__box--card ">
              <img
                src={card04}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <p className="viewEvent--para__box--card__date text-cap">
                Sat, 4 June 2021
              </p>
              <p className="viewEvent--para__box--card__event-name text-cap">
                Opening Night Gala at Delhi Comedy Festival 2020
              </p>
              <p className="viewEvent--para__box--card__name">Dr. Angela Yu</p>
              <p className="viewEvent--para__box--card__rating">
                <span className="viewEvent--para__box--card__rating--number">
                  4.5
                </span>
                <span className="rating-star u-margin-right-sub-small u-margin-left-sub-small">
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                </span>

                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>

              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
              </p>
            </div>

            <div className="viewEvent--para__box--card ">
              <img
                src={card05}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <p className="viewEvent--para__box--card__date text-cap">
                Sat, 4 June 2021
              </p>
              <p className="viewEvent--para__box--card__event-name text-cap">
                Opening Night Gala at Delhi Comedy Festival 2020
              </p>
              <p className="viewEvent--para__box--card__name">Dr. Angela Yu</p>
              <p className="viewEvent--para__box--card__rating">
                <span className="viewEvent--para__box--card__rating--number">
                  4.5
                </span>
                <span className="rating-star u-margin-right-sub-small u-margin-left-sub-small">
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                </span>

                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>

              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
              </p>
            </div>

            <div className="viewEvent--para__box--card ">
              <img
                src={card}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <p className="viewEvent--para__box--card__date text-cap">
                Sat, 4 June 2021
              </p>
              <p className="viewEvent--para__box--card__event-name text-cap">
                Opening Night Gala at Delhi Comedy Festival 2020
              </p>
              <p className="viewEvent--para__box--card__name">Dr. Angela Yu</p>
              <p className="viewEvent--para__box--card__rating">
                <span className="viewEvent--para__box--card__rating--number">
                  4.5
                </span>
                <span className="rating-star u-margin-right-sub-small u-margin-left-sub-small">
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                  <i data-spec="icon" aria-hidden="true">
                    <svg
                      id="icon-rating-star"
                      viewBox="0 0 24 24"
                      height="10px"
                      width="10px"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                    </svg>
                  </i>
                </span>

                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>

              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Slider;
