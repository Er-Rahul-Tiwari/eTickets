import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input, Label,Search } from "reactstrap";
import "sass/hero/heroBanner.scss";

import imgld from "assets/hero/2.jpg";
import logo from "assets/logo.png";

const HeroBanner = () => {
  return (
    <>
      <div className="heroBanner">
        <nav className="nav">
          <div className="nav__content">
            <img src={logo} className="nav__content__logo" />
            <div className="nav__content__links">
              <Link to="" className="link">
                Home
              </Link>
              <Link to="" className="link">
                Leads
              </Link>
              <Link to="" className="link">
                Events
              </Link>
              <Link to="" className="link">
                API
              </Link>
              <Link to="/login" className="link">
                LogIn
              </Link>
            </div>
            <Link>
            </Link>
            <svg viewBox="0 0 24 24" class="nav__menu--icon">
              <path
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                class=""
              >
              </path>
            </svg>
          </div>
        </nav>
        <div className="navBottom">
          {/* <div className='navBottom__box'> */}
          <div className="navBottom--item">
            <svg id="icon-search" viewBox="0 0 24 24">
              <path
                d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"
                class="style-scope yt-icon"
              ></path>
            </svg>
            <span>Home</span>
          </div>
          <div className="navBottom--item">
            <svg id="icon-search" viewBox="0 0 24 24">
              <path d="M10 13v-2h4v2zm6 5V6h-.4C15 7.4 13.8 8.4 12 8.4S9 7.4 8.4 6H8v12h.4c.6-1.4 1.8-2.4 3.6-2.4s3 1 3.6 2.4zM14 4h4v16h-4s0-2.4-2-2.4-2 2.4-2 2.4H6V4h4s0 2.4 2 2.4S14 4 14 4z"></path>{" "}
            </svg>
            <span>Event</span>
          </div>
          <div className="navBottom--item">
            <svg id="icon-search" viewBox="0 0 24 24">
              <path d="M15.5 14h-0.79l-0.28-0.27c0.98-1.14 1.57-2.62 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 2.91-6.5 6.5c0 3.59 2.91 6.5 6.5 6.5 1.61 0 3.090-0.59 4.23-1.57l0.27 0.28v0.79l5 4.99 1.49-1.49-4.99-5zM9.5 14c-2.49 0-4.5-2.010-4.5-4.5s2.010-4.5 4.5-4.5c2.49 0 4.5 2.010 4.5 4.5s-2.010 4.5-4.5 4.5z"></path>
            </svg>
            {/* ♂ */}
            <span>Leads</span>
          </div>
          <div className="navBottom--item">
            <svg id="icon-search" viewBox="0 0 24 24">
              <path
                d="M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z"
                class="style-scope yt-icon"
              ></path>{" "}
            </svg>
            <span>API</span>
          </div>
          <div className="navBottom--item">
            <svg id="icon-search" viewBox="0 0 24 24">
              <path
                d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.1-1.65c.2-.15.25-.42.13-.64l-2-3.46c-.12-.22-.4-.3-.6-.22l-2.5 1c-.52-.4-1.08-.73-1.7-.98l-.37-2.65c-.06-.24-.27-.42-.5-.42h-4c-.27 0-.48.18-.5.42l-.4 2.65c-.6.25-1.17.6-1.7.98l-2.48-1c-.23-.1-.5 0-.6.22l-2 3.46c-.14.22-.08.5.1.64l2.12 1.65c-.04.32-.07.65-.07.98s.02.66.06.98l-2.1 1.65c-.2.15-.25.42-.13.64l2 3.46c.12.22.4.3.6.22l2.5-1c.52.4 1.08.73 1.7.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.6-.25 1.17-.6 1.7-.98l2.48 1c.23.1.5 0 .6-.22l2-3.46c.13-.22.08-.5-.1-.64l-2.12-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
                class="style-scope yt-icon"
              ></path>{" "}
            </svg>
            <span>Setting</span>
          </div>
          {/* </div> */}
        </div>
        <div className="heroBanner__picture">
          <img
            className="heroBanner__picture--img"
            src={imgld}
            alt="hero image"
          />
          <div className="heroBanner__picture--paragraph">
            <h3 className="heading-3 heading-3--dark-2">
              Anywhere, anytime. Start Enjoying events today!
            </h3>
            <div className="form__group  u-margin-top-small">
              <Form>
                <Input
                  className="input"
                  type='search'
                  results='10'
                  name="search"
                  placeholder="Do you want enjoy with events ?"
                />
              </Form>
              {/* <span className="input--search">
                <svg id="icon-search" viewBox="0 0 24 24">
                  <path d="M15.5 14h-0.79l-0.28-0.27c0.98-1.14 1.57-2.62 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 2.91-6.5 6.5c0 3.59 2.91 6.5 6.5 6.5 1.61 0 3.090-0.59 4.23-1.57l0.27 0.28v0.79l5 4.99 1.49-1.49-4.99-5zM9.5 14c-2.49 0-4.5-2.010-4.5-4.5s2.010-4.5 4.5-4.5c2.49 0 4.5 2.010 4.5 4.5s-2.010 4.5-4.5 4.5z"></path>
                </svg>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroBanner;
