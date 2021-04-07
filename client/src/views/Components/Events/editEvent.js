import React, { useState, useRef, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { edit, cancelSave, getEventById } from "actions/event";
import { notFound } from "actions/common";
import { Button, Form, Input, Label } from "reactstrap";
import * as Constants from "constants/index";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import CKEditor from "ckeditor4-react";
import Errors from "views/Notifications/Errors";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from "moment";

const EditEvent = ({
  getEventById,
  edit,
  cancelSave,
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
    eventSubCategoryId: "",
    organizerName: "",
    eventCategoryId: "",
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
    eventSubCategoryId,
    organizerName,
    eventCategoryId,
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
        setFormData({
          name: loading || !res.name ? "" : res.name,
          tags: loading || !res.tags ? "" : res.tags,
          eventType: loading || !res.eventType ? "" : res.eventType,
          eventSubCategoryId: loading || !res.eventSubCategoryId ? "" : res.eventSubCategoryId,
          organizerName: loading || !res.organizerName ? "" : res.organizerName,
          eventCategoryId: loading || !res.eventCategoryId ? "" : res.eventCategoryId,
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
          description: loading || !res.description ? "" : res.description,
          guide_name: loading || !res.guide_name ? "" : res.guide_name,
          phone: loading || !res.phone ? "" : res.phone,
          email: loading || !res.email ? "" : res.email,
          imageCover: loading || !res.imageCover ? "" : res.imageCover,
        });
      }
    });
  }, [match.params.id, history, notFound]);

  //handle onChange event
  const onChange = (e) => {
    switch (e.target.name) {
      case "eventLocation":
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (e.target.value !== "Vanue") {
          setLocationVisiable(false);
        } else {
          setLocationVisiable(true);
        }
        break;

      default:
        setFormData({ ...formData, [e.target.name]: e.target.value });
        break;
    }
  };

  //handleChange of datepicker
  const handleChange = (date, type) => {
    switch (type) {
      case "eventStartDate":
        setFormData({ ...formData, eventStartDate: date });
        break;
      case "eventEndDate":
        setFormData({ ...formData, eventEndDate: date });
        break;
      case "bookingStartDate":
        setFormData({ ...formData, bookingStartDate: date });
        break;
      case "bookingEndDate":
        setFormData({ ...formData, bookingEndDate: date });
        break;
      default:
        break;
    }
  };

  // Code for crop image  Start
  const imageRef = useRef(null);
  const previewCanvasRef = useRef();

  const handleFile = (e) => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setFormData({ ...formData, src: fileReader.result });
    };
    console.log("e.target.files[0]", e.target.files[0]);
    fileReader.readAsDataURL(e.target.files[0]);
  };

  const onImageLoaded = (image) => {
    imageRef.current = image;
  };

  const onCropChange = (crop) => {
    setFormData({ ...formData, crop: crop });
  };

  const onCropComplete = (crop) => {
    if (imageRef.current && crop.width && crop.height) {
      getCroppedImg(imageRef.current, crop);
    }
  };
  const getCroppedImg = (image, crop) => {
    const canvas = previewCanvasRef.current;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const reader = new FileReader();
    canvas.toBlob((blob) => {
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        dataURLtoFile(reader.result, "cropped.jpg");
      };
    });
  };

  const dataURLtoFile = (dataurl, filename) => {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    let croppedImage = new File([u8arr], filename, { type: mime });
    console.log("croppedImage", croppedImage);
    setFormData({ ...formData, croppedImage: croppedImage });
  };
  // Code for crop image End

  //CKEditor code
  const handelDescriptionChange = (event) => {
    setFormData({ ...formData, description: event.editor.getData() });
  };

  //submit form
  const onSubmit = (e) => {
    e.preventDefault();
    edit(formData, history, currentEvent._id);
  };

  //cancel form submit
  const onClickHandel = (e) => {
    e.preventDefault();
    cancelSave(history);
  };

  return (
    <div className="createTickets">
      <div className="box">
        <div className="createTickets__inner--box">
          <h2 className="heading-3 para--dark-2 u-margin-bottom-medium">
            Edit Event
          </h2>
          <Form
            className="form"
            onSubmit={(e) => onSubmit(e)}
            encType="multipart/form-data"
          >
            <p className="para--size-20 para--dark-2">Edit Event Basic Info</p>
            <div className="form__box-2 ">
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                />
                <Label htmlFor="name" className="form__label">
                  Event Name*
                </Label>
                <Errors current_key="name" key="name" />
              </div>
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="tags"
                  id="tags"
                  value={tags}
                  onChange={(e) => onChange(e)}
                />
                <Label htmlFor="tags" className="form__label">
                  Tag
                </Label>
                <Errors current_key="tags" key="tags" />
              </div>
              <select
                name="eventType"
                value={eventType}
                className="form__select form__select__size-2"
                onChange={(e) => onChange(e)}
              >
                <option>Select Event Type</option>
                {Constants.EVENT_TYPE.map((type) => {
                  return (
                    <option key={type.id} value={type.id}>
                      {type.value}
                    </option>
                  );
                })}
              </select>
              <Errors current_key="eventType" key="eventType" />
              <select
                name="eventCategoryId"
                className="form__select form__select__size-2"
                onChange={(e) => onChange(e)}
                value={eventCategoryId}
              >
                <option>Select Event Category</option>
                {Constants.EVENT_CATEGORY_TYPE.map((type) => {
                  return (
                    <option key={type.id} value={type.id}>
                      {type.value}
                    </option>
                  );
                })}
              </select>
              <Errors current_key="eventCategoryId" key="eventCategoryId" />
              {
                (eventCategoryId === "5f84011eb16923dea786c806")?(
                  <>
                    <select
                      name="eventSubCategoryId"
                      className="form__select form__select__size-2"
                      onChange={(e) => onChange(e)}
                      value={eventSubCategoryId}
                    >
                      <option>Select Sub Category</option>
                      {Constants.EVENT_SUB_CATEGORY_TYPE.map((type) => {
                        return (
                          <option key={type.id} value={type.id}>
                            {type.value}
                          </option>
                        );
                      })}
                    </select>
                    <Errors current_key="eventSubCategoryId" key="eventSubCategoryId" />
                  </>
                ):("")
              }
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="organizerName"
                  id="organizerName"
                  value={organizerName}
                  onChange={(e) => onChange(e)}
                />
                <Label htmlFor="organizerName" className="form__label">
                  Organizer Name
                </Label>
                <Errors current_key="organizerName" key="organizerName" />
              </div>
            </div>

            <p className="para--size-20 para--dark-2 u-margin-top-medium">
              Event Location
            </p>
            <div className="form__box-2 ">
              <select
                className="form__select form__select__size-2"
                name="eventLocation"
                value={eventLocation}
                onChange={(e) => onChange(e)}
              >
                <option>Select Event Location</option>
                {Constants.EVENT_LOCATION.map((type) => {
                  return (
                    <option key={type.id} value={type.id}>
                      {type.value}
                    </option>
                  );
                })}
              </select>
              <Errors current_key="eventLocation" key="eventLocation" />
              {locationVisible ? (
                <>
                  <select
                    name="country"
                    className="form__select form__select__size-2"
                    value={country}
                    onChange={(e) => onChange(e)}
                  >
                    <option>Select Country</option>
                    {Constants.COUNTRIES.map((type) => {
                      return (
                        <option key={type.id} value={type.id}>
                          {type.value}
                        </option>
                      );
                    })}
                  </select>
                  <Errors current_key="country" key="country" />
                  <div className="form__group">
                    <Input
                      className="form__input"
                      type="text"
                      name="states"
                      id="states"
                      value={states}
                      onChange={(e) => onChange(e)}
                    />
                    <Label htmlFor="states" className="form__label">
                      states
                    </Label>
                    <Errors current_key="states" key="states" />
                  </div>

                  <div className="form__group">
                    <Input
                      className="form__input"
                      type="text"
                      name="city"
                      id="city"
                      value={city}
                      onChange={(e) => onChange(e)}
                    />
                    <Label htmlFor="city" className="form__label">
                      City
                    </Label>
                    <Errors current_key="city" key="city" />
                  </div>
                  <div className="form__group">
                    <Input
                      className="form__input"
                      type="text"
                      name="pincode"
                      id="pincode"
                      value={pincode}
                      onChange={(e) => onChange(e)}
                    />
                    <Label htmlFor="pincode" className="form__label">
                      Pin Code
                    </Label>
                    <Errors current_key="pin code" key="pin code" />
                  </div>
                </>
              ) : (
                <>
                  <div className="form__group">
                    <Input
                      className="form__input"
                      type="text"
                      name="eventLink"
                      id="eventLink"
                      value={eventLink}
                      onChange={(e) => onChange(e)}
                    />
                    <Label htmlFor="eventLink" className="form__label">
                      Event Link
                    </Label>
                    <Errors current_key="eventLink" key="eventLink" />
                  </div>
                </>
              )}
            </div>

            <p className="para--size-20 para--dark-2 u-margin-top-medium">
              Event Date and time
            </p>
            <div className="form__box-2 ">
              <div className="form__group">
                <DatePicker
                  format={Constants.DATE_FORMATE}
                  className="form__input"
                  selected={eventStartDate}
                  onChange={(e) => handleChange(e, "eventStartDate")}
                  placeholderText="Event Start Date"                />
                  <Label
                    htmlFor="eventStartDate"
                    className="form__label1"
                  >
                    Event Start Date
                  </Label>
              </div>
              <div className="form__group">
                <DatePicker
                  className="form__input"
                  selected={eventEndDate}
                  onChange={(e) => handleChange(e, "eventEndDate")}
                  placeholderText="Event End Date"
                />
                <Label
                  htmlFor="eventEndDate"
                  className="form__label1"
                >
                  Event End Date
                </Label>
              </div>
            </div>

            <p className="para--size-20 para--dark-2 u-margin-top-medium">
              Booking Date and time
            </p>
            <div className="form__box-2 ">
              <div className="form__group">
                <DatePicker
                  className="form__input"
                  selected={bookingStartDate}
                  onChange={(e) => handleChange(e, "bookingStartDate")}
                  placeholderText="Booking Start Date"
                />
                <Label
                  htmlFor="bookingStartDate"
                  className="form__label1"
                >
                  Booking Start Date
                </Label>
              </div>
              <div className="form__group">
                <DatePicker
                  className="form__input"
                  selected={bookingEndDate}
                  onChange={(e) => handleChange(e, "bookingEndDate")}
                  placeholderText="Booking End Date"
                />
                <Label
                  htmlFor="bookingEndDate"
                  className="form__label1"
                >
                  Booking End Date
                </Label>
              </div>
            </div>

            <p className="para--size-20 para--dark-2 u-margin-top-medium">
              Main Event Image
            </p>
            <div className="form__group">
              <Label htmlFor="file__upload" className="form__file">
                <i
                  className="form__file--icon"
                  data-spec="icon"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 20h20V4H2v16zm1-1h18V5H3v14z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.5 7C15.1 7 14 8.1 14 9.5s1.1 2.5 2.5 2.5S19 10.9 19 9.5 17.9 7 16.5 7zm0 4c-.8 0-1.5-.7-1.5-1.5S15.7 8 16.5 8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM15.5 13l-.7.8-3.5-3.8-6.4 7H19.1l-3.6-4zm-8.3 3l4.1-4.4 2.7 3 .7.8.7-.8 1.4 1.5H7.2z"
                    ></path>
                  </svg>
                </i>
                <p className="para form__file--text">
                  Click to add your main event image,high quality image size:
                  2160x1080px (2:1 ratio)
                </p>
                <p className="para form__file--text--sub">
                  {" "}
                  JPEG or PNG, no larger than 5MB
                </p>
                <input
                  type="file"
                  id="profile_pic"
                  onChange={(e) => handleFile(e)}
                />

                {src ? (
                  <>
                    <ReactCrop
                      src={src}
                      crop={crop}
                      onImageLoaded={onImageLoaded}
                      onComplete={onCropComplete}
                      onChange={onCropChange}
                    />
                    <canvas
                      ref={previewCanvasRef}
                      style={{
                        marginTop: "5px",
                        width: 300,
                        height: 200,
                      }}
                    />
                  </>
                ) : (
                  imageCover && (
                    <img
                      alt="eventCoverImage"
                      width="200px"
                      src={Constants.SERVER_URL + "/event/" + imageCover}
                    />
                  )
                )}
              </Label>
            </div>

            <p className="para--size-20 para--dark-2 u-margin-top-medium">
              Event Description
            </p>
            <div className="form__group">
              <CKEditor
                data={description}
                id="description"
                name="description"
                config={{
                  height: 100,
                  toolbar: [
                    ["Cut", "Copy", "Paste"],
                    ["Undo", "Redo"],
                    ["SpellChecker"],
                    ["Link", "Unlink", "Anchor"],
                    ["Image", "Table", "Horizontal Line", "Special Character"],
                    ["Maximize"],
                    ["Source"],
                    ["Bold", "Italic", "Strike"],
                    ["RemoveFormat"],
                    ["NumberedList", "BulletedList"],
                    ["DecreaseIndent", "IncreaseIndent"],
                    ["BlockQuote"],
                    ["Styles"],
                    ["Format"],
                    ["About"],
                  ],
                }}
                onChange={(event) => handelDescriptionChange(event)}
                required
                // onBeforeLoad={(CKEDITOR) => (CKEDITOR.disableAutoInline = true)}
                invalid={errorList.description ? true : false}
              />
              <Errors current_key="description" key="description" />
            </div>

            <p className="para--size-20 para--dark-2 u-margin-top-medium">
              Event Guide Info
            </p>
            <div className="form__box-2 ">
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="guide_name"
                  id="guide_name"
                  value={guide_name}
                  onChange={(e) => onChange(e)}
                />
                <Label htmlFor="guide_name" className="form__label">
                  Name*
                </Label>
                <Errors current_key="guide_name" key="guide_name" />
              </div>
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => onChange(e)}
                />
                <Label htmlFor="phone" className="form__label">
                  Phone Number*
                </Label>
                <Errors current_key="phone" key="phone" />
              </div>

              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                />
                <Label htmlFor="email" className="form__label">
                  Email*
                </Label>
                <Errors current_key="email" key="email" />
              </div>
            </div>

            <div className="form__group u-margin-top-medium">
              {loading ? (
                <Button className="btn btn--blue float-right" type="submit">
                  <div className="loader"></div>
                </Button>
              ) : (
                <Button className="btn btn--blue float-right" type="submit">
                  Submit
                </Button>
              )}

              <Button
                className="btn--white float-left"
                type="button"
                onClick={(e) => onClickHandel(e)}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

EditEvent.propTypes = {
  edit: PropTypes.func.isRequired,
  cancelSave: PropTypes.func.isRequired,
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
  edit,
  cancelSave,
  getEventById,
})(EditEvent);
