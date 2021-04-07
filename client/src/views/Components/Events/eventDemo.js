import React, { useState, useRef, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { notFound } from "actions/common";
import { connect } from "react-redux";
import { getEventById } from "actions/event";
import { DATE_FORMATE, SERVER_URL } from "constants/index";
import Moment from "moment";
import noImg from "assets/img/no-image.png";
// import Spinner from "views/Spinner";

const EventDemo = ({
  getEventById,
  errorList,
  history,
  loading,
  match,
  currentEvent,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    tags: "",
    eventType: "",
    type: "",
    organizerName: "",
    eventCategory: "",
    eventLocation: "",
    country: "",
    states: "",
    city: "",
    pincode: "",
    eventLink: "",
    eventStartDate: "",
    eventEndDate: "",
    bookingStartDate: "",
    bookingEndDate: "",
    src: "",
    crop: {
      unit: "px",
      aspect: 1.7,
      width: 300,
      height: 200,
      x: 95,
      y: 86,
    },
    croppedImage: "",
    description: "",
    guide_name: "",
    phone: "",
    email: "",
    imageCover: "",
  });
  const [locationVisible, setLocationVisiable] = useState(true);
  const {
    name,
    tags,
    eventType,
    type,
    organizerName,
    eventCategory,
    eventLocation,
    country,
    states,
    city,
    pincode,
    eventLink,
    eventStartDate,
    eventEndDate,
    bookingStartDate,
    bookingEndDate,
    crop,
    src,
    description,
    guide_name,
    phone,
    email,
    imageCover,
  } = formData;

  //get event data
  useMemo(() => {
    getEventById(match.params.id).then((res) => {
      if (res === undefined) {
        notFound(history);
      } else {
        // Remove html tags
        const regex = /(<([^>]+)>)/ig;
        // const result = data.description.replace(regex, '');

        setFormData({
          name: loading || !res.name ? "" : res.name,
          tags: loading || !res.tags ? "" : res.tags,
          eventType: loading || !res.eventType ? "" : res.eventType,
          type: loading || !res.type ? "" : res.type,
          organizerName: loading || !res.organizerName ? "" : res.organizerName,
          eventCategory: loading || !res.eventCategory ? "" : res.eventCategory,
          eventLocation: loading || !res.locations ? "" : res.locations[0],
          country: loading || !res.country ? "" : res.country,
          states: loading || !res.states ? "" : res.states,
          city: loading || !res.city ? "" : res.city,
          pincode: loading || !res.pincode ? "" : res.pincode,
          eventLink: loading || !res.eventLink ? "" : res.eventLink,
          eventStartDate:
            loading || !res.startDate ? "" : Moment(res.startDate).toDate(),
          eventEndDate:
            loading || !res.endDate ? "" : Moment(res.endDate).toDate(),
          bookingStartDate:
            loading || !res.bookingStarts
              ? ""
              : Moment(res.bookingStarts).toDate(),
          bookingEndDate:
            loading || !res.bookingEnds ? "" : Moment(res.bookingEnds).toDate(),
          description: loading || !res.description.replace(regex, '') ? "" : res.description.replace(regex, ''),
          guide_name: loading || !res.guide_name ? "" : res.guide_name,
          phone: loading || !res.phone ? "" : res.phone,
          email: loading || !res.email ? "" : res.email,
          imageCover: loading || !res.imageCover ? "" : res.imageCover,
        });
      }
    });
  }, [match.params.id, history, notFound]);

  return (
    <section className="viewEvents">
      <div className="viewEvent">
        <h2 className='heading-2'>Event Preview</h2>
        <div className="viewEvent--para">
          <img
            src={
              !imageCover || imageCover === null || imageCover === "null"
                ? noImg
                : SERVER_URL + "/event/" + imageCover
            }
            className="width-auto br3"
            alt="event name"
          />
          <h4 className="heading-4 heading-4--dark-2 text-cap u-margin-bottom-sub-small">
            Cover Image
          </h4>
          {/* <img src={card03} className="width-auto2 br3" alt="event name" /> */}
          <div className="">
            <h4 className="heading-4 heading-4--dark-2">Event Basic Info</h4>
          </div>
          <div className="text-cap para--size-14 col-2">
            <p className="first">
              {/* Sat, 4 June 2021 */}
              Event Name
            </p>
            <p className="second">{name}</p>
          </div>
          <div className="text-cap para--size-14 col-2">
            <p className="first">tag</p>
            <p className="second">{tags}</p>
          </div>
          <div className="text-cap para--size-14 col-2">
            <p className="first">Event Type</p>
            <p className="second">{eventType}</p>
          </div>
          <div className="text-cap para--size-14 col-2">
            <p className="first">Event Category</p>
            <p className="second">{eventCategory}</p>
          </div>
          <div className="text-cap para--size-14 col-2">
            <p className="first">Type of Event</p>
            <p className="second">{type}</p>
          </div>
          <div className="text-cap para--size-14 col-2">
            <p className="first">organizer Name</p>
            <p className="second">{organizerName}</p>
          </div>
          <div className="">
            <h4 className="heading-4 heading-4--dark-2">Event Location</h4>
          </div>
          <div className="text-cap para--size-14 col-2">
            <p className="first">Country</p>
            <p className="second">{country}</p>
          </div>
          <div className="text-cap para--size-14 col-2">
            <p className="first">State</p>
            <p className="second">{states}</p>
          </div>
          <div className="text-cap para--size-14 col-2">
            <p className="first">city</p>
            <p className="second">{city}</p>
          </div>
          <div className="text-cap para--size-14 col-2">
            <p className="first">Zip code</p>
            <p className="second">{pincode}</p>
          </div>

          <div className="">
            <h4 className="heading-4 heading-4--dark-2">Event Date & Time</h4>
          </div>
          <div className="text-cap para--size-14 col-2">
            <p className="first">Event start Date</p>
            <p className="second">
              {Moment(eventStartDate).format(DATE_FORMATE)}
            </p>
          </div>
          <div className="text-cap para--size-14 col-2">
            <p className="first">Event End Date</p>
            <p className="second">
              {Moment(eventEndDate).format(DATE_FORMATE)}
            </p>
          </div>
          <div className="text-cap para--size-14 col-2">
            <p className="first">Booking Start Date</p>
            <p className="second">
              {Moment(bookingStartDate).format(DATE_FORMATE)}
            </p>
          </div>
          <div className="text-cap para--size-14 col-2">
            <p className="first">Booking End Date</p>
            <p className="second">
              {Moment(bookingEndDate).format(DATE_FORMATE)}
            </p>
          </div>

          <div className="">
            <h4 className="heading-4 heading-4--dark-2">Event Guide Details</h4>
          </div>
          <div className="text-cap para--size-14 col-2">
            <p className="first">Guide Name</p>
            <p className="second">{guide_name}</p>
          </div>
          <div className="text-cap para--size-14 col-2">
            <p className="first">Email</p>
            <p className="second">{email}</p>
          </div>
          <div className="text-cap para--size-14 col-2">
            <p className="first">Contact No.</p>
            <p className="second">{phone}</p>
          </div>

          <div className="">
            <h4 className="heading-4 heading-4--dark-2">Event Description</h4>
          </div>
          <div className="text-cap para--size-14 col-2">
            <p className="first">Description</p>
            <p className="second">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

EventDemo.propTypes = {
  errorList: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  currentEvent: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.event.loading,
  errorList: state.errors,
  currentEvent: state.event.currentEvent,
});

export default connect(mapStateToProps, {
  getEventById,
})(EventDemo);
