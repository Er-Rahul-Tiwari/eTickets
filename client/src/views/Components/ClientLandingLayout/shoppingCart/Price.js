import React from "react";
import "sass/shoppingCart/price.scss";

import user from "assets/img/managerPhoto.jpg";

const Price = () => {
  return (
    <>
    <div className='price'>
        <div>
            <p className='para para--size-18'>
                Total :
            </p>
            <h2 className='heading-2 heading-2--dark-2 weight-400 u-margin-top-sub-small'>
                <span>
                    ₹22,302
                </span>
            </h2>
            <s>
                ₹9,275
            </s>
            <p className='para line-height-1'>
                94% off
            </p>

            <div className='price__checkout'>
                <button className='btn btn--blue'>
                    Checkout
                </button>
            </div>
            <div className='price__coupon'>
                <div className='form__group'>

                <input className='form__input' placeholder='Enter coupon' />
                </div>
                <div className='form__group'>
                <button className='btn btn--blue'>
                    apply
                </button>
                </div>
                <span className='para--dark-2 para--size-12 u-margin-top-small'>
                    <span className='u-margin-right-sub-small'>x</span>
                <b>2020SEPTSAVINGS</b> is applied
                </span>

            </div>
        </div>
    </div>
    </>
  );
};
export default Price;
