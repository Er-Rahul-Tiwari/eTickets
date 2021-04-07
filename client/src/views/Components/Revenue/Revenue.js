import React from "react";
import { AreaChart } from "react-chartkick";
import "chart.js";

const Revenues = () => {
  const data = [
    ["Sun", 32],
    ["Mon", 46],
    ["Tue", 28],
    ["Wed", 40],
    ["Thu", 50],
    ["Fri", 70],
    ["Sat", 100],
  ];
  return (
    <div className="revenues">
      <div className="">
        <div className="u-margin-bottom-medium">
          <p className="para">
            Total revenues
            <span className="heading-3 u-margin-left-small chart--sold">
              27200 $<span className="para--size-14 text-cap"> earn</span>
            </span>
          </p>
          <h3 className="heading-3 heading-3--dark">
            WWM Event Tickets
            <div className="u-margin-top-small">
              <span className="para para--size-16 u-margin-right-small">
                Filter
              </span>
              <select class="form__select para--dark-2">
                <option className="para--dark-2">
                  {" "}
                  Select Your Event Name{" "}
                </option>
                <option>Event name first</option>
                <option>Event name Second</option>
                <option>Event name Third</option>
                <option>Event name fourth</option>
              </select>
            </div>
          </h3>
        </div>
        <div className="charts">
          <div className="chart">
            <p className="para--size-14">Ticket Name</p>
            <p className="para para--size-24 heading-3--dark-2">
              Ticket name type-1 Ticket Viral
            </p>
          </div>
          <div className="chart">
            <h2 className="heading-2">
              <span className="chart--sold">12000$</span>
              {/* <span className='para--size-18 chart--sold'>101 sold out</span>  */}
              <span className="para--size-16 para--dark-2 u-margin-left-small">
                / 101 sold out
                {/* <span className='para--size-12'> total</span> */}
              </span>
            </h2>

            <p className="para--size-18 u-margin-top-small chart--left">
              <span>19</span>
              <span className="para--size-14">-Left only</span>
            </p>
          </div>
          <div className="chart">
            <AreaChart data={data} />
          </div>
        </div>
        <div className="charts">
          <div className="chart">
            <p className="para--size-14">Ticket Name</p>
            <p className="para para--size-24 heading-3--dark-2">
              Ticket name type-2 I am TViral
            </p>
          </div>
          <div className="chart">
            <h2 className="heading-2">
              <span className="chart--sold">1500$</span>
              {/* <span className='para--size-18 chart--sold'>101 sold out</span>  */}
              <span className="para--size-16 para--dark-2 u-margin-left-small">
                / 99 sold out
                {/* <span className='para--size-12'> total</span> */}
              </span>
            </h2>

            <p className="para--size-18 u-margin-top-small chart--left">
              <span>1</span>
              <span className="para--size-14">-Left only</span>
            </p>
          </div>
          <div className="chart">
            <AreaChart data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenues;
