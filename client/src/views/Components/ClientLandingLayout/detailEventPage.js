import React, { useState } from "react";
import "sass/rootScss/root.scss";
// import "sass/detailEventPage/detailEventPage";
import card02 from "assets/img/card-03.jpg";
import banner from "assets/landingBanner.jpg";
import user from "assets/img/managerPhoto.jpg";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { login, registerRedirect } from "../../../actions/auth";
// import { login, registerRedirect } from "actions/auth";
import { Form, Input, Button } from "reactstrap";
import Errors from "../../Notifications/Errors";
// import Errors from "views/Notifications/Errors";

const detailEventPage = () => {
  return (
    <div className="layout">
      <div className="ticketsDetail">
        <div className="ticketsDetail--text">
          <div className="banner">
            <figure className="banner__shape">
              <img
                src={banner}
                className=" banner__img ticketsDetail--story--img"
                alt="event name graph"
              />
              <figcaption className="banner__caption">
                World wide marathan
              </figcaption>
            </figure>
          </div>

          <div className="ticketsDetail--text--header header__visibility ticket--card">
            <p className="ticketsDetail--text--header-para">
              Auto Expo 2020 iOS 13 & Swift 5 - The Complete iOS App Development
              Bootcamp
            </p>
            <p className="para para--dark line-height-1_2 u-margin-top-sub-small">
              Come, visit and look at all the exciting upcoming automobiles. New
              updates on Honda City and Maruti Dzire. From Beginner to iOS App
              Developer with Just One Course! Fully Updated
            </p>
            <div className=" u-margin-top-small">
              <i className="glyph-icon flaticon-man"> </i>
              <span className="para--size-11">start</span>
              <span className="ticketsDetail--text--header-span">
                Mon, 20 Jun 2020
              </span>
              <span className="para--size-11">- end</span>
              <span className="u-margin-left-sub-small para--size-12">
                Sat, 22 Jun 2020
              </span>
            </div>
            <p className="para--size-12 para--dark-2 text-upper">
              <i className="glyph-icon flaticon-locate"> </i>
              San Clemente Palace Kempinski Venice
            </p>
            <div className="profile--para__box--card__days__item para--size-12">
              <span>3 days event</span>
              <span>12 stops</span>
              <span>10 person per ticket</span>
            </div>
            <div className="profile--para__box--card__rating">
              <span className="profile--para__box--card__rating--number">
                4.5
              </span>
              <span class="rating-star u-margin-left-sub-small u-margin-right-sub-small">
                <i data-spec="icon" aria-hidden="true">
                  <svg
                    id="icon-rating-star"
                    viewBox="0 0 24 24"
                    height="12px"
                    width="12px"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                  </svg>
                </i>
                <i data-spec="icon" aria-hidden="true">
                  <svg
                    id="icon-rating-star"
                    viewBox="0 0 24 24"
                    height="12px"
                    width="12px"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                  </svg>
                </i>
                <i data-spec="icon" aria-hidden="true">
                  <svg
                    id="icon-rating-star"
                    viewBox="0 0 24 24"
                    height="12px"
                    width="12px"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                  </svg>
                </i>
                <i data-spec="icon" aria-hidden="true">
                  <svg
                    id="icon-rating-star"
                    viewBox="0 0 24 24"
                    height="12px"
                    width="12px"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                  </svg>
                </i>
                <i data-spec="icon" aria-hidden="true">
                  <svg
                    id="icon-rating-star"
                    viewBox="0 0 24 24"
                    height="12px"
                    width="12px"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                  </svg>
                </i>
              </span>
              <span className="profile--para__box--card__rating--person">
                ( 101 )
              </span>
            </div>
            <div className="para--size-12 text-lower u-margin-right-sub-small">
              <span>created by </span>
              <span className="para--size-13 para--dark-2 text-upper">
                MD pritesh sharma
              </span>
            </div>
          </div>
          {/* card */}
          <div className="ticket">
            {/* Repeating ticketsDetail here.. */}
            <div className="ticket--card curd">
              <p className="para--size-12 para--dark-2 text-upper">Free</p>
              <span className="edit edit--color">
                <i data-spec="icon" aria-hidden="true">
                  {/* edit */}
                  <svg
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    focusable="false"
                  >
                    <path d="M21.71 5L19 2.29a1 1 0 00-.71-.29 1 1 0 00-.7.29L4 15.85 2 22l6.15-2L21.71 6.45a1 1 0 00.29-.74 1 1 0 00-.29-.71zM6.87 18.64l-1.5-1.5L15.92 6.57l1.5 1.5zM18.09 7.41l-1.5-1.5 1.67-1.67 1.5 1.5z"></path>
                  </svg>
                </i>
              </span>
              <p className="ticket--card--name">
                Ticket Cards Name Ticket Cards Name Ticket Cards Name
              </p>
              <p className="ticket--card--date para para--size-12 para--dark-2 u-margin-top-sub-small">
                <span className="para--dark para--size-11 text-lower">
                  start{" "}
                </span>
                Fri, 7 Aug 2020 00:30 IST
              </p>
              <p className="ticket--card--date para para--size-12 para--dark-2">
                <span className="para--dark para--size-11 text-lower">
                  end{" "}
                </span>
                Sat, 8 Aug 2020 01:22 IST
              </p>
              <p className="para para--size-12 para--dark-2 ticket--card--location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="profile--para__box--card__days__item para--dark para--size-11">
                <span>2 days</span>
                <span>5 person per ticket</span>
              </div>
              <p className="profile--para__box--card__currentPrice u-margin-top-sub-small">
                <span>₹12000</span>
                <s className="profile--para__box--card__currentPrice__discount">
                  <span>₹20000</span>
                </s>
                <span className="para--size-14 u-margin-left-small">
                  90% off
                </span>
              </p>
              <button className="btn btn--blue u-margin-top-small">
                Book Now
              </button>
            </div>
            <div className="ticket--card curd">
              <span className="edit edit--color">
                <i data-spec="icon" aria-hidden="true">
                  {/* edit */}
                  <svg
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    focusable="false"
                  >
                    <path d="M21.71 5L19 2.29a1 1 0 00-.71-.29 1 1 0 00-.7.29L4 15.85 2 22l6.15-2L21.71 6.45a1 1 0 00.29-.74 1 1 0 00-.29-.71zM6.87 18.64l-1.5-1.5L15.92 6.57l1.5 1.5zM18.09 7.41l-1.5-1.5 1.67-1.67 1.5 1.5z"></path>
                  </svg>
                </i>
              </span>
              <p className="para--size-12 para--dark-2 text-upper">Online</p>
              <p className="ticket--card--name">
                Ticket Cards Name Ticket Cards Name Ticket Cards Name
              </p>
              <p className="ticket--card--date para para--size-12 para--dark-2 u-margin-top-sub-small">
                <span className="para--dark para--size-11 text-lower">
                  start{" "}
                </span>
                Fri, 7 Aug 2020 00:30 IST
              </p>
              <p className="ticket--card--date para para--size-12 para--dark-2">
                <span className="para--dark para--size-11 text-lower">
                  end{" "}
                </span>
                Sat, 8 Aug 2020 01:22 IST
              </p>
              <p className="para para--size-12 para--dark-2 ticket--card--location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="profile--para__box--card__days__item para--dark para--size-11">
                <span>2 days</span>
                <span>5 person per ticket</span>
              </div>
              <p className="profile--para__box--card__currentPrice u-margin-top-sub-small">
                <span>₹12000</span>
                <s className="profile--para__box--card__currentPrice__discount">
                  <span>₹20000</span>
                </s>
                <span className="para--size-14 u-margin-left-small">
                  90% off
                </span>
              </p>
              <button className="btn btn--blue u-margin-top-small">
                Book Now
              </button>
            </div>
            <div className="ticket--card curd">
              <span className="edit edit--color">
                <i data-spec="icon" aria-hidden="true">
                  {/* edit */}
                  <svg
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    focusable="false"
                  >
                    <path d="M21.71 5L19 2.29a1 1 0 00-.71-.29 1 1 0 00-.7.29L4 15.85 2 22l6.15-2L21.71 6.45a1 1 0 00.29-.74 1 1 0 00-.29-.71zM6.87 18.64l-1.5-1.5L15.92 6.57l1.5 1.5zM18.09 7.41l-1.5-1.5 1.67-1.67 1.5 1.5z"></path>
                  </svg>
                </i>
              </span>
              <p className="para--size-12 para--dark-2 text-upper">paid</p>
              <p className="ticket--card--name">
                Ticket Cards Name Ticket Cards Name Ticket Cards Name
              </p>
              <p className="ticket--card--date para para--size-12 para--dark-2 u-margin-top-sub-small">
                <span className="para--dark para--size-11 text-lower">
                  start{" "}
                </span>
                Fri, 7 Aug 2020 00:30 IST
              </p>
              <p className="ticket--card--date para para--size-12 para--dark-2">
                <span className="para--dark para--size-11 text-lower">
                  end{" "}
                </span>
                Sat, 8 Aug 2020 01:22 IST
              </p>
              <p className="para para--size-12 para--dark-2 ticket--card--location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="profile--para__box--card__days__item para--dark para--size-11">
                <span>2 days</span>
                <span>5 person per ticket</span>
              </div>
              <p className="profile--para__box--card__currentPrice u-margin-top-sub-small">
                <span>₹12000</span>
                <s className="profile--para__box--card__currentPrice__discount">
                  <span>₹20000</span>
                </s>
                <span className="para--size-14 u-margin-left-small">
                  90% off
                </span>
              </p>
              <button className="btn btn--blue u-margin-top-small">
                Book Now
              </button>
            </div>
            <div className="ticket--card curd">
              <span className="edit edit--color">
                <i data-spec="icon" aria-hidden="true">
                  {/* edit */}
                  <svg
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    focusable="false"
                  >
                    <path d="M21.71 5L19 2.29a1 1 0 00-.71-.29 1 1 0 00-.7.29L4 15.85 2 22l6.15-2L21.71 6.45a1 1 0 00.29-.74 1 1 0 00-.29-.71zM6.87 18.64l-1.5-1.5L15.92 6.57l1.5 1.5zM18.09 7.41l-1.5-1.5 1.67-1.67 1.5 1.5z"></path>
                  </svg>
                </i>
              </span>
              <p className="para--size-12 para--dark-2 text-upper">donation</p>
              <p className="ticket--card--name">
                Ticket Cards Name Ticket Cards Name Ticket Cards Name
              </p>
              <p className="ticket--card--date para para--size-12 para--dark-2 u-margin-top-sub-small">
                <span className="para--dark para--size-11 text-lower">
                  start{" "}
                </span>
                Fri, 7 Aug 2020 00:30 IST
              </p>
              <p className="ticket--card--date para para--size-12 para--dark-2">
                <span className="para--dark para--size-11 text-lower">
                  end{" "}
                </span>
                Sat, 8 Aug 2020 01:22 IST
              </p>
              <p className="para para--size-12 para--dark-2 ticket--card--location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="profile--para__box--card__days__item para--dark para--size-11">
                <span>2 days</span>
                <span>5 person per ticket</span>
              </div>
              <p className="profile--para__box--card__currentPrice u-margin-top-sub-small">
                <span>₹12000</span>
                <s className="profile--para__box--card__currentPrice__discount">
                  <span>₹20000</span>
                </s>
                <span className="para--size-14 u-margin-left-small">
                  90% off
                </span>
              </p>
              <button className="btn btn--blue u-margin-top-small">
                Book Now
              </button>
            </div>
            <div className="ticket--card curd">
              <span className="edit edit--color">
                <i data-spec="icon" aria-hidden="true">
                  {/* edit */}
                  <svg
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    focusable="false"
                  >
                    <path d="M21.71 5L19 2.29a1 1 0 00-.71-.29 1 1 0 00-.7.29L4 15.85 2 22l6.15-2L21.71 6.45a1 1 0 00.29-.74 1 1 0 00-.29-.71zM6.87 18.64l-1.5-1.5L15.92 6.57l1.5 1.5zM18.09 7.41l-1.5-1.5 1.67-1.67 1.5 1.5z"></path>
                  </svg>
                </i>
              </span>
              <p className="para--size-12 para--dark-2 text-upper">Free</p>
              <p className="ticket--card--name">
                Ticket Cards Name Ticket Cards Name Ticket Cards Name
              </p>
              <p className="ticket--card--date para para--size-12 para--dark-2 u-margin-top-sub-small">
                <span className="para--dark para--size-11 text-lower">
                  start{" "}
                </span>
                Fri, 7 Aug 2020 00:30 IST
              </p>
              <p className="ticket--card--date para para--size-12 para--dark-2">
                <span className="para--dark para--size-11 text-lower">
                  end{" "}
                </span>
                Sat, 8 Aug 2020 01:22 IST
              </p>
              <p className="para para--size-12 para--dark-2 ticket--card--location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="profile--para__box--card__days__item para--dark para--size-11">
                <span>2 days</span>
                <span>5 person per ticket</span>
              </div>
              <p className="profile--para__box--card__currentPrice u-margin-top-sub-small">
                <span>₹12000</span>
                <s className="profile--para__box--card__currentPrice__discount">
                  <span>₹20000</span>
                </s>
              </p>
              <button className="btn btn--blue u-margin-top-small">
                Book Now
              </button>
            </div>
            <div className="ticket--card curd">
              <span className="edit edit--color">
                <i data-spec="icon" aria-hidden="true">
                  {/* edit */}
                  <svg
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    focusable="false"
                  >
                    <path d="M21.71 5L19 2.29a1 1 0 00-.71-.29 1 1 0 00-.7.29L4 15.85 2 22l6.15-2L21.71 6.45a1 1 0 00.29-.74 1 1 0 00-.29-.71zM6.87 18.64l-1.5-1.5L15.92 6.57l1.5 1.5zM18.09 7.41l-1.5-1.5 1.67-1.67 1.5 1.5z"></path>
                  </svg>
                </i>
              </span>
              <p className="para--size-12 para--dark-2 text-upper">Free</p>
              <p className="ticket--card--name">
                Ticket Cards Name Ticket Cards Name Ticket Cards Name
              </p>
              <p className="ticket--card--date para para--size-12 para--dark-2 u-margin-top-sub-small">
                <span className="para--dark para--size-11 text-lower">
                  start{" "}
                </span>
                Fri, 7 Aug 2020 00:30 IST
              </p>
              <p className="ticket--card--date para para--size-12 para--dark-2">
                <span className="para--dark para--size-11 text-lower">
                  end{" "}
                </span>
                Sat, 8 Aug 2020 01:22 IST
              </p>
              <p className="para para--size-12 para--dark-2 ticket--card--location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="profile--para__box--card__days__item para--dark para--size-11">
                <span>2 days</span>
                <span>5 person per ticket</span>
              </div>
              <p className="profile--para__box--card__currentPrice u-margin-top-sub-small">
                <span>₹12000</span>
                <s className="profile--para__box--card__currentPrice__discount">
                  <span>₹20000</span>
                </s>
              </p>
              <button className="btn btn--blue u-margin-top-small">
                Book Now
              </button>
            </div>
            <div className="ticket--card curd">
              <span className="edit edit--color">
                <i data-spec="icon" aria-hidden="true">
                  {/* edit */}
                  <svg
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    focusable="false"
                  >
                    <path d="M21.71 5L19 2.29a1 1 0 00-.71-.29 1 1 0 00-.7.29L4 15.85 2 22l6.15-2L21.71 6.45a1 1 0 00.29-.74 1 1 0 00-.29-.71zM6.87 18.64l-1.5-1.5L15.92 6.57l1.5 1.5zM18.09 7.41l-1.5-1.5 1.67-1.67 1.5 1.5z"></path>
                  </svg>
                </i>
              </span>
              <p className="para--size-12 para--dark-2 text-upper">Free</p>
              <p className="ticket--card--name">
                Ticket Cards Name Ticket Cards Name Ticket Cards Name
              </p>
              <p className="ticket--card--date para para--size-12 para--dark-2 u-margin-top-sub-small">
                <span className="para--dark para--size-11 text-lower">
                  start{" "}
                </span>
                Fri, 7 Aug 2020 00:30 IST
              </p>
              <p className="ticket--card--date para para--size-12 para--dark-2">
                <span className="para--dark para--size-11 text-lower">
                  end{" "}
                </span>
                Sat, 8 Aug 2020 01:22 IST
              </p>
              <p className="para para--size-12 para--dark-2 ticket--card--location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="profile--para__box--card__days__item para--dark para--size-11">
                <span>2 days</span>
                <span>5 person per ticket</span>
              </div>
              <p className="profile--para__box--card__currentPrice u-margin-top-sub-small">
                <span>₹12000</span>
                <s className="profile--para__box--card__currentPrice__discount">
                  <span>₹20000</span>
                </s>
              </p>
              <button className="btn btn--blue u-margin-top-small">
                Book Now
              </button>
            </div>
            <div className="ticket--card curd">
              <span className="edit edit--color">
                <i data-spec="icon" aria-hidden="true">
                  {/* edit */}
                  <svg
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    focusable="false"
                  >
                    <path d="M21.71 5L19 2.29a1 1 0 00-.71-.29 1 1 0 00-.7.29L4 15.85 2 22l6.15-2L21.71 6.45a1 1 0 00.29-.74 1 1 0 00-.29-.71zM6.87 18.64l-1.5-1.5L15.92 6.57l1.5 1.5zM18.09 7.41l-1.5-1.5 1.67-1.67 1.5 1.5z"></path>
                  </svg>
                </i>
              </span>
              <p className="para--size-12 para--dark-2 text-upper">Free</p>
              <p className="ticket--card--name">
                Ticket Cards Name Ticket Cards Name Ticket Cards Name
              </p>
              <p className="ticket--card--date para para--size-12 para--dark-2 u-margin-top-sub-small">
                <span className="para--dark para--size-11 text-lower">
                  start{" "}
                </span>
                Fri, 7 Aug 2020 00:30 IST
              </p>
              <p className="ticket--card--date para para--size-12 para--dark-2">
                <span className="para--dark para--size-11 text-lower">
                  end{" "}
                </span>
                Sat, 8 Aug 2020 01:22 IST
              </p>
              <p className="para para--size-12 para--dark-2 ticket--card--location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="profile--para__box--card__days__item para--dark para--size-11">
                <span>2 days</span>
                <span>5 person per ticket</span>
              </div>
              <p className="profile--para__box--card__currentPrice u-margin-top-sub-small">
                <span>₹12000</span>
                <s className="profile--para__box--card__currentPrice__discount">
                  <span>₹20000</span>
                </s>
              </p>
              <button className="btn btn--blue u-margin-top-small">
                Book Now
              </button>
            </div>
          </div>

          {/* Requirement */}
          <div className="requirement">
            <section class="accordion">
              <input type="checkbox" name="collapse" id="handle1" />
              <h2 class="handle">
                <label for="handle1">Requirement</label>
              </h2>
              <div class="content">
                <p className="para para--size-16 para--dark-2">
                  A pale, bitter, highly attenuated and well carbonated Trappist
                  ale, showing a fruity-spicy Trappist yeast character, a
                  spicy-floral hop profile, and a soft, supportive grainy-sweet
                  malt palate.
                </p>
                <p className="para para--size-16 para--dark-2">
                  While Trappist breweries have a tradition of brewing a
                  lower-strength beer as a monk’s daily ration, the bitter, pale
                  beer this style describes is a relatively modern invention
                  reflecting current tastes. Westvleteren first brewed theirs in
                  1999, but replaced older lower-gravity products.
                </p>
              </div>
            </section>
            <section class="accordion">
              <input type="checkbox" name="collapse" id="handle2" />
              <h2 class="handle">
                <label for="handle2">Descriptions</label>
              </h2>
              <div class="content">
                <p className="para para--size-16 para--dark-2">
                  A pale, bitter, highly attenuated and well carbonated Trappist
                  ale, showing a fruity-spicy Trappist yeast character, a
                  spicy-floral hop profile, and a soft, supportive grainy-sweet
                  malt palate.
                </p>
                <p className="para para--size-16 para--dark-2">
                  While Trappist breweries have a tradition of brewing a
                  lower-strength beer as a monk’s daily ration, the bitter, pale
                  beer this style describes is a relatively modern invention
                  reflecting current tastes. Westvleteren first brewed theirs in
                  1999, but replaced older lower-gravity products.
                </p>
              </div>
            </section>
            <section class="accordion">
              <input type="checkbox" name="collapse" id="handle3" />
              <h2 class="handle">
                <label for="handle3">Event Info</label>
              </h2>
              <div class="content">
                <p className="para para--size-16 para--dark-2">
                  A pale, bitter, highly attenuated and well carbonated Trappist
                  ale, showing a fruity-spicy Trappist yeast character, a
                  spicy-floral hop profile, and a soft, supportive grainy-sweet
                  malt palate.
                </p>
                <p className="para para--size-16 para--dark-2">
                  While Trappist breweries have a tradition of brewing a
                  lower-strength beer as a monk’s daily ration, the bitter, pale
                  beer this style describes is a relatively modern invention
                  reflecting current tastes. Westvleteren first brewed theirs in
                  1999, but replaced older lower-gravity products.
                </p>
              </div>
            </section>

            {/* Evnet Card */}
            <div className="ticket--card curd">
              <div className="wholeEventCard__container">
                {/* Repeat Event */}
                <div className="wholeEventCard__container__list">
                  <img src={user} className="wholeEventCard__container__img" />
                  {/* name */}
                  <div className="wholeEventCard__container__detail">
                    <div className="wholeEventCard__container__dates">
                      <p className="wholeEventCard__container__date">
                        Sep 20, 2020
                      </p>
                    </div>
                    <div className="wholeEventCard__container__details">
                      <span className="wholeEventCard__container__name">
                        Auto Expo 2020 iOS 13 & Swift 5 - The Complete iOS App
                        Development Bootcamp Auto Expo 2020 iOS 13 & Swift 5 -
                        The Complete iOS App Development Bootcamp
                      </span>
                    </div>
                    <div className="wholeEventCard__container__role">
                      <p className="wholeEventCard__container__role__reputation">
                        best manager
                      </p>
                    </div>
                  </div>

                  {/* rating */}
                  <div className="wholeEventCard__container__detail">
                    <div className="wholeEventCard__container__box">
                      <span className="wholeEventCard__container__rating u-margin-right-sub-small">
                        4.7
                      </span>
                      <i data-spec="icon" aria-hidden="true">
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                    </div>
                  </div>
                  {/* participants */}
                  <div className="wholeEventCard__container__detail story__visibility">
                    <div className="wholeEventCard__container__participants">
                      <i data-spec="icon" aria-hidden="true">
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M16 10c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3c-1.66 0-3 1.34-3 3s1.34 3 3 3zM8 10c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3c-1.66 0-3 1.34-3 3s1.34 3 3 3zM8 12c-2.33 0-7 1.17-7 3.5v4.5h14v-4.5c0-2.33-4.67-3.5-7-3.5zM16 12c-0.29 0-0.62 0.020-0.97 0.050 1.16 0.84 1.97 1.97 1.97 3.45v4.5h6v-4.5c0-2.33-4.67-3.5-7-3.5z"></path>
                        </svg>
                      </i>
                      <span className="wholeEventCard__container__participants--num u-margin-left-sub-small">
                        498,209
                      </span>
                    </div>
                  </div>
                  {/* heart/add to cart */}
                  <div className="wholeEventCard__container__heart story__visibility">
                    <button
                      aria-label="thumbs up"
                      class="btn-circle"
                      data-uia="thumbsUp-button"
                      type="button"
                    >
                      <div class="" role="presentation">
                        <i data-spec="icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24">
                            <path
                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                              fill="currentColor"
                            ></path>
                          </svg>{" "}
                        </i>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Evnet Card */}
            <div className="ticket--card curd">
              <div className="wholeEventCard__container">
                {/* Repeat Event */}
                <div className="wholeEventCard__container__list">
                  <img src={user} className="wholeEventCard__container__img" />
                  {/* name */}
                  <div className="wholeEventCard__container__detail">
                    <div className="wholeEventCard__container__dates">
                      <p className="wholeEventCard__container__date">
                        Sep 20, 2020
                      </p>
                    </div>
                    <div className="wholeEventCard__container__details">
                      <span className="wholeEventCard__container__name">
                        Auto Expo 2020 iOS 13 & Swift 5 - The Complete iOS App
                        Development Bootcamp Auto Expo 2020 iOS 13 & Swift 5 -
                        The Complete iOS App Development Bootcamp
                      </span>
                    </div>
                    <div className="wholeEventCard__container__role">
                      <p className="wholeEventCard__container__role__reputation">
                        best manager
                      </p>
                    </div>
                  </div>

                  {/* rating */}
                  <div className="wholeEventCard__container__detail">
                    <div className="wholeEventCard__container__box">
                      <span className="wholeEventCard__container__rating u-margin-right-sub-small">
                        4.7
                      </span>
                      <i data-spec="icon" aria-hidden="true">
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                    </div>
                  </div>
                  {/* participants */}
                  <div className="wholeEventCard__container__detail story__visibility">
                    <div className="wholeEventCard__container__participants">
                      <i data-spec="icon" aria-hidden="true">
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M16 10c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3c-1.66 0-3 1.34-3 3s1.34 3 3 3zM8 10c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3c-1.66 0-3 1.34-3 3s1.34 3 3 3zM8 12c-2.33 0-7 1.17-7 3.5v4.5h14v-4.5c0-2.33-4.67-3.5-7-3.5zM16 12c-0.29 0-0.62 0.020-0.97 0.050 1.16 0.84 1.97 1.97 1.97 3.45v4.5h6v-4.5c0-2.33-4.67-3.5-7-3.5z"></path>
                        </svg>
                      </i>
                      <span className="wholeEventCard__container__participants--num u-margin-left-sub-small">
                        498,209
                      </span>
                    </div>
                  </div>
                  {/* heart/add to cart */}
                  <div className="wholeEventCard__container__heart story__visibility">
                    <button
                      aria-label="thumbs up"
                      class="btn-circle"
                      data-uia="thumbsUp-button"
                      type="button"
                    >
                      <div class="" role="presentation">
                        <i data-spec="icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24">
                            <path
                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                              fill="currentColor"
                            ></path>
                          </svg>{" "}
                        </i>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Evnet Card */}
            <div className="ticket--card curd">
              <div className="wholeEventCard__container">
                {/* Repeat Event */}
                <div className="wholeEventCard__container__list">
                  <img src={user} className="wholeEventCard__container__img" />
                  {/* name */}
                  <div className="wholeEventCard__container__detail">
                    <div className="wholeEventCard__container__dates">
                      <p className="wholeEventCard__container__date">
                        Sep 20, 2020
                      </p>
                    </div>
                    <div className="wholeEventCard__container__details">
                      <span className="wholeEventCard__container__name">
                        Auto Expo 2020 iOS 13 & Swift 5 - The Complete iOS App
                        Development Bootcamp Auto Expo 2020 iOS 13 & Swift 5 -
                        The Complete iOS App Development Bootcamp
                      </span>
                    </div>
                    <div className="wholeEventCard__container__role">
                      <p className="wholeEventCard__container__role__reputation">
                        best manager
                      </p>
                    </div>
                  </div>

                  {/* rating */}
                  <div className="wholeEventCard__container__detail">
                    <div className="wholeEventCard__container__box">
                      <span className="wholeEventCard__container__rating u-margin-right-sub-small">
                        4.7
                      </span>
                      <i data-spec="icon" aria-hidden="true">
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                    </div>
                  </div>
                  {/* participants */}
                  <div className="wholeEventCard__container__detail story__visibility">
                    <div className="wholeEventCard__container__participants">
                      <i data-spec="icon" aria-hidden="true">
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M16 10c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3c-1.66 0-3 1.34-3 3s1.34 3 3 3zM8 10c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3c-1.66 0-3 1.34-3 3s1.34 3 3 3zM8 12c-2.33 0-7 1.17-7 3.5v4.5h14v-4.5c0-2.33-4.67-3.5-7-3.5zM16 12c-0.29 0-0.62 0.020-0.97 0.050 1.16 0.84 1.97 1.97 1.97 3.45v4.5h6v-4.5c0-2.33-4.67-3.5-7-3.5z"></path>
                        </svg>
                      </i>
                      <span className="wholeEventCard__container__participants--num u-margin-left-sub-small">
                        498,209
                      </span>
                    </div>
                  </div>
                  {/* heart/add to cart */}
                  <div className="wholeEventCard__container__heart story__visibility">
                    <button
                      aria-label="thumbs up"
                      class="btn-circle"
                      data-uia="thumbsUp-button"
                      type="button"
                    >
                      <div class="" role="presentation">
                        <i data-spec="icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24">
                            <path
                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                              fill="currentColor"
                            ></path>
                          </svg>{" "}
                        </i>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Evnet Card */}
            <div className="ticket--card curd">
              <div className="wholeEventCard__container">
                {/* Repeat Event */}
                <div className="wholeEventCard__container__list">
                  <img src={user} className="wholeEventCard__container__img" />
                  {/* name */}
                  <div className="wholeEventCard__container__detail">
                    <div className="wholeEventCard__container__dates">
                      <p className="wholeEventCard__container__date">
                        Sep 20, 2020
                      </p>
                    </div>
                    <div className="wholeEventCard__container__details">
                      <span className="wholeEventCard__container__name">
                        Auto Expo 2020 iOS 13 & Swift 5 - The Complete iOS App
                        Development Bootcamp Auto Expo 2020 iOS 13 & Swift 5 -
                        The Complete iOS App Development Bootcamp
                      </span>
                    </div>
                    <div className="wholeEventCard__container__role">
                      <p className="wholeEventCard__container__role__reputation">
                        best manager
                      </p>
                    </div>
                  </div>

                  {/* rating */}
                  <div className="wholeEventCard__container__detail">
                    <div className="wholeEventCard__container__box">
                      <span className="wholeEventCard__container__rating u-margin-right-sub-small">
                        4.7
                      </span>
                      <i data-spec="icon" aria-hidden="true">
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                    </div>
                  </div>
                  {/* participants */}
                  <div className="wholeEventCard__container__detail story__visibility">
                    <div className="wholeEventCard__container__participants">
                      <i data-spec="icon" aria-hidden="true">
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M16 10c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3c-1.66 0-3 1.34-3 3s1.34 3 3 3zM8 10c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3c-1.66 0-3 1.34-3 3s1.34 3 3 3zM8 12c-2.33 0-7 1.17-7 3.5v4.5h14v-4.5c0-2.33-4.67-3.5-7-3.5zM16 12c-0.29 0-0.62 0.020-0.97 0.050 1.16 0.84 1.97 1.97 1.97 3.45v4.5h6v-4.5c0-2.33-4.67-3.5-7-3.5z"></path>
                        </svg>
                      </i>
                      <span className="wholeEventCard__container__participants--num u-margin-left-sub-small">
                        498,209
                      </span>
                    </div>
                  </div>
                  {/* heart/add to cart */}
                  <div className="wholeEventCard__container__heart story__visibility">
                    <button
                      aria-label="thumbs up"
                      class="btn-circle"
                      data-uia="thumbsUp-button"
                      type="button"
                    >
                      <div class="" role="presentation">
                        <i data-spec="icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24">
                            <path
                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                              fill="currentColor"
                            ></path>
                          </svg>{" "}
                        </i>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Evnet Card */}
            <div className="ticket--card curd">
              <div className="wholeEventCard__container">
                {/* Repeat Event */}
                <div className="wholeEventCard__container__list">
                  <img src={user} className="wholeEventCard__container__img" />
                  {/* name */}
                  <div className="wholeEventCard__container__detail">
                    <div className="wholeEventCard__container__dates">
                      <p className="wholeEventCard__container__date">
                        Sep 20, 2020
                      </p>
                    </div>
                    <div className="wholeEventCard__container__details">
                      <span className="wholeEventCard__container__name">
                        Auto Expo 2020 iOS 13 & Swift 5 - The Complete iOS App
                        Development Bootcamp Auto Expo 2020 iOS 13 & Swift 5 -
                        The Complete iOS App Development Bootcamp
                      </span>
                    </div>
                    <div className="wholeEventCard__container__role">
                      <p className="wholeEventCard__container__role__reputation">
                        best manager
                      </p>
                    </div>
                  </div>

                  {/* rating */}
                  <div className="wholeEventCard__container__detail">
                    <div className="wholeEventCard__container__box">
                      <span className="wholeEventCard__container__rating u-margin-right-sub-small">
                        4.7
                      </span>
                      <i data-spec="icon" aria-hidden="true">
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                    </div>
                  </div>
                  {/* participants */}
                  <div className="wholeEventCard__container__detail story__visibility">
                    <div className="wholeEventCard__container__participants">
                      <i data-spec="icon" aria-hidden="true">
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M16 10c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3c-1.66 0-3 1.34-3 3s1.34 3 3 3zM8 10c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3c-1.66 0-3 1.34-3 3s1.34 3 3 3zM8 12c-2.33 0-7 1.17-7 3.5v4.5h14v-4.5c0-2.33-4.67-3.5-7-3.5zM16 12c-0.29 0-0.62 0.020-0.97 0.050 1.16 0.84 1.97 1.97 1.97 3.45v4.5h6v-4.5c0-2.33-4.67-3.5-7-3.5z"></path>
                        </svg>
                      </i>
                      <span className="wholeEventCard__container__participants--num u-margin-left-sub-small">
                        498,209
                      </span>
                    </div>
                  </div>
                  {/* heart/add to cart */}
                  <div className="wholeEventCard__container__heart story__visibility">
                    <button
                      aria-label="thumbs up"
                      class="btn-circle"
                      data-uia="thumbsUp-button"
                      type="button"
                    >
                      <div class="" role="presentation">
                        <i data-spec="icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24">
                            <path
                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                              fill="currentColor"
                            ></path>
                          </svg>{" "}
                        </i>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Manager Profile */}
            <div className="ticket--card curd">
              <div className="manager">
                <h3 className="heading-3 heading-3--dark-2">Manager</h3>
                <div>
                  <p className="para para--size-20 manager__title">
                    Dr. Angela Yu
                  </p>
                  <p className="para para--size-18 para--dark-2">
                    Developer and Lead Instructor
                  </p>
                </div>

                {/* Repeat Guid */}
                <div className="manager__list">
                  <img src={user} className="manager__img"></img>
                  {/* repeat details */}
                  <div className="manager__details">
                    <div className="manager__details">
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <span className="manager__name u-margin-left-sub-small">
                        4.7
                      </span>
                      <span className="manager__name">Manager</span>
                      <span className="manager__name">Rating(s)</span>
                    </div>
                    <div className="manager__details">
                      <i data-spec="icon" aria-hidden="true">
                        <svg id="icon-certificate" viewBox="0 0 24 24">
                          <path d="M20.39 19.37l-4.010-1.37-1.38 4-3.080-6-2.92 6-1.38-4-4.010 1.37 2.92-6c-0.96-1.2-1.53-2.72-1.53-4.37 0-1.857 0.737-3.637 2.050-4.95s3.093-2.050 4.95-2.050c1.857 0 3.637 0.738 4.95 2.050s2.050 3.093 2.050 4.95c0 1.65-0.57 3.17-1.53 4.37l2.92 6zM7 9l2.69 1.34-0.19 3 2.5-1.66 2.5 1.65-0.17-2.99 2.67-1.34-2.68-1.35 0.18-2.98-2.5 1.64-2.5-1.66 0.17 3.010-2.67 1.34z"></path>
                        </svg>
                      </i>
                      <span className="manager__name u-margin-left-sub-small">
                        190,438
                      </span>
                      <span className="manager__name">Reviews</span>
                    </div>
                    <div className="manager__details">
                      <i data-spec="icon" aria-hidden="true">
                        <svg id="icon-people" viewBox="0 0 24 24">
                          <path d="M16 10c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3c-1.66 0-3 1.34-3 3s1.34 3 3 3zM8 10c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3c-1.66 0-3 1.34-3 3s1.34 3 3 3zM8 12c-2.33 0-7 1.17-7 3.5v4.5h14v-4.5c0-2.33-4.67-3.5-7-3.5zM16 12c-0.29 0-0.62 0.020-0.97 0.050 1.16 0.84 1.97 1.97 1.97 3.45v4.5h6v-4.5c0-2.33-4.67-3.5-7-3.5z"></path>
                        </svg>
                      </i>
                      <span className="manager__name u-margin-left-sub-small">
                        498,200
                      </span>
                      <span className="manager__name">participants</span>
                    </div>
                    <div className="manager__details">
                      <i data-spec="icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M10 13v-2h4v2zm6 5V6h-.4C15 7.4 13.8 8.4 12 8.4S9 7.4 8.4 6H8v12h.4c.6-1.4 1.8-2.4 3.6-2.4s3 1 3.6 2.4zM14 4h4v16h-4s0-2.4-2-2.4-2 2.4-2 2.4H6V4h4s0 2.4 2 2.4S14 4 14 4z"></path>
                        </svg>{" "}
                      </i>
                      <span className="manager__name u-margin-left-sub-small">
                        10
                      </span>
                      <span className="manager__name">Event(s)</span>
                    </div>
                  </div>
                </div>
                <p className="para para--size-15 para--dark-2">
                  I'm Angela, I'm a developer with a passion for teaching. I'm
                  the lead instructor at the London App Brewery, London's
                  leading Programming Bootcamp. I've helped hundreds of
                  thousands of students learn to code and change their lives by
                  becoming a developer. I've been invited by companies such as
                  Twitter, Facebook and Google to teach their employees. My
                  first foray into programming was when I was just 12 years old,
                  wanting to build my own Space Invader game. Since then, I've
                  made hundred of websites, apps and games. But most
                  importantly, I realised that my greatest passion is teaching.
                  I spend most of my time researching how to make learning to
                  code fun and make hard concepts easy to understand. I apply
                  everything I discover into my bootcamp courses. In my courses,
                  you'll find lots of geeky humour but also lots of explanations
                  and animations to make sure everything is easy to understand.
                  I'll be there for you every step of the way.
                </p>
              </div>
              <div className="manager__rating--box">
                <h4 className="heading-4 heading-4--dark-2 text-cap u-margin-top-medium">
                  participants feedback
                </h4>
                <div className="">
                  <div className="">
                    <p className="manager__rating--box-number">4.8</p>
                    <div className="manager__rating--box-star">
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                    </div>
                    <p className="manager__rating--box-rating">Event Ratings</p>
                  </div>
                  <div className=" ">
                    <span className="eview-summary-widget--rate-gauge">
                      <span className="eview-summary-widget--rate-gauge--bg">
                        <span className="eview-summary-widget--rate-gauge--fill"></span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="comment u-margin-top-medium">
                <h4 className="heading-4 heading-4--dark-2 text-cap">
                  Reviews
                </h4>

                {/* Repeat Feedback */}
                <div className="comment__list">
                  <div style={{ position: "relative" }}>
                    <img src={user} className="comment__img" />

                    <svg class="half-circle1" viewBox="0 0 106 57">
                      <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                  </div>
                  <div className="comment__details">
                    <p className="comment__name para para--dark-2 para--size-18 text-cap weight-600">
                      Erik feinman
                    </p>
                    <div className="comment__star">
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                    </div>
                    <p className="comment__paragraph para para--dark-2 text-lower">
                      The course was very good. The instructor invested a lot of
                      time in explaining things which I liked the most about
                      this course.
                    </p>
                    <p className="comment__helpful para para--dark-2 para--size-11 text-cap u-margin-top-sub-small">
                      Was this review helpful?
                    </p>
                    <div className="comment__feedback">
                      <button
                        aria-label="thumbs up"
                        class="btn-circle"
                        data-uia="thumbsUp-button"
                        type="button"
                      >
                        <div class="" role="presentation">
                          <i data-spec="icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                              <path
                                d="M15.167 8.994h3.394l.068.023c1.56.138 2.867.987 2.867 2.73 0 .275-.046.527-.092.78.367.435.596.986.596 1.72 0 .963-.39 1.52-1.032 1.978.023.183.023.252.023.39 0 .963-.39 1.784-1.009 2.243.023.206.023.275.023.39 0 1.743-1.33 2.591-2.89 2.73L12.21 22c-2.04 0-3.05-.252-4.563-.895-.917-.39-1.353-.527-2.27-.619L4 20.371v-8.234l2.476-1.445 2.27-4.427c0-.046.085-1.552.253-4.52l.871-.389c.092-.069.275-.138.505-.184.664-.206 1.398-.252 2.132 0 1.261.436 2.064 1.537 2.408 3.258.142.829.226 1.695.26 2.564l-.008 2zm-4.42-2.246l-2.758 5.376L6 13.285v5.26c.845.113 1.44.3 2.427.72 1.37.58 2.12.735 3.773.735l4.816-.023c.742-.078.895-.3 1.015-.542.201-.4.201-.876 0-1.425.558-.184.917-.479 1.078-.883.182-.457.182-.966 0-1.528.601-.228.901-.64.901-1.238s-.202-1.038-.608-1.32c.23-.46.26-.892.094-1.294-.168-.404-.298-.627-1.043-.738l-.172-.015h-5.207l.095-2.09c.066-1.448-.009-2.875-.216-4.082-.216-1.084-.582-1.58-1.096-1.758-.259-.09-.546-.086-.876.014-.003.06-.081 1.283-.235 3.67z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </i>
                        </div>
                      </button>

                      <button
                        aria-label="thumbs up"
                        class="btn-circle"
                        data-uia="thumbsUp-button"
                        type="button"
                      >
                        <div class="" role="presentation">
                          <i data-spec="icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                              <path
                                d="M8.833 15.006H5.44l-.068-.023c-1.56-.138-2.867-.987-2.867-2.73 0-.275.046-.527.092-.78C2.23 11.038 2 10.487 2 9.753c0-.963.39-1.52 1.032-1.978-.023-.183-.023-.252-.023-.39 0-.963.39-1.784 1.009-2.243-.023-.206-.023-.275-.023-.39 0-1.743 1.33-2.591 2.89-2.73L11.79 2c2.04 0 3.05.252 4.563.895.917.39 1.353.527 2.27.619L20 3.629v8.234l-2.476 1.445-2.27 4.427c0 .046-.085 1.552-.253 4.52l-.871.389c-.092.069-.275.138-.505.184-.664.206-1.398.252-2.132 0-1.261-.436-2.064-1.537-2.408-3.258a19.743 19.743 0 0 1-.26-2.564l.008-2zm4.42 2.246l2.758-5.376L18 10.715v-5.26c-.845-.113-1.44-.3-2.427-.72C14.203 4.156 13.453 4 11.8 4l-4.816.023c-.742.078-.895.3-1.015.542-.201.4-.201.876 0 1.425-.558.184-.917.479-1.078.883-.182.457-.182.966 0 1.528-.601.228-.901.64-.901 1.238s.202 1.038.608 1.32c-.23.46-.26.892-.094 1.294.168.404.298.627 1.043.738l.172.015h5.207l-.095 2.09c-.066 1.448.009 2.875.216 4.082.216 1.084.582 1.58 1.096 1.758.259.09.546.086.876-.014.003-.06.081-1.283.235-3.67z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </i>
                        </div>
                      </button>

                      <span>Report</span>
                    </div>
                  </div>
                </div>

                {/* Repeat Feedback */}
                <div className="comment__list">
                  <div style={{ position: "relative" }}>
                    <img src={user} className="comment__img" />

                    <svg class="half-circle1" viewBox="0 0 106 57">
                      <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                  </div>
                  <div className="comment__details">
                    <p className="comment__name para para--dark-2 para--size-18 text-cap weight-600">
                      Erik feinman
                    </p>
                    <div className="comment__star">
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                    </div>
                    <p className="comment__paragraph para para--dark-2 text-lower">
                      The course was very good. The instructor invested a lot of
                      time in explaining things which I liked the most about
                      this course.
                    </p>
                    <p className="comment__helpful para para--dark-2 para--size-11 text-cap u-margin-top-sub-small">
                      Was this review helpful?
                    </p>
                    <div className="comment__feedback">
                      <button
                        aria-label="thumbs up"
                        class="btn-circle"
                        data-uia="thumbsUp-button"
                        type="button"
                      >
                        <div class="" role="presentation">
                          <i data-spec="icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                              <path
                                d="M15.167 8.994h3.394l.068.023c1.56.138 2.867.987 2.867 2.73 0 .275-.046.527-.092.78.367.435.596.986.596 1.72 0 .963-.39 1.52-1.032 1.978.023.183.023.252.023.39 0 .963-.39 1.784-1.009 2.243.023.206.023.275.023.39 0 1.743-1.33 2.591-2.89 2.73L12.21 22c-2.04 0-3.05-.252-4.563-.895-.917-.39-1.353-.527-2.27-.619L4 20.371v-8.234l2.476-1.445 2.27-4.427c0-.046.085-1.552.253-4.52l.871-.389c.092-.069.275-.138.505-.184.664-.206 1.398-.252 2.132 0 1.261.436 2.064 1.537 2.408 3.258.142.829.226 1.695.26 2.564l-.008 2zm-4.42-2.246l-2.758 5.376L6 13.285v5.26c.845.113 1.44.3 2.427.72 1.37.58 2.12.735 3.773.735l4.816-.023c.742-.078.895-.3 1.015-.542.201-.4.201-.876 0-1.425.558-.184.917-.479 1.078-.883.182-.457.182-.966 0-1.528.601-.228.901-.64.901-1.238s-.202-1.038-.608-1.32c.23-.46.26-.892.094-1.294-.168-.404-.298-.627-1.043-.738l-.172-.015h-5.207l.095-2.09c.066-1.448-.009-2.875-.216-4.082-.216-1.084-.582-1.58-1.096-1.758-.259-.09-.546-.086-.876.014-.003.06-.081 1.283-.235 3.67z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </i>
                        </div>
                      </button>

                      <button
                        aria-label="thumbs up"
                        class="btn-circle"
                        data-uia="thumbsUp-button"
                        type="button"
                      >
                        <div class="" role="presentation">
                          <i data-spec="icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                              <path
                                d="M8.833 15.006H5.44l-.068-.023c-1.56-.138-2.867-.987-2.867-2.73 0-.275.046-.527.092-.78C2.23 11.038 2 10.487 2 9.753c0-.963.39-1.52 1.032-1.978-.023-.183-.023-.252-.023-.39 0-.963.39-1.784 1.009-2.243-.023-.206-.023-.275-.023-.39 0-1.743 1.33-2.591 2.89-2.73L11.79 2c2.04 0 3.05.252 4.563.895.917.39 1.353.527 2.27.619L20 3.629v8.234l-2.476 1.445-2.27 4.427c0 .046-.085 1.552-.253 4.52l-.871.389c-.092.069-.275.138-.505.184-.664.206-1.398.252-2.132 0-1.261-.436-2.064-1.537-2.408-3.258a19.743 19.743 0 0 1-.26-2.564l.008-2zm4.42 2.246l2.758-5.376L18 10.715v-5.26c-.845-.113-1.44-.3-2.427-.72C14.203 4.156 13.453 4 11.8 4l-4.816.023c-.742.078-.895.3-1.015.542-.201.4-.201.876 0 1.425-.558.184-.917.479-1.078.883-.182.457-.182.966 0 1.528-.601.228-.901.64-.901 1.238s.202 1.038.608 1.32c-.23.46-.26.892-.094 1.294.168.404.298.627 1.043.738l.172.015h5.207l-.095 2.09c-.066 1.448.009 2.875.216 4.082.216 1.084.582 1.58 1.096 1.758.259.09.546.086.876-.014.003-.06.081-1.283.235-3.67z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </i>
                        </div>
                      </button>

                      <span>Report</span>
                    </div>
                  </div>
                </div>

                {/* Repeat Feedback */}
                <div className="comment__list">
                  <div style={{ position: "relative" }}>
                    <img src={user} className="comment__img" />

                    <svg class="half-circle1" viewBox="0 0 106 57">
                      <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                  </div>
                  <div className="comment__details">
                    <p className="comment__name para para--dark-2 para--size-18 text-cap weight-600">
                      Erik feinman
                    </p>
                    <div className="comment__star">
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                    </div>
                    <p className="comment__paragraph para para--dark-2 text-lower">
                      The course was very good. The instructor invested a lot of
                      time in explaining things which I liked the most about
                      this course.
                    </p>
                    <p className="comment__helpful para para--dark-2 para--size-11 text-cap u-margin-top-sub-small">
                      Was this review helpful?
                    </p>
                    <div className="comment__feedback">
                      <button
                        aria-label="thumbs up"
                        class="btn-circle"
                        data-uia="thumbsUp-button"
                        type="button"
                      >
                        <div class="" role="presentation">
                          <i data-spec="icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                              <path
                                d="M15.167 8.994h3.394l.068.023c1.56.138 2.867.987 2.867 2.73 0 .275-.046.527-.092.78.367.435.596.986.596 1.72 0 .963-.39 1.52-1.032 1.978.023.183.023.252.023.39 0 .963-.39 1.784-1.009 2.243.023.206.023.275.023.39 0 1.743-1.33 2.591-2.89 2.73L12.21 22c-2.04 0-3.05-.252-4.563-.895-.917-.39-1.353-.527-2.27-.619L4 20.371v-8.234l2.476-1.445 2.27-4.427c0-.046.085-1.552.253-4.52l.871-.389c.092-.069.275-.138.505-.184.664-.206 1.398-.252 2.132 0 1.261.436 2.064 1.537 2.408 3.258.142.829.226 1.695.26 2.564l-.008 2zm-4.42-2.246l-2.758 5.376L6 13.285v5.26c.845.113 1.44.3 2.427.72 1.37.58 2.12.735 3.773.735l4.816-.023c.742-.078.895-.3 1.015-.542.201-.4.201-.876 0-1.425.558-.184.917-.479 1.078-.883.182-.457.182-.966 0-1.528.601-.228.901-.64.901-1.238s-.202-1.038-.608-1.32c.23-.46.26-.892.094-1.294-.168-.404-.298-.627-1.043-.738l-.172-.015h-5.207l.095-2.09c.066-1.448-.009-2.875-.216-4.082-.216-1.084-.582-1.58-1.096-1.758-.259-.09-.546-.086-.876.014-.003.06-.081 1.283-.235 3.67z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </i>
                        </div>
                      </button>

                      <button
                        aria-label="thumbs up"
                        class="btn-circle"
                        data-uia="thumbsUp-button"
                        type="button"
                      >
                        <div class="" role="presentation">
                          <i data-spec="icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                              <path
                                d="M8.833 15.006H5.44l-.068-.023c-1.56-.138-2.867-.987-2.867-2.73 0-.275.046-.527.092-.78C2.23 11.038 2 10.487 2 9.753c0-.963.39-1.52 1.032-1.978-.023-.183-.023-.252-.023-.39 0-.963.39-1.784 1.009-2.243-.023-.206-.023-.275-.023-.39 0-1.743 1.33-2.591 2.89-2.73L11.79 2c2.04 0 3.05.252 4.563.895.917.39 1.353.527 2.27.619L20 3.629v8.234l-2.476 1.445-2.27 4.427c0 .046-.085 1.552-.253 4.52l-.871.389c-.092.069-.275.138-.505.184-.664.206-1.398.252-2.132 0-1.261-.436-2.064-1.537-2.408-3.258a19.743 19.743 0 0 1-.26-2.564l.008-2zm4.42 2.246l2.758-5.376L18 10.715v-5.26c-.845-.113-1.44-.3-2.427-.72C14.203 4.156 13.453 4 11.8 4l-4.816.023c-.742.078-.895.3-1.015.542-.201.4-.201.876 0 1.425-.558.184-.917.479-1.078.883-.182.457-.182.966 0 1.528-.601.228-.901.64-.901 1.238s.202 1.038.608 1.32c-.23.46-.26.892-.094 1.294.168.404.298.627 1.043.738l.172.015h5.207l-.095 2.09c-.066 1.448.009 2.875.216 4.082.216 1.084.582 1.58 1.096 1.758.259.09.546.086.876-.014.003-.06.081-1.283.235-3.67z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </i>
                        </div>
                      </button>

                      <span>Report</span>
                    </div>
                  </div>
                </div>

                {/* Repeat Feedback */}
                <div className="comment__list">
                  <div style={{ position: "relative" }}>
                    <img src={user} className="comment__img" />

                    <svg class="half-circle1" viewBox="0 0 106 57">
                      <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                  </div>
                  <div className="comment__details">
                    <p className="comment__name para para--dark-2 para--size-18 text-cap weight-600">
                      Erik feinman
                    </p>
                    <div className="comment__star">
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                    </div>
                    <p className="comment__paragraph para para--dark-2 text-lower">
                      The course was very good. The instructor invested a lot of
                      time in explaining things which I liked the most about
                      this course.
                    </p>
                    <p className="comment__helpful para para--dark-2 para--size-11 text-cap u-margin-top-sub-small">
                      Was this review helpful?
                    </p>
                    <div className="comment__feedback">
                      <button
                        aria-label="thumbs up"
                        class="btn-circle"
                        data-uia="thumbsUp-button"
                        type="button"
                      >
                        <div class="" role="presentation">
                          <i data-spec="icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                              <path
                                d="M15.167 8.994h3.394l.068.023c1.56.138 2.867.987 2.867 2.73 0 .275-.046.527-.092.78.367.435.596.986.596 1.72 0 .963-.39 1.52-1.032 1.978.023.183.023.252.023.39 0 .963-.39 1.784-1.009 2.243.023.206.023.275.023.39 0 1.743-1.33 2.591-2.89 2.73L12.21 22c-2.04 0-3.05-.252-4.563-.895-.917-.39-1.353-.527-2.27-.619L4 20.371v-8.234l2.476-1.445 2.27-4.427c0-.046.085-1.552.253-4.52l.871-.389c.092-.069.275-.138.505-.184.664-.206 1.398-.252 2.132 0 1.261.436 2.064 1.537 2.408 3.258.142.829.226 1.695.26 2.564l-.008 2zm-4.42-2.246l-2.758 5.376L6 13.285v5.26c.845.113 1.44.3 2.427.72 1.37.58 2.12.735 3.773.735l4.816-.023c.742-.078.895-.3 1.015-.542.201-.4.201-.876 0-1.425.558-.184.917-.479 1.078-.883.182-.457.182-.966 0-1.528.601-.228.901-.64.901-1.238s-.202-1.038-.608-1.32c.23-.46.26-.892.094-1.294-.168-.404-.298-.627-1.043-.738l-.172-.015h-5.207l.095-2.09c.066-1.448-.009-2.875-.216-4.082-.216-1.084-.582-1.58-1.096-1.758-.259-.09-.546-.086-.876.014-.003.06-.081 1.283-.235 3.67z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </i>
                        </div>
                      </button>

                      <button
                        aria-label="thumbs up"
                        class="btn-circle"
                        data-uia="thumbsUp-button"
                        type="button"
                      >
                        <div class="" role="presentation">
                          <i data-spec="icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                              <path
                                d="M8.833 15.006H5.44l-.068-.023c-1.56-.138-2.867-.987-2.867-2.73 0-.275.046-.527.092-.78C2.23 11.038 2 10.487 2 9.753c0-.963.39-1.52 1.032-1.978-.023-.183-.023-.252-.023-.39 0-.963.39-1.784 1.009-2.243-.023-.206-.023-.275-.023-.39 0-1.743 1.33-2.591 2.89-2.73L11.79 2c2.04 0 3.05.252 4.563.895.917.39 1.353.527 2.27.619L20 3.629v8.234l-2.476 1.445-2.27 4.427c0 .046-.085 1.552-.253 4.52l-.871.389c-.092.069-.275.138-.505.184-.664.206-1.398.252-2.132 0-1.261-.436-2.064-1.537-2.408-3.258a19.743 19.743 0 0 1-.26-2.564l.008-2zm4.42 2.246l2.758-5.376L18 10.715v-5.26c-.845-.113-1.44-.3-2.427-.72C14.203 4.156 13.453 4 11.8 4l-4.816.023c-.742.078-.895.3-1.015.542-.201.4-.201.876 0 1.425-.558.184-.917.479-1.078.883-.182.457-.182.966 0 1.528-.601.228-.901.64-.901 1.238s.202 1.038.608 1.32c-.23.46-.26.892-.094 1.294.168.404.298.627 1.043.738l.172.015h5.207l-.095 2.09c-.066 1.448.009 2.875.216 4.082.216 1.084.582 1.58 1.096 1.758.259.09.546.086.876-.014.003-.06.081-1.283.235-3.67z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </i>
                        </div>
                      </button>

                      <span>Report</span>
                    </div>
                  </div>
                </div>

                {/* Repeat Feedback */}
                <div className="comment__list">
                  <div style={{ position: "relative" }}>
                    <img src={user} className="comment__img" />

                    <svg class="half-circle1" viewBox="0 0 106 57">
                      <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                  </div>
                  <div className="comment__details">
                    <p className="comment__name para para--dark-2 para--size-18 text-cap weight-600">
                      Erik feinman
                    </p>
                    <div className="comment__star">
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                    </div>
                    <p className="comment__paragraph para para--dark-2 text-lower">
                      The course was very good. The instructor invested a lot of
                      time in explaining things which I liked the most about
                      this course.
                    </p>
                    <p className="comment__helpful para para--dark-2 para--size-11 text-cap u-margin-top-sub-small">
                      Was this review helpful?
                    </p>
                    <div className="comment__feedback">
                      <button
                        aria-label="thumbs up"
                        class="btn-circle"
                        data-uia="thumbsUp-button"
                        type="button"
                      >
                        <div class="" role="presentation">
                          <i data-spec="icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                              <path
                                d="M15.167 8.994h3.394l.068.023c1.56.138 2.867.987 2.867 2.73 0 .275-.046.527-.092.78.367.435.596.986.596 1.72 0 .963-.39 1.52-1.032 1.978.023.183.023.252.023.39 0 .963-.39 1.784-1.009 2.243.023.206.023.275.023.39 0 1.743-1.33 2.591-2.89 2.73L12.21 22c-2.04 0-3.05-.252-4.563-.895-.917-.39-1.353-.527-2.27-.619L4 20.371v-8.234l2.476-1.445 2.27-4.427c0-.046.085-1.552.253-4.52l.871-.389c.092-.069.275-.138.505-.184.664-.206 1.398-.252 2.132 0 1.261.436 2.064 1.537 2.408 3.258.142.829.226 1.695.26 2.564l-.008 2zm-4.42-2.246l-2.758 5.376L6 13.285v5.26c.845.113 1.44.3 2.427.72 1.37.58 2.12.735 3.773.735l4.816-.023c.742-.078.895-.3 1.015-.542.201-.4.201-.876 0-1.425.558-.184.917-.479 1.078-.883.182-.457.182-.966 0-1.528.601-.228.901-.64.901-1.238s-.202-1.038-.608-1.32c.23-.46.26-.892.094-1.294-.168-.404-.298-.627-1.043-.738l-.172-.015h-5.207l.095-2.09c.066-1.448-.009-2.875-.216-4.082-.216-1.084-.582-1.58-1.096-1.758-.259-.09-.546-.086-.876.014-.003.06-.081 1.283-.235 3.67z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </i>
                        </div>
                      </button>

                      <button
                        aria-label="thumbs up"
                        class="btn-circle"
                        data-uia="thumbsUp-button"
                        type="button"
                      >
                        <div class="" role="presentation">
                          <i data-spec="icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                              <path
                                d="M8.833 15.006H5.44l-.068-.023c-1.56-.138-2.867-.987-2.867-2.73 0-.275.046-.527.092-.78C2.23 11.038 2 10.487 2 9.753c0-.963.39-1.52 1.032-1.978-.023-.183-.023-.252-.023-.39 0-.963.39-1.784 1.009-2.243-.023-.206-.023-.275-.023-.39 0-1.743 1.33-2.591 2.89-2.73L11.79 2c2.04 0 3.05.252 4.563.895.917.39 1.353.527 2.27.619L20 3.629v8.234l-2.476 1.445-2.27 4.427c0 .046-.085 1.552-.253 4.52l-.871.389c-.092.069-.275.138-.505.184-.664.206-1.398.252-2.132 0-1.261-.436-2.064-1.537-2.408-3.258a19.743 19.743 0 0 1-.26-2.564l.008-2zm4.42 2.246l2.758-5.376L18 10.715v-5.26c-.845-.113-1.44-.3-2.427-.72C14.203 4.156 13.453 4 11.8 4l-4.816.023c-.742.078-.895.3-1.015.542-.201.4-.201.876 0 1.425-.558.184-.917.479-1.078.883-.182.457-.182.966 0 1.528-.601.228-.901.64-.901 1.238s.202 1.038.608 1.32c-.23.46-.26.892-.094 1.294.168.404.298.627 1.043.738l.172.015h5.207l-.095 2.09c-.066 1.448.009 2.875.216 4.082.216 1.084.582 1.58 1.096 1.758.259.09.546.086.876-.014.003-.06.081-1.283.235-3.67z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </i>
                        </div>
                      </button>

                      <span>Report</span>
                    </div>
                  </div>
                </div>

                {/* Repeat Feedback */}
                <div className="comment__list">
                  <div style={{ position: "relative" }}>
                    <img src={user} className="comment__img" />

                    <svg class="half-circle1" viewBox="0 0 106 57">
                      <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                  </div>
                  <div className="comment__details">
                    <p className="comment__name para para--dark-2 para--size-18 text-cap weight-600">
                      Erik feinman
                    </p>
                    <div className="comment__star">
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                      <i data-spec="icon" aria-hidden="true">
                        {/* star */}
                        <svg id="icon-rating-star" viewBox="0 0 24 24">
                          <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                        </svg>
                      </i>
                    </div>
                    <p className="comment__paragraph para para--dark-2 text-lower">
                      The course was very good. The instructor invested a lot of
                      time in explaining things which I liked the most about
                      this course.
                    </p>
                    <p className="comment__helpful para para--dark-2 para--size-11 text-cap u-margin-top-sub-small">
                      Was this review helpful?
                    </p>
                    <div className="comment__feedback">
                      <button
                        aria-label="thumbs up"
                        class="btn-circle"
                        data-uia="thumbsUp-button"
                        type="button"
                      >
                        <div class="" role="presentation">
                          <i data-spec="icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                              <path
                                d="M15.167 8.994h3.394l.068.023c1.56.138 2.867.987 2.867 2.73 0 .275-.046.527-.092.78.367.435.596.986.596 1.72 0 .963-.39 1.52-1.032 1.978.023.183.023.252.023.39 0 .963-.39 1.784-1.009 2.243.023.206.023.275.023.39 0 1.743-1.33 2.591-2.89 2.73L12.21 22c-2.04 0-3.05-.252-4.563-.895-.917-.39-1.353-.527-2.27-.619L4 20.371v-8.234l2.476-1.445 2.27-4.427c0-.046.085-1.552.253-4.52l.871-.389c.092-.069.275-.138.505-.184.664-.206 1.398-.252 2.132 0 1.261.436 2.064 1.537 2.408 3.258.142.829.226 1.695.26 2.564l-.008 2zm-4.42-2.246l-2.758 5.376L6 13.285v5.26c.845.113 1.44.3 2.427.72 1.37.58 2.12.735 3.773.735l4.816-.023c.742-.078.895-.3 1.015-.542.201-.4.201-.876 0-1.425.558-.184.917-.479 1.078-.883.182-.457.182-.966 0-1.528.601-.228.901-.64.901-1.238s-.202-1.038-.608-1.32c.23-.46.26-.892.094-1.294-.168-.404-.298-.627-1.043-.738l-.172-.015h-5.207l.095-2.09c.066-1.448-.009-2.875-.216-4.082-.216-1.084-.582-1.58-1.096-1.758-.259-.09-.546-.086-.876.014-.003.06-.081 1.283-.235 3.67z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </i>
                        </div>
                      </button>

                      <button
                        aria-label="thumbs up"
                        class="btn-circle"
                        data-uia="thumbsUp-button"
                        type="button"
                      >
                        <div class="" role="presentation">
                          <i data-spec="icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                              <path
                                d="M8.833 15.006H5.44l-.068-.023c-1.56-.138-2.867-.987-2.867-2.73 0-.275.046-.527.092-.78C2.23 11.038 2 10.487 2 9.753c0-.963.39-1.52 1.032-1.978-.023-.183-.023-.252-.023-.39 0-.963.39-1.784 1.009-2.243-.023-.206-.023-.275-.023-.39 0-1.743 1.33-2.591 2.89-2.73L11.79 2c2.04 0 3.05.252 4.563.895.917.39 1.353.527 2.27.619L20 3.629v8.234l-2.476 1.445-2.27 4.427c0 .046-.085 1.552-.253 4.52l-.871.389c-.092.069-.275.138-.505.184-.664.206-1.398.252-2.132 0-1.261-.436-2.064-1.537-2.408-3.258a19.743 19.743 0 0 1-.26-2.564l.008-2zm4.42 2.246l2.758-5.376L18 10.715v-5.26c-.845-.113-1.44-.3-2.427-.72C14.203 4.156 13.453 4 11.8 4l-4.816.023c-.742.078-.895.3-1.015.542-.201.4-.201.876 0 1.425-.558.184-.917.479-1.078.883-.182.457-.182.966 0 1.528-.601.228-.901.64-.901 1.238s.202 1.038.608 1.32c-.23.46-.26.892-.094 1.294.168.404.298.627 1.043.738l.172.015h5.207l-.095 2.09c-.066 1.448.009 2.875.216 4.082.216 1.084.582 1.58 1.096 1.758.259.09.546.086.876-.014.003-.06.081-1.283.235-3.67z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </i>
                        </div>
                      </button>

                      <span>Report</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section class="card-list">
            <article class="card">
              <header class="card-header">
                <p>Sep 11th 2020</p>
                <h2>Never forget</h2>
              </header>

              <div class="card-author">
                <a class="author-avatar" href="#">
                  <img src="avatar.png" />
                </a>
                <svg class="half-circle" viewBox="0 0 106 57">
                  <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div class="author-name">
                  <div class="author-name-prefix">Author</div>
                  Jeff Delaney
                </div>
              </div>
              <div class="tags">
                <a href="#">html</a>
                <a href="#">css</a>
                <a href="#">web-dev</a>
              </div>
            </article>

            <article class="card">
              <header class="card-header">
                <p>Sep 11th 2020</p>
                <h2>Card Tricks are fun!</h2>
              </header>

              <div class="card-author">
                <a class="author-avatar" href="#">
                  <img src="https://api.adorable.io/avatars/172/a.png" />
                </a>
                <svg class="half-circle" viewBox="0 0 106 57">
                  <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div class="author-name">
                  <div class="author-name-prefix">Pirate</div>
                  Zheng Zhilong
                </div>
              </div>
              <div class="tags">
                <a href="#">html</a>
                <a href="#">css</a>
              </div>
            </article>

            <article class="card">
              <header class="card-header">
                <p>Sep 11th 2020</p>
                <h2>Card Tricks are fun!</h2>
              </header>

              <div class="card-author">
                <a class="author-avatar" href="#">
                  <img src="https://api.adorable.io/avatars/172/b.png" />
                </a>
                <svg class="half-circle" viewBox="0 0 106 57">
                  <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div class="author-name">
                  <div class="author-name-prefix">Pirate</div>
                  Francis Drake
                </div>
              </div>
              <div class="tags">
                <a href="#">html</a>
                <a href="#">css</a>
              </div>
            </article>

            <article class="card">
              <header class="card-header">
                <p>Sep 11th 2020</p>
                <h2>Card Tricks are fun!</h2>
              </header>

              <div class="card-author">
                <a class="author-avatar" href="#">
                  <img src="https://api.adorable.io/avatars/172/c.png" />
                </a>
                <svg class="half-circle" viewBox="0 0 106 57">
                  <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div class="author-name">
                  <div class="author-name-prefix">Pirate</div>
                  Edward Teach
                </div>
              </div>
              <div class="tags">
                <a href="#">html</a>
                <a href="#">css</a>
              </div>
            </article>

            <article class="card">
              <header class="card-header">
                <p>Sep 11th 2020</p>
                <h2>Card Tricks are fun!</h2>
              </header>

              <div class="card-author">
                <a class="author-avatar" href="#">
                  <img src="https://api.adorable.io/avatars/172/d.png" />
                </a>
                <svg class="half-circle" viewBox="0 0 106 57">
                  <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div class="author-name">
                  <div class="author-name-prefix">Pirate</div>
                  William Kidd
                </div>
              </div>
              <div class="tags">
                <a href="#">html</a>
                <a href="#">css</a>
              </div>
            </article>

            <article class="card">
              <header class="card-header">
                <p>Sep 11th 2020</p>
                <h2>Card Tricks are fun!</h2>
              </header>

              <div class="card-author">
                <a class="author-avatar" href="#">
                  <img src="https://api.adorable.io/avatars/172/d.png" />
                </a>
                <svg class="half-circle" viewBox="0 0 106 57">
                  <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div class="author-name">
                  <div class="author-name-prefix">Pirate</div>
                  William Kidd
                </div>
              </div>
              <div class="tags">
                <a href="#">html</a>
                <a href="#">css</a>
              </div>
            </article>

            <article class="card">
              <header class="card-header">
                <p>Sep 11th 2020</p>
                <h2>Card Tricks are fun!</h2>
              </header>

              <div class="card-author">
                <a class="author-avatar" href="#">
                  <img src="https://api.adorable.io/avatars/172/d.png" />
                </a>
                <svg class="half-circle" viewBox="0 0 106 57">
                  <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div class="author-name">
                  <div class="author-name-prefix">Pirate</div>
                  William Kidd
                </div>
              </div>
              <div class="tags">
                <a href="#">html</a>
                <a href="#">css</a>
              </div>
            </article>
          </section>
        </div>
      </div>

      <div className="ticketsDetail--story curd">
        {/* first box */}
        {/* Repeate */}
        <div className="ticketsDetail--story--para story__visibility ticket--card u-margin-bottom-small text-cap para--dark">
          <div className="detail--card">
            <div className="date float-left">
              <p className="para para--size-10">start</p>
              <p className="weight-700 ticket--card--date">Sep 29, 2020</p>
              <p className="para para--size-10">end Sep 30, 2020</p>
            </div>
            <p className="para para--dark-2 para--size-12 u-margin-top-medium">
              Online
            </p>
            <h3 className="heading-3 line-height-1_2">
              Auto Expo 2020 iOS 13 & Swift 5 - The Complete iOS App Development
              Bootcamp
            </h3>
            <div className="para--size-14 text-upper">
              <span className="rating-star">
                <i data-spec="icon" aria-hidden="true">
                  {/* star */}
                  <svg
                    id="icon-rating-star"
                    viewBox="0 0 24 24"
                    height="12px"
                    width="12px"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                  </svg>
                </i>
                <i data-spec="icon" aria-hidden="true">
                  {/* star */}
                  <svg
                    id="icon-rating-star"
                    viewBox="0 0 24 24"
                    height="12px"
                    width="12px"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                  </svg>
                </i>
                <i data-spec="icon" aria-hidden="true">
                  {/* star */}
                  <svg
                    id="icon-rating-star"
                    viewBox="0 0 24 24"
                    height="12px"
                    width="12px"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                  </svg>
                </i>
                <i data-spec="icon" aria-hidden="true">
                  {/* star */}
                  <svg
                    id="icon-rating-star"
                    viewBox="0 0 24 24"
                    height="12px"
                    width="12px"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                  </svg>
                </i>
                <i data-spec="icon" aria-hidden="true">
                  {/* star */}
                  <svg
                    id="icon-rating-star"
                    viewBox="0 0 24 24"
                    height="12px"
                    width="12px"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path>
                  </svg>
                </i>
              </span>

              <span className="u-margin-right-sub-small u-margin-left-sub-small">
                ( 4.5 )
              </span>
              <span className="u-margin-right-sub-small">manager rating</span>
              <p className="para para--size-10 line-height-1">
                by london drawing group
              </p>
            </div>
            <div className="icons u-margin-top-medium">
              <div className="addToCart">
                <button
                  aria-label="thumbs up"
                  class="btn-circle"
                  data-uia="thumbsUp-button"
                  type="button"
                >
                  <div class="" role="presentation">
                    <i data-spec="icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.8 6.2C18.1 5.4 17 5 16 5c-1 0-2 .4-2.8 1.2L12 7.4l-1.2-1.2C10 5.4 9 5 8 5c-1 0-2 .4-2.8 1.2-1.5 1.6-1.5 4.2 0 5.8l6.8 7 6.8-7c1.6-1.6 1.6-4.2 0-5.8zm-1.4 4.4L12 16.1l-5.4-5.5c-.8-.8-.8-2.2 0-3C7 7.2 7.5 7 8 7c.5 0 1 .2 1.4.6l2.6 2.7 2.7-2.7c.3-.4.8-.6 1.3-.6s1 .2 1.4.6c.8.8.8 2.2 0 3z"
                        ></path>
                      </svg>{" "}
                    </i>
                  </div>
                </button>
              </div>
              <div className="share">
                <button
                  aria-label="thumbs up"
                  class="btn-circle"
                  data-uia="thumbsUp-button"
                  type="button"
                >
                  <div class="" role="presentation">
                    <i data-spec="icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23.25 10.75l-8.75-8.75v5c-8.75 1.25-12.5 7.5-13.75 13.75 3.125-4.375 7.5-6.375 13.75-6.375v5.125l8.75-8.75z"
                        ></path>
                      </svg>{" "}
                    </i>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* second box */}
        <div className="ticketsDetail--story--para ticket--card u-margin-bottom-small text-cap para--dark">
          <div className="guide">
            <p className="para para--size-15 para--dark-2 text-upper weight-600">
              YOur event Guide(s)
            </p>

            {/* Repeat Guid */}
            <div className="guide__list">
              <img src={user} className="guide__img"></img>
              <div className="guide__details">
                <p className="guide__name para para--dark-2 para--size-15 text-cap weight-600">
                  Erik feinman
                </p>
                <p className="guide__email para para--dark-2 para--size-12 text-lower">
                  Erik.feinman@mapsor.com
                </p>
                <p className="guide__phone para para--dark-2 para--size-12">
                  {" "}
                  (+91) 6396-77-5061
                </p>
              </div>
            </div>
            {/* Repeat Guid */}
            <div className="guide__list">
              <img src={user} className="guide__img"></img>
              <div className="guide__details">
                <p className="guide__name para para--dark-2 para--size-15 text-cap weight-600">
                  Bhavika Raniwala
                </p>
                <p className="guide__phone para para--dark-2 para--size-12">
                  {" "}
                  (+91) 7386-67-5033
                </p>
                <p className="guide__email para para--dark-2 para--size-12 text-lower">
                  bhavika.raniwala@mapsor.com
                </p>
              </div>
            </div>
            {/* Repeat Guid */}
            <div className="guide__list">
              <img src={user} className="guide__img"></img>
              <div className="guide__details">
                <p className="guide__name para para--dark-2 para--size-15 text-cap weight-600">
                  Kim Brown
                </p>
                <p className="guide__phone para para--dark-2 para--size-12">
                  {" "}
                  (+91) 6396-77-5061
                </p>
                <p className="guide__email para para--dark-2 para--size-12 text-lower">
                  Kim.Brown@mapsor.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* third box */}
        <div className="ticketsDetail--story--para ticket--card u-margin-bottom-small text-cap para--dark">
          <span className="edit edit--color para--size-11 text-cap">Edit</span>
          <div className="guide">
            <p className="para para--size-15 para--dark-2 text-upper weight-600">
              event info
            </p>

            {/* Repeat Guid */}
            <div className="guide__list">
              <i data-spec="icon" aria-hidden="true">
                <svg id="icon-video" viewBox="0 0 24 24">
                  <path d="M21 3h-18c-1.11 0-2 0.89-2 2v12c0 1.1 0.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-0.9 1.99-2l0.010-12c0-1.11-0.9-2-2-2zM21 17h-18v-12h18v12zM16 11l-7 4v-8l7 4z"></path>
                </svg>{" "}
              </i>
              <div className="guide__details">
                <p className="guide__info para para--dark-2 para--size-12 text-cap">
                  Digital event
                </p>
                <p className="guide__name para para--dark-2 para--size-15 text-cap weight-600">
                  watch on Zoom
                </p>
              </div>
            </div>
            {/* Repeat Guid */}
            <div className="guide__list">
              <i data-spec="icon" aria-hidden="true">
                <svg id="icon-language" viewBox="0 0 20 20">
                  <path
                    d="M10.1773283,0 L1.86772143,0 C0.86382815,0 0,0.7936211 0,1.75228488 L0,13.6364987 C0,13.9569607 0.092670422,14.2520474 0.267437839,14.494594 C0.497093178,14.8131904 0.870188747,15 1.2702559,15 C1.61666043,15 1.9554235,14.862167 2.24659029,14.6217126 L5.96294799,11.5711325 L5.99667426,11.5615405 C6.00588164,11.5601121 6.01650129,11.5591283 6.02796187,11.5591283 C6.06216951,11.5591283 6.08866678,11.567895 6.09161479,11.5703289 L9.79749574,14.6217976 C10.0908383,14.8638943 10.4130975,15 10.759327,15 C11.474682,15 12,14.4375944 12,13.636564 L12,1.75228488 C12,0.792305113 11.1792626,0 10.1773283,0 Z M1.86772143,1.15384615 L10.1773283,1.15384615 C10.5205188,1.15384615 10.8065211,1.42994064 10.8065211,1.75228488 L10.8065211,13.636564 C10.8065211,13.8251033 10.7868587,13.8461538 10.759327,13.8461538 C10.7253895,13.8461538 10.6649569,13.8206302 10.5718583,13.7437958 L6.86605842,10.692394 C6.63954946,10.5053874 6.33698285,10.4052822 6.02796187,10.4052822 C5.71896121,10.4052822 5.41604247,10.5053096 5.1891611,10.6926579 L1.47278276,13.743255 C1.3839102,13.8166453 1.3113847,13.8461538 1.2702559,13.8461538 C1.25909375,13.8461538 1.25225936,13.8427319 1.2466618,13.8349665 C1.21371395,13.7892406 1.19347894,13.7248071 1.19347894,13.6364987 L1.19347894,1.75228488 C1.19347894,1.44440392 1.50974066,1.15384615 1.86772143,1.15384615 Z"
                    id="Path"
                  ></path>
                </svg>
              </i>
              <div className="guide__details">
                <p className="guide__info para para--dark-2 para--size-12 text-cap">
                  for age(s){" "}
                </p>
                <p className="guide__name para para--dark-2 para--size-15 text-cap weight-600">
                  family friendly
                </p>
              </div>
            </div>
            {/* Repeat Guid */}
            <div className="guide__list">
              <i data-spec="icon" aria-hidden="true">
                <svg id="icon-language" viewBox="0 0 24 24">
                  <path d="M11.99 2c-5.52 0-9.99 4.48-9.99 10s4.47 10 9.99 10c5.53 0 10.010-4.48 10.010-10s-4.48-10-10.010-10zM18.92 8h-2.95c-0.32-1.25-0.78-2.45-1.38-3.56 1.84 0.63 3.37 1.91 4.33 3.56zM12 4.040c0.83 1.2 1.48 2.53 1.91 3.96h-3.82c0.43-1.43 1.080-2.76 1.91-3.96zM4.26 14c-0.16-0.64-0.26-1.31-0.26-2s0.1-1.36 0.26-2h3.38c-0.080 0.66-0.14 1.32-0.14 2s0.060 1.34 0.14 2h-3.38zM5.080 16h2.95c0.32 1.25 0.78 2.45 1.38 3.56-1.84-0.63-3.37-1.9-4.33-3.56zM8.030 8h-2.95c0.96-1.66 2.49-2.93 4.33-3.56-0.6 1.11-1.060 2.31-1.38 3.56zM12 19.96c-0.83-1.2-1.48-2.53-1.91-3.96h3.82c-0.43 1.43-1.080 2.76-1.91 3.96zM14.34 14h-4.68c-0.090-0.66-0.16-1.32-0.16-2s0.070-1.35 0.16-2h4.68c0.090 0.65 0.16 1.32 0.16 2s-0.070 1.34-0.16 2zM14.59 19.56c0.6-1.11 1.060-2.31 1.38-3.56h2.95c-0.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c0.080-0.66 0.14-1.32 0.14-2s-0.060-1.34-0.14-2h3.38c0.16 0.64 0.26 1.31 0.26 2s-0.1 1.36-0.26 2h-3.38z"></path>
                </svg>
              </i>
              <div className="guide__details">
                <p className="guide__info para para--dark-2 para--size-12 text-cap">
                  language
                </p>
                <p className="guide__name para para--dark-2 para--size-15 text-cap weight-600">
                  french
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

detailEventPage.propTypes = {
  login: PropTypes.func.isRequired,
  errorList: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  registerRedirect: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  errorList: state.errors,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { login, registerRedirect })(
  detailEventPage
);
