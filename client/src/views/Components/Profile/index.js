import React from "react";
import PropTypes from "prop-types";
import { Button, Form, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import managerPhoto from "assets/img/defaultUser.png";
import card from "assets/img/card-01.jpg";
import card02 from "assets/img/card-02.jpg";
import card03 from "assets/img/card-03.jpg";
import card04 from "assets/img/card-04.jpg";
import card05 from "assets/img/card-05.jpg";
import Spinner from "views/Spinner";
import {
  USER_TYPE_MANAGER,
  USER_TYPE_ADMIN,
  SERVER_URL,
} from "constants/index";

const Profile = ({ loadingProfile, user }) => {
  // useMemo(() => {
  //   setFormData({
  //     first_name: loading ? "" : user.first_name,
  //     last_name: loading ? "" : user.last_name,
  //     email: loading ? "" : user.email
  //   });
  // }, [loading, user]);
  return (
    <section className="profiles">
      <div className="profile">
        <div className="profile--story">
          <div className="banner profile--story--box">
            <div>
              <img
                className="profile--story__user"
                src={
                  loadingProfile ? (
                    <Spinner />
                  ) : user.photo ? (
                    SERVER_URL + "/user/" + user.photo
                  ) : (
                    managerPhoto
                  )
                }
                alt="Profile"
              />
              <Link to='/profileSetting' className='text-upper para--size-10'>
                edit profile
              </Link>
            </div>
            <div>
              <h5 className="heading-5 text-upper">
                {loadingProfile ? (
                  <Spinner />
                ) : user.role.length > 1 ? (
                  user.role.map(
                    (userRole, index) =>
                      user.role.length !== index + 1
                        ? userRole === USER_TYPE_MANAGER
                          ? "User"
                          : "Manager"
                        : userRole === USER_TYPE_ADMIN
                        ? "Admin"
                        : userRole === USER_TYPE_MANAGER
                    // ? "Event Manager"
                    // : userRole === USER_TYPE_ADMIN
                    // ? "Admin"
                    // : "User"
                  )
                ) : (
                  user.role
                )}
              </h5>
              <h2 className="heading-2 heading-2--dark-2 text-cap">
                {loadingProfile ? <Spinner /> : user.name}
              </h2>
              <h5 className="heading-5 text-upper u-margin-bottom-small">
                {loadingProfile ? (
                  <Spinner />
                ) : user.role.length > 1 ? (
                  user.role.map((userRole, index) =>
                    user.role.length !== index + 1
                      ? userRole === USER_TYPE_MANAGER
                      : // ? "Manager, "
                      // : userRole === USER_TYPE_ADMIN
                      // ? "Admin, "
                      // : "User, "
                      userRole === USER_TYPE_MANAGER
                      ? "Event Manager"
                      : userRole === USER_TYPE_ADMIN
                      ? "Admin"
                      : "User"
                  )
                ) : (
                  user.role
                )}
              </h5>
              <div className="profile--story--link">
                <Link to="/">
                  <svg id="icon-link" className="second" viewBox="0 0 24 24">
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4v-1.9h-4c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9h-4c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2h-8v2zM17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4v1.9h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                  </svg>
                </Link>
                <Link to="/">
                  <svg id="icon-twitter" viewBox="0 0 24 24">
                    <path d="M22.46 6c-0.77 0.35-1.6 0.58-2.46 0.69 0.88-0.53 1.56-1.37 1.88-2.38-0.83 0.5-1.75 0.85-2.72 1.050-0.79-0.86-1.9-1.36-3.16-1.36-2.35 0-4.27 1.92-4.27 4.29 0 0.34 0.040 0.67 0.11 0.98-3.56-0.18-6.73-1.89-8.84-4.48-0.37 0.63-0.58 1.37-0.58 2.15 0 1.49 0.75 2.81 1.91 3.56-0.71 0-1.37-0.2-1.95-0.5 0 0 0 0 0 0.030 0 2.080 1.48 3.82 3.44 4.21-0.36 0.1-0.74 0.15-1.13 0.15-0.27 0-0.54-0.030-0.8-0.080 0.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-0.34 0-0.68-0.020-1.020-0.060 1.9 1.22 4.16 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-0.19 0-0.37-0.010-0.56 0.84-0.6 1.56-1.36 2.14-2.23z"></path>
                  </svg>
                </Link>
                <Link to="/">
                  <svg id="icon-facebook" viewBox="0 0 24 24">
                    <path d="M17 2v4h-2c-0.69 0-1 0.81-1 1.5v2.5h3v4h-3v8h-4v-8h-3v-4h3v-4c0-1.061 0.421-2.078 1.172-2.828s1.767-1.172 2.828-1.172h3z"></path>
                  </svg>
                </Link>
                <Link to="/">
                  <svg id="icon-linkedin" viewBox="0 0 24 24">
                    <path d="M19 3c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v14c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-14c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-14c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586h14zM18.5 18.5v-5.3c0-0.865-0.343-1.694-0.955-2.305s-1.441-0.955-2.305-0.955c-0.85 0-1.84 0.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-0.77 0.62-1.4 1.39-1.4 0.371 0 0.727 0.147 0.99 0.41s0.41 0.619 0.41 0.99v4.93h2.79zM6.88 8.56c0.446 0 0.873-0.177 1.188-0.492s0.492-0.742 0.492-1.188c0-0.93-0.75-1.69-1.68-1.69-0.448 0-0.878 0.178-1.195 0.495s-0.495 0.747-0.495 1.195c0 0.93 0.76 1.68 1.69 1.68zM8.27 18.5v-8.37h-2.77v8.37h2.77z"></path>
                  </svg>
                </Link>
                <Link to="/">
                  <svg id="icon-youtube" viewBox="0 0 24 24">
                    <path d="M10 15l5.19-3-5.19-3v6zM21.56 7.17c0.13 0.47 0.22 1.1 0.28 1.9 0.070 0.8 0.1 1.49 0.1 2.090l0.060 0.84c0 2.19-0.16 3.8-0.44 4.83-0.25 0.9-0.83 1.48-1.73 1.73-0.47 0.13-1.33 0.22-2.65 0.28-1.3 0.070-2.49 0.1-3.59 0.1l-1.59 0.060c-4.19 0-6.8-0.16-7.83-0.44-0.9-0.25-1.48-0.83-1.73-1.73-0.13-0.47-0.22-1.1-0.28-1.9-0.070-0.8-0.1-1.49-0.1-2.090l-0.060-0.84c0-2.19 0.16-3.8 0.44-4.83 0.25-0.9 0.83-1.48 1.73-1.73 0.47-0.13 1.33-0.22 2.65-0.28 1.3-0.070 2.49-0.1 3.59-0.1l1.59-0.060c4.19 0 6.8 0.16 7.83 0.44 0.9 0.25 1.48 0.83 1.73 1.73z"></path>
                  </svg>
                </Link>
              </div>

              <div className="profile--story--reviews">
                <div>
                  <p className="para">Total participant</p>
                  <h3 className="heading-3 heading-3--dark-2">
                    {loadingProfile ? (
                      <Spinner />
                    ) : user.totalParticipents ? (
                      user.totalParticipents
                    ) : (
                      0
                    )}
                  </h3>
                </div>
                <div>
                  <p className="para">Reviews</p>
                  <h3 className="heading-3 heading-3--dark-2">
                    {loadingProfile ? (
                      <Spinner />
                    ) : user.totalReviews ? (
                      user.totalReviews
                    ) : (
                      0
                    )}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile--para">
          <div className="u-margin-top-medium">
            <h3 className="heading-3 heading-3--dark-2 text-cap u-margin-bottom-small">About me</h3>

            {/* <div className="button r" id="button-1">
              <Input type="checkbox" className="checkbox1" />
              <div className="knobs"></div>
              <div className="layer"></div>
            </div> */}

            <p className="para para--dark">
              {loadingProfile ? <Spinner /> : user.about ? user.about : "N/A"}
            </p>
          </div>
          <h4 className="heading-4 heading-4--dark-2 u-margin-top-medium u-margin-bottom-small text-cap">
            My upcoming events ( 4 )
          </h4>
          <div className="profile--para__box">
            {/* Place Repeating card here... */}
            <div className="profile--para__box--card">
              <img
                src={card02}
                className="profile--para__box--card-img"
                alt="event name"
              />
              <p className="profile--para__box--card__date text-cap">
                Sat, 4 June 2021
              </p>
              <p className="profile--para__box--card__event-name text-cap">
                Opening Night Gala at Delhi Comedy Festival 2020
              </p>
              <p className="profile--para__box--card__name">Dr. Angela Yu</p>
              <p className="profile--para__box--card__rating">
                <span className="profile--para__box--card__rating--number">
                  4.5
                </span>
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

                <span className="profile--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>
              <p className="profile--para__box--card__location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="profile--para__box--card__days__item">
                <span>3 days event</span>
                <span>12 stops</span>
                <span>10 person per ticket</span>
              </div>
              <p className="profile--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
                <s className="profile--para__box--card__currentPrice__discount">
                  <span>20%</span>
                </s>
              </p>
            </div>

            <div className="profile--para__box--card">
              <img
                src={card03}
                className="profile--para__box--card-img"
                alt="event name"
              />
              <p className="profile--para__box--card__date text-cap">
                Sat, 4 June 2021
              </p>
              <p className="profile--para__box--card__event-name text-cap">
                Opening Night Gala at Delhi Comedy Festival 2020 Opening Night
                Gala at Delhi Comedy Festival 2020
              </p>
              <p className="profile--para__box--card__name">Dr. Angela Yu</p>
              <p className="profile--para__box--card__rating">
                <span className="profile--para__box--card__rating--number">
                  4.5
                </span>
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

                <span className="profile--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>
              <p className="profile--para__box--card__location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice San Clemente Palace
                Kempinski Venice
              </p>
              <div className="profile--para__box--card__days__item">
                <span>3 days event</span>
                <span>12 stops</span>
                <span>10 person per ticket 10 person per ticket</span>
              </div>
              <p className="profile--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
                <s className="profile--para__box--card__currentPrice__discount">
                  <span>20%</span>
                </s>
              </p>
            </div>

            <div className="profile--para__box--card">
              <img
                src={card04}
                className="profile--para__box--card-img"
                alt="event name"
              />
              <p className="profile--para__box--card__date text-cap">
                Sat, 4 June 2021
              </p>
              <p className="profile--para__box--card__event-name text-cap">
                Opening Night Gala at Delhi Comedy Festival 2020
              </p>
              <p className="profile--para__box--card__name">Dr. Angela Yu</p>
              <p className="profile--para__box--card__rating">
                <span className="profile--para__box--card__rating--number">
                  4.5
                </span>
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

                <span className="profile--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>
              <p className="profile--para__box--card__location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="profile--para__box--card__days__item">
                <span>3 days event</span>
                <span>12 stops</span>
                <span>10 person per ticket</span>
              </div>
              <p className="profile--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
                <s className="profile--para__box--card__currentPrice__discount">
                  <span>20%</span>
                </s>
              </p>
            </div>

            <div className="profile--para__box--card">
              <img
                src={card05}
                className="profile--para__box--card-img"
                alt="event name"
              />
              <p className="profile--para__box--card__date text-cap">
                Sat, 4 June 2021
              </p>
              <p className="profile--para__box--card__event-name text-cap">
                Opening Night Gala at Delhi Comedy Festival 2020
              </p>
              <p className="profile--para__box--card__name">Dr. Angela Yu</p>
              <p className="profile--para__box--card__rating">
                <span className="profile--para__box--card__rating--number">
                  4.5
                </span>
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

                <span className="profile--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>
              <p className="profile--para__box--card__location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="profile--para__box--card__days__item">
                <span>3 days event</span>
                <span>12 stops</span>
                <span>10 person per ticket</span>
              </div>
              <p className="profile--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
                <s className="profile--para__box--card__currentPrice__discount">
                  <span>20%</span>
                </s>
              </p>
            </div>

            <div className="profile--para__box--card">
              <img
                src={card}
                className="profile--para__box--card-img"
                alt="event name"
              />
              <p className="profile--para__box--card__date text-cap">
                Sat, 4 June 2021
              </p>
              <p className="profile--para__box--card__event-name text-cap">
                Opening Night Gala at Delhi Comedy Festival 2020
              </p>
              <p className="profile--para__box--card__name">Dr. Angela Yu</p>
              <p className="profile--para__box--card__rating">
                <span className="profile--para__box--card__rating--number">
                  4.5
                </span>
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

                <span className="profile--para__box--card__rating--person">
                  ( 101 )
                </span>
              </p>
              <p className="profile--para__box--card__location">
                <i className="glyph-icon flaticon-locate"> </i>
                San Clemente Palace Kempinski Venice
              </p>
              <div className="profile--para__box--card__days__item">
                <span>3 days event</span>
                <span>12 stops</span>
                <span>10 person per ticket</span>
              </div>
              <p className="profile--para__box--card__currentPrice">
                <span className="text-upper">45% off</span>
                <s className="profile--para__box--card__currentPrice__discount">
                  <span>20%</span>
                </s>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Profile.propTypes = {
  loadingProfile: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  loadingProfile: state.profile.loading,
  user: state.profile.user,
  error: state.errors,
});

export default connect(mapStateToProps, {
  // edit,
  // cancelSave,
})(Profile);
