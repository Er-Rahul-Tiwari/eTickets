import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { create, cancelSave } from "actions/event";
import { Button, Form, Input, Label } from "reactstrap";
import * as Constants from "constants/index";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import CKEditor from "ckeditor4-react";
import Errors from "views/Notifications/Errors";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

const CreateEvents = ({ create, cancelSave, errorList, history, loading }) => { 
  const [formData, setFormData] = useState({
    name: "",
    tags: "",
    tagArr: [],
    eventType: "",
    eventSubCategoryId: "",
    organizerId: "",
    eventCategoryId: "",
    venueType: "venue",
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
  });
  const [locationVisible, setLocationVisiable] = useState(true);
  const [venueLinkVisible, setVenueLinkVisible] = useState(false);
  const {
    name,
    tags,tagArr,
    eventType,
    eventSubCategoryId,
    organizerId,
    eventCategoryId,
    venueType,
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
  } = formData;

  const onChange = (e) => {
    switch (e.target.name) {
      case "venueType":
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (e.target.value === "venue") {
          setLocationVisiable(true);
          setVenueLinkVisible(false);
        } else if(e.target.value === "online" ){
          setLocationVisiable(false);
          setVenueLinkVisible(true);
        }else{
          setLocationVisiable(false);
          setVenueLinkVisible(false);
        }
        break;

      default:
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
    // console.log("e.target.files[0]", e.target.files[0]);
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
    // console.log("croppedImage", croppedImage);
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
    create(formData, history);
  };

  //cancel form submit
  const onClickHandel = (e) => {
    e.preventDefault();
    cancelSave(history);
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

  //add remove tags
  const addRemoveTags = ( type, index)=>{  
    if(type === 'add'){
      tagArr.push(tags);
    }else{
      tagArr.splice(index, 1);
    }
    setFormData({...formData, tagArr,tags:'' }); 
  }

  return (
    <div className="createTickets">
          <Form
            className="form"
            onSubmit={(e) => onSubmit(e)}
            encType="multipart/form-data"
          >
      <div className="createEvent--sub">
            <p className="para--size-20 para--dark-2">
              Create Event Basic Info
            </p>
        <div className="createTicket">
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
              <select
                name="eventType"
                value={eventType}
                className="form__select form__select__size-2 form__height form__width"
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
                className="form__select form__select__size-2 form__height form__width"
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
                      className="form__select form__select__size-2 form__height form__width"
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
              <select
                name="organizerId"
                className="form__select form__select__size-2 form__height form__width"
                onChange={(e) => onChange(e)}
                value={organizerId}
              >
                {Constants.EVENT_ORGANIZER.map((type) => {
                  return (
                    <option key={type.id} value={type.id}>
                      {type.value}
                    </option>
                  );
                })}
              </select>
              <Errors current_key="organizerId" key="organizerId" />

</div>
</div>
        </Form>
    </div>
  );
};

CreateEvents.propTypes = {
  create: PropTypes.func.isRequired,
  cancelSave: PropTypes.func.isRequired,
  errorList: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  loading: state.event.loading,
  errorList: state.errors,
});

export default connect(mapStateToProps, {
  create,
  cancelSave,
})(CreateEvents);
