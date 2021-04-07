import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getEventList } from "actions/event";

import managerPhoto from "assets/img/managerPhoto.jpg";
import card from "assets/img/card-01.jpg";
import card02 from "assets/img/card-02.jpg";
import card03 from "assets/img/card-03.jpg";
import card04 from "assets/img/card-04.jpg";
import card05 from "assets/img/card-05.jpg";
// import "sass/viewEvents.scss";
import Spinner from "views/Spinner";

const viewEvent = ({ getEventList, eventList, listLoading }) => {
  // useEffect(() => {
  //   getEventList();
  // }, [getEventList]);
  // const data = [];

  
  return getEventList ? (
    <Spinner />
  ) : (
    <section className="viewEvents">
      <div className="viewEvent">
        <div className="viewEvent--para">
          <h4 className="heading-4 heading-4--dark-2 u-margin-bottom-small text-cap">
            {/* My {getEventList.name} ( 4 ) */}
            My Events ( 4 )
          </h4>
          <div className="viewEvent--para__box">
            {/* Place Repeating card here... */}
            <div className="viewEvent--para__box--card curd">
              <img
                src={card02}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <span className="edit edit--color para--size-11 text-cap">
                Edit
              </span>

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
                <span className='rating--star'>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i></span>
              
                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>
              <p className="viewEvent--para__box--card__location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="viewEvent--para__box--card__days__item">
                <span>3 days event</span>
                <span>12 stops</span>
                <span>10 person per ticket</span>
              </div>
              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
                <s className="viewEvent--para__box--card__currentPrice__discount">
                  <span>20%</span>
                </s>
              </p>
              {/* <p className='viewEvent--para__box--card__currentPrice'>
                                <span>₹12000</span>
                                <s className='viewEvent--para__box--card__currentPrice__discount'>
                                    <span>₹20000</span>
                                </s>
                            </p> */}
            </div>

            <div className="viewEvent--para__box--card curd">
              <img
                src={card03}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <span className="edit edit--color para--size-11 text-cap">
                Edit
              </span>
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
                <span className='rating--star'>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i></span>
              
                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>
              <p className="viewEvent--para__box--card__location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice San Clemente Palace
                Kempinski Venice
              </p>
              <div className="viewEvent--para__box--card__days__item">
                <span>3 days event</span>
                <span>12 stops</span>
                <span>10 person per ticket 10 person per ticket</span>
              </div>
              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
                <s className="viewEvent--para__box--card__currentPrice__discount">
                  <span>20%</span>
                </s>
              </p>
              {/* <p className='viewEvent--para__box--card__currentPrice'>
                                <span>₹12000</span>
                                <s className='viewEvent--para__box--card__currentPrice__discount'>
                                    <span>₹20000</span>
                                </s>
                            </p> */}
            </div>

            <div className="viewEvent--para__box--card curd">
              <img
                src={card04}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <span className="edit edit--color para--size-11 text-cap">
                Edit
              </span>
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
                <span className='rating--star'>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i></span>
              
                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>
              <p className="viewEvent--para__box--card__location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="viewEvent--para__box--card__days__item">
                <span>3 days event</span>
                <span>12 stops</span>
                <span>10 person per ticket</span>
              </div>
              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
                <s className="viewEvent--para__box--card__currentPrice__discount">
                  <span>20%</span>
                </s>
              </p>
              {/* <p className='viewEvent--para__box--card__currentPrice'>
                                <span>₹12000</span>
                                <s className='viewEvent--para__box--card__currentPrice__discount'>
                                    <span>₹20000</span>
                                </s>
                            </p> */}
            </div>

            <div className="viewEvent--para__box--card curd">
              <img
                src={card05}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <span className="edit edit--color para--size-11 text-cap">
                Edit
              </span>
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
                <span className='rating--star'>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i></span>
              
                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>
              <p className="viewEvent--para__box--card__location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="viewEvent--para__box--card__days__item">
                <span>3 days event</span>
                <span>12 stops</span>
                <span>10 person per ticket</span>
              </div>
              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
                <s className="viewEvent--para__box--card__currentPrice__discount">
                  <span>20%</span>
                </s>
              </p>
              {/* <p className='viewEvent--para__box--card__currentPrice'>
                                <span>₹12000</span>
                                <s className='viewEvent--para__box--card__currentPrice__discount'>
                                    <span>₹20000</span>
                                </s>
                            </p> */}
            </div>

            <div className="viewEvent--para__box--card curd">
              <img
                src={card}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <span className="edit edit--color para--size-11 text-cap">
                Edit
              </span>
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
                <span className='rating--star'>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i></span>
              
                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>
              <p className="viewEvent--para__box--card__location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="viewEvent--para__box--card__days__item">
                <span>3 days event</span>
                <span>12 stops</span>
                <span>10 person per ticket</span>
              </div>
              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
                <s className="viewEvent--para__box--card__currentPrice__discount">
                  <span>20%</span>
                </s>
              </p>
              {/* <p className='viewEvent--para__box--card__currentPrice'>
                                <span>₹12000</span>
                                <s className='viewEvent--para__box--card__currentPrice__discount'>
                                    <span>₹20000</span>
                                </s>
                            </p> */}
            </div>

            {/* Place Repeating card here... */}
            <div className="viewEvent--para__box--card curd">
              <img
                src={card02}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <span className="edit edit--color para--size-11 text-cap">
                Edit
              </span>
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
                <span className='rating--star'>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i></span>
              
                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>
              <p className="viewEvent--para__box--card__location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="viewEvent--para__box--card__days__item">
                <span>3 days event</span>
                <span>12 stops</span>
                <span>10 person per ticket</span>
              </div>
              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
                <s className="viewEvent--para__box--card__currentPrice__discount">
                  <span>20%</span>
                </s>
              </p>
              {/* <p className='viewEvent--para__box--card__currentPrice'>
                                <span>₹12000</span>
                                <s className='viewEvent--para__box--card__currentPrice__discount'>
                                    <span>₹20000</span>
                                </s>
                            </p> */}
            </div>

            <div className="viewEvent--para__box--card curd">
              <img
                src={card03}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <span className="edit edit--color para--size-11 text-cap">
                Edit
              </span>
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
                <span className='rating--star'>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i></span>
              
                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>
              <p className="viewEvent--para__box--card__location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice San Clemente Palace
                Kempinski Venice
              </p>
              <div className="viewEvent--para__box--card__days__item">
                <span>3 days event</span>
                <span>12 stops</span>
                <span>10 person per ticket 10 person per ticket</span>
              </div>
              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
                <s className="viewEvent--para__box--card__currentPrice__discount">
                  <span>20%</span>
                </s>
              </p>
              {/* <p className='viewEvent--para__box--card__currentPrice'>
                                <span>₹12000</span>
                                <s className='viewEvent--para__box--card__currentPrice__discount'>
                                    <span>₹20000</span>
                                </s>
                            </p> */}
            </div>

            <div className="viewEvent--para__box--card curd">
              <img
                src={card04}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <span className="edit edit--color para--size-11 text-cap">
                Edit
              </span>
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
                <span className='rating--star'>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i></span>
              
                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>
              <p className="viewEvent--para__box--card__location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="viewEvent--para__box--card__days__item">
                <span>3 days event</span>
                <span>12 stops</span>
                <span>10 person per ticket</span>
              </div>
              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
                <s className="viewEvent--para__box--card__currentPrice__discount">
                  <span>20%</span>
                </s>
              </p>
              {/* <p className='viewEvent--para__box--card__currentPrice'>
                                <span>₹12000</span>
                                <s className='viewEvent--para__box--card__currentPrice__discount'>
                                    <span>₹20000</span>
                                </s>
                            </p> */}
            </div>

            <div className="viewEvent--para__box--card curd">
              <img
                src={card05}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <span className="edit edit--color para--size-11 text-cap">
                Edit
              </span>
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
                <span className='rating--star'>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i></span>
              
                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>
              <p className="viewEvent--para__box--card__location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="viewEvent--para__box--card__days__item">
                <span>3 days event</span>
                <span>12 stops</span>
                <span>10 person per ticket</span>
              </div>
              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
                <s className="viewEvent--para__box--card__currentPrice__discount">
                  <span>20%</span>
                </s>
              </p>
              {/* <p className='viewEvent--para__box--card__currentPrice'>
                                <span>₹12000</span>
                                <s className='viewEvent--para__box--card__currentPrice__discount'>
                                    <span>₹20000</span>
                                </s>
                            </p> */}
            </div>

            <div className="viewEvent--para__box--card curd">
              <img
                src={card}
                className="viewEvent--para__box--card-img"
                alt="event name"
              />

              <span className="edit edit--color para--size-11 text-cap">
                Edit
              </span>
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
                <span className='rating--star'>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='10px' width='10px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i></span>
              
                <span className="viewEvent--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>
              <p className="viewEvent--para__box--card__location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="viewEvent--para__box--card__days__item">
                <span>3 days event</span>
                <span>12 stops</span>
                <span>10 person per ticket</span>
              </div>
              <p className="viewEvent--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
                <s className="viewEvent--para__box--card__currentPrice__discount">
                  <span>20%</span>
                </s>
              </p>
              {/* <p className='viewEvent--para__box--card__currentPrice'>
                                <span>₹12000</span>
                                <s className='viewEvent--para__box--card__currentPrice__discount'>
                                    <span>₹20000</span>
                                </s>
                            </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default viewEvent;
viewEvent.propTypes = {
  getEventList: PropTypes.bool.isRequired,
  // getEventList: PropTypes.func.isRequired,
  // eventList: PropTypes.array.isRequired,
  // listLoading: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  eventList: state.event.eventList,
  listLoading: state.event.listLoading,
});

export default connect(mapStateToProps, {
//   getEventList,
// })(withRouter(viewEvent));
})(viewEvent);