import React from "react";
import {Link} from 'react-router-dom'
import "sass/shoppingCart/cart.scss";

import user from "assets/img/managerPhoto.jpg";

const Cart = () => {
  return (
    <>
      <div className="cart">
          <div className="">
            <div className="cardCart">
              {/* Repeat */}
              <div className="cardCart__list">
                <img src={user} className="cardCart__img" />
                {/* name */}
                <div className="cardCart__detail-1">
                  <div className="cardCart__dates">
                    <p className="cardCart__date">Sep 20, 2020</p>
                  </div>
                  <div className="cardCart__details">
                    <span className="cardCart__name">
                      Auto Expo 2020 iOS 13 & Swift 5 - The Complete iOS App
                      Development Bootcamp Auto Expo 2020 iOS 13 & Swift 5 - The
                      Complete iOS App Development Bootcamp
                    </span>
                  </div>
                  <div className="cardCart__create">
                    <p className="cardCart__create--by">
                      <span>
                        by pritesh sharma,
                      </span>
                      <span>
                      best manager
                      </span>
                    </p>
                  </div>
                </div>

                {/* action */}
                <div className="cardCart__detail-3">
                  <div className="cardCart__action">
                    <Link to='' role='button' className='cardCart__action--link'>
                      Remove
                    </Link>
                    <Link to='' role='button' className='cardCart__action--link'>
                      save for later
                    </Link>
                    <Link to='' role='button' className='cardCart__action--link'>
                      move to wishlist
                    </Link>
                  </div>
                </div>
                {/* price */}
                <div className="cardCart__detail-2">
                  <div className="cardCart__price">
                    <span className="cardCart__price--value u-margin-left-sub-small">
                    ₹3,550
                    </span>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="cardCart">
              {/* Repeat */}
              <div className="cardCart__list">
                <img src={user} className="cardCart__img" />
                {/* name */}
                <div className="cardCart__detail-1">
                  <div className="cardCart__dates">
                    <p className="cardCart__date">Sep 20, 2020</p>
                  </div>
                  <div className="cardCart__details">
                    <span className="cardCart__name">
                      Auto Expo 2020 iOS 13 & Swift 5 - The Complete iOS App
                      Development Bootcamp Auto Expo 2020 iOS 13 & Swift 5 - The
                      Complete iOS App Development Bootcamp
                    </span>
                  </div>
                  <div className="cardCart__create">
                    <p className="cardCart__create--by">
                      <span>
                        by pritesh sharma,
                      </span>
                      <span>
                      best manager
                      </span>
                    </p>
                  </div>
                </div>

                {/* action */}
                <div className="cardCart__detail-3">
                  <div className="cardCart__action">
                    <Link to='' role='button' className='cardCart__action--link'>
                      Remove
                    </Link>
                    <Link to='' role='button' className='cardCart__action--link'>
                      save for later
                    </Link>
                    <Link to='' role='button' className='cardCart__action--link'>
                      move to wishlist
                    </Link>
                  </div>
                </div>
                {/* price */}
                <div className="cardCart__detail-2">
                  <div className="cardCart__price">
                    <span className="cardCart__price--value u-margin-left-sub-small">
                    ₹3,550
                    </span>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="cardCart">
              {/* Repeat */}
              <div className="cardCart__list">
                <img src={user} className="cardCart__img" />
                {/* name */}
                <div className="cardCart__detail-1">
                  <div className="cardCart__dates">
                    <p className="cardCart__date">Sep 20, 2020</p>
                  </div>
                  <div className="cardCart__details">
                    <span className="cardCart__name">
                      Auto Expo 2020 iOS 13 & Swift 5 - The Complete iOS App
                      Development Bootcamp Auto Expo 2020 iOS 13 & Swift 5 - The
                      Complete iOS App Development Bootcamp
                    </span>
                  </div>
                  <div className="cardCart__create">
                    <p className="cardCart__create--by">
                      <span>
                        by pritesh sharma,
                      </span>
                      <span>
                      best manager
                      </span>
                    </p>
                  </div>
                </div>

                {/* action */}
                <div className="cardCart__detail-3">
                  <div className="cardCart__action">
                    <Link to='' role='button' className='cardCart__action--link'>
                      Remove
                    </Link>
                    <Link to='' role='button' className='cardCart__action--link'>
                      save for later
                    </Link>
                    <Link to='' role='button' className='cardCart__action--link'>
                      move to wishlist
                    </Link>
                  </div>
                </div>
                {/* price */}
                <div className="cardCart__detail-2">
                  <div className="cardCart__price">
                    <span className="cardCart__price--value u-margin-left-sub-small">
                    ₹3,550
                    </span>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="cardCart">
              {/* Repeat */}
              <div className="cardCart__list">
                <img src={user} className="cardCart__img" />
                {/* name */}
                <div className="cardCart__detail-1">
                  <div className="cardCart__dates">
                    <p className="cardCart__date">Sep 20, 2020</p>
                  </div>
                  <div className="cardCart__details">
                    <span className="cardCart__name">
                      Auto Expo 2020 iOS 13 & Swift 5 - The Complete iOS App
                      Development Bootcamp Auto Expo 2020 iOS 13 & Swift 5 - The
                      Complete iOS App Development Bootcamp
                    </span>
                  </div>
                  <div className="cardCart__create">
                    <p className="cardCart__create--by">
                      <span>
                        by pritesh sharma,
                      </span>
                      <span>
                      best manager
                      </span>
                    </p>
                  </div>
                </div>

                {/* action */}
                <div className="cardCart__detail-3">
                  <div className="cardCart__action">
                    <Link to='' role='button' className='cardCart__action--link'>
                      Remove
                    </Link>
                    <Link to='' role='button' className='cardCart__action--link'>
                      save for later
                    </Link>
                    <Link to='' role='button' className='cardCart__action--link'>
                      move to wishlist
                    </Link>
                  </div>
                </div>
                {/* price */}
                <div className="cardCart__detail-2">
                  <div className="cardCart__price">
                    <span className="cardCart__price--value u-margin-left-sub-small">
                    ₹3,550
                    </span>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="cardCart">
              {/* Repeat */}
              <div className="cardCart__list">
                <img src={user} className="cardCart__img" />
                {/* name */}
                <div className="cardCart__detail-1">
                  <div className="cardCart__dates">
                    <p className="cardCart__date">Sep 20, 2020</p>
                  </div>
                  <div className="cardCart__details">
                    <span className="cardCart__name">
                      Auto Expo 2020 iOS 13 & Swift 5 - The Complete iOS App
                      Development Bootcamp Auto Expo 2020 iOS 13 & Swift 5 - The
                      Complete iOS App Development Bootcamp
                    </span>
                  </div>
                  <div className="cardCart__create">
                    <p className="cardCart__create--by">
                      <span>
                        by pritesh sharma,
                      </span>
                      <span>
                      best manager
                      </span>
                    </p>
                  </div>
                </div>

                {/* action */}
                <div className="cardCart__detail-3">
                  <div className="cardCart__action">
                    <Link to='' role='button' className='cardCart__action--link'>
                      Remove
                    </Link>
                    <Link to='' role='button' className='cardCart__action--link'>
                      save for later
                    </Link>
                    <Link to='' role='button' className='cardCart__action--link'>
                      move to wishlist
                    </Link>
                  </div>
                </div>
                {/* price */}
                <div className="cardCart__detail-2">
                  <div className="cardCart__price">
                    <span className="cardCart__price--value u-margin-left-sub-small">
                    ₹3,550
                    </span>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="cardCart">
              {/* Repeat */}
              <div className="cardCart__list">
                <img src={user} className="cardCart__img" />
                {/* name */}
                <div className="cardCart__detail-1">
                  <div className="cardCart__dates">
                    <p className="cardCart__date">Sep 20, 2020</p>
                  </div>
                  <div className="cardCart__details">
                    <span className="cardCart__name">
                      Auto Expo 2020 iOS 13 & Swift 5 - The Complete iOS App
                      Development Bootcamp Auto Expo 2020 iOS 13 & Swift 5 - The
                      Complete iOS App Development Bootcamp
                    </span>
                  </div>
                  <div className="cardCart__create">
                    <p className="cardCart__create--by">
                      <span>
                        by pritesh sharma,
                      </span>
                      <span>
                      best manager
                      </span>
                    </p>
                  </div>
                </div>

                {/* action */}
                <div className="cardCart__detail-3">
                  <div className="cardCart__action">
                    <Link to='' role='button' className='cardCart__action--link'>
                      Remove
                    </Link>
                    <Link to='' role='button' className='cardCart__action--link'>
                      save for later
                    </Link>
                    <Link to='' role='button' className='cardCart__action--link'>
                      move to wishlist
                    </Link>
                  </div>
                </div>
                {/* price */}
                <div className="cardCart__detail-2">
                  <div className="cardCart__price">
                    <span className="cardCart__price--value u-margin-left-sub-small">
                    ₹3,550
                    </span>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
      </div>
    </>
  );
};
export default Cart;
