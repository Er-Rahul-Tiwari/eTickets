import React, { useState, useRef, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userProfileUpdate, cancelSave } from "actions/profile";
import { Button, Form, Input, Label } from "reactstrap";
import * as Constants from "constants/index";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import CKEditor from "ckeditor4-react";
import Errors from "views/Notifications/Errors";
import Spinner from "views/Spinner";
import {
  USER_TYPE_MANAGER,
  USER_TYPE_ADMIN,
  SERVER_URL,
} from "constants/index";

const ProfileSetting = ({
  userProfileUpdate,
  cancelSave,
  errorList,
  history,
  loading,
  loadingProfile,
  user,
}) => {
  const [toggle, setToggle] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: "",
    role: "",
    phoneNumber: "",
    address: "",
    companyName: "",
    password: "",
    passwordConfirm: "",

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

    summary: "",
    website: "",
    facebook: "",
    twitter: "",
    linkedIn: "",
    youtube: "",
  });

  const {
    name,
    email,
    photo,
    role,
    phoneNumber,
    address,
    companyName,
    passwordCurrent,
    password,
    passwordConfirm,

    crop,
    src,

    summary,
    website,
    facebook,
    twitter,
    linkedIn,
    youtube,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    if(user){
      setFormData({
        ...formData,
        name: user.name? user.name:'',
        email: user.email? user.email:'',
        phoneNumber:user? user.phoneNumber:'',
        photo:user? user.photo:'',
        role:user? user.role:'',
        companyName:user? user.companyName:'',
        address:user? user.address:'',
        summary:user? user.summary:'',

        website:user? user.website:'',
        twitter: user.socialHandles?(user.socialHandles.twitter?user.socialHandles.twitter:''):'',
        facebook: user.socialHandles?(user.socialHandles.facebook?user.socialHandles.facebook:''):'',
        linkedIn: user.socialHandles?(user.socialHandles.linkedIn?user.socialHandles.linkedIn:''):'',
        youtube: user.socialHandles?(user.socialHandles.youtube?user.socialHandles.youtube:''):'',
      })
    }
  },[user])
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
    console.log("formData File",formData);
    e.preventDefault();
    userProfileUpdate(formData, history);
  };

  //cancel form submit
  const onClickHandel = (e) => {
    e.preventDefault();
    cancelSave(history);
  };

  // Toggle
  const clickToggle = () => {
    setToggle(!toggle);
  };

  return loadingProfile ? (
    <Spinner />
  ) : (
    <div className="profileSetting">
      <div className="box">
        <div className="profileSetting__inner--box">
          <Form
            className="form"
            onSubmit={(e) => onSubmit(e)}
            encType="multipart/form-data"
          >
            <p className="para--size-18 para--dark-2">Profile Info & Url</p>
            <div className="u-margin-bottom-small">
              <div className="form__box-2">
                <div className="form__group">
                  <Input
                    className="form__input"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => onChange(e)}
                  />
                  <Errors current_key="name" key="name" />
                  <Label htmlFor="name" className="form__label">
                    First Name*
                  </Label>
                </div>
                <div className="form__group">
                  <Input
                    className="form__input"
                    type="url"
                    name="website"
                    id="website"
                    value={website}
                    onChange={(e) => onChange(e)}
                  />
                  <Label htmlFor="website" className="form__label1">
                    Website url
                  </Label>
                  <Errors current_key="website" key="website" />
                </div>
              </div>
            </div>

            <div className="u-margin-bottom-small">
              <div className="form__box-2">
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
                    Last Name*
                  </Label>
                  <Errors current_key="name" key="name" />
                </div>
                <div className="form__group">
                  <Input
                    className="form__input"
                    type="url"
                    name="twitter"
                    id="twitter"
                    value={twitter}
                    onChange={(e) => onChange(e)}
                  />
                  <Errors current_key="twitter" key="twitter" />
                  <Label htmlFor="twitter" className="form__label1">
                    Twitter Url
                  </Label>
                </div>
              </div>
            </div>
            <div className="u-margin-bottom-small">
              <div className="form__box-2">
                <div className="form__group">
                  <Input
                    className="form__input"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                  />
                  <Errors current_key="email" key="email" />
                  <Label htmlFor="email" className="form__label">
                    Email
                  </Label>
                </div>
                <div className="form__group">
                  <Input
                    className="form__input"
                    type="url"
                    name="facebook"
                    id="facebook"
                    value={facebook}
                    onChange={(e) => onChange(e)}
                  />
                  <Errors current_key="facebook" key="facebook" />
                  <Label htmlFor="facebook" className="form__label1">
                    Facebook Url
                  </Label>
                </div>
              </div>
            </div>
            <div className="u-margin-bottom-small">
              <div className="form__box-2">
                <div className="form__group">
                  <Input
                    className="form__input"
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => onChange(e)}
                  />
                  <Errors current_key="phoneNumber" key="phoneNumber" />
                  <Label htmlFor="phoneNumber" className="form__label">
                    Phone Number
                  </Label>
                </div>
                <div className="form__group">

                <Input
                    className="form__input"
                    type="url"
                    name="linkedIn"
                    id="linkedIn"
                    value={linkedIn}
                    onChange={(e) => onChange(e)}
                  />
                  <Label htmlFor="linkedIn" className="form__label1">
                    linkedIn url
                  </Label>
                  <Errors current_key="linkedIn" key="linkedIn" />
                </div>
              </div>
            </div>

            <div className="u-margin-bottom-small">
              <div className="form__box-2">
                <div className="form__group">
                  <Input
                    className="form__input"
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={companyName}
                    onChange={(e) => onChange(e)}
                  />
                  <Errors current_key="companyName" key="companyName" />
                  <Label htmlFor="companyName" className="form__label">
                    organisation Name
                  </Label>
                </div>
                <div className="form__group">
                  <Input
                    className="form__input"
                    type="url"
                    name="youtube"
                    id="youtube"
                    value={youtube}
                    onChange={(e) => onChange(e)}
                  />
                  <Errors current_key="youtube" key="youtube" />
                  <Label htmlFor="youtube" className="form__label1">
                    Youtube Url
                  </Label>
                </div>
              </div>
            </div>

            <div className="u-margin-bottom-small">
              <div className="form__box-2">
                <div className="form__group">
                  <Input
                    className="form__input"
                    name="role"
                    id="role"
                    value={
                      user.role.length > 1
                        ? user.role.map((userRole, index) =>
                            user.role.length !== index + 1
                              ? userRole === USER_TYPE_MANAGER
                                ? "Manager"
                                : userRole === USER_TYPE_ADMIN
                                ? "Admin"
                                : "User"
                              : userRole === USER_TYPE_MANAGER
                              ? "Event Manager"
                              : userRole === USER_TYPE_ADMIN
                              ? "Admin"
                              : "User"
                          )
                        : user.role
                    }
                    onChange={(e) => onChange(e)}
                  />
                  <Errors current_key="role" key="role" />
                  <Label htmlFor="role" className="form__label">
                    Role
                  </Label>
                </div>
              </div>
            </div>

            <div className="u-margin-bottom-small">
              <div className="form__box-2">
                <div className="form__group">
                  <Input
                    className="form__input"
                    name="address"
                    id="address"
                    value={address}
                    onChange={(e) => onChange(e)}
                  />
                  <Errors current_key="address" key="address" />
                  <Label htmlFor="address" className="form__label">
                    Address
                  </Label>
                </div>
              </div>
            </div>

            <div className="u-margin-bottom-small">
              <div className="form__box-2">
                <div className="form__group">
                  <Input
                    className="form__input"
                    type={toggle ? "password" : "text"}
                    name="passwordCurrent"
                    id="passwordCurrent"
                    value={passwordCurrent}
                    // value='pass1234'
                    onChange={(e) => onChange(e)}
                    // invalid={errorList.passwordCurrent ? true : false}
                    // required
                  />
                  <Errors current_key="passwordCurrent" key="passsword" />
                  <Label htmlFor="passwordCurrent" className="form__label">
                    Current Password
                  </Label>
                  <span
                    className="form__toggle para--size-10 text-upper para--dark-2"
                    onClick={clickToggle}
                  >
                    {toggle ? "see" : "Hide"}
                  </span>
                </div>
              </div>
            </div>

            <div className="u-margin-bottom-small">
              <div className="form__box-2">
                <div className="form__group">
                  <Input
                    className="form__input"
                    type={toggle ? "password" : "text"}
                    name="password"
                    id="password"
                    value={password}
                    // value='pass1234'

                    onChange={(e) => onChange(e)}
                  />
                  <Errors current_key="password" key="password" />
                  <Label htmlFor="password" className="form__label">
                    New Password
                  </Label>
                  <span
                    className="form__toggle para--size-10 text-upper para--dark-2"
                    onClick={clickToggle}
                  >
                    {toggle ? "see" : "Hide"}
                  </span>
                </div>
              </div>
            </div>
            <div className="u-margin-bottom-small">
              <div className="form__box-2">
                <div className="form__group">
                  <Input
                    className="form__input"
                    type={toggle ? "password" : "text"}
                    name="passwordConfirm"
                    id="passwordConfirm"
                    value={passwordConfirm}
                    // value='pass1234'
                    onChange={(e) => onChange(e)}
                  />
                  <Errors current_key="passwordConfirm" key="passwordConfirm" />
                  <Label htmlFor="passwordConfirm" className="form__label">
                    New Password Confirm
                  </Label>
                  <span
                    className="form__toggle para--size-10 text-upper para--dark-2"
                    onClick={clickToggle}
                  >
                    {toggle ? "see" : "Hide"}
                  </span>
                </div>
              </div>
            </div>
            <div className="u-margin-bottom-small">
              <div className="form__box">
                <p className="para--size-18 para--dark-2">Biography</p>

                <div className="form__group">
                  <CKEditor
                    data={summary}
                    id="summary"
                    name="summary"
                    config={{
                      height: 100,
                      toolbar: [
                        ["Cut", "Copy", "Paste"],
                        ["Undo", "Redo"],
                        ["SpellChecker"],
                        ["Link", "Unlink", "Anchor"],
                        [
                          "Image",
                          "Table",
                          "Horizontal Line",
                          "Special Character",
                        ],
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
                    onBeforeLoad={(CKEDITOR) =>
                      (CKEDITOR.disableAutoInline = true)
                    }
                    invalid={errorList.summary ? true : false}
                  />
                  <Errors current_key="summary" key="summary" />
                </div>
              </div>
            </div>

            <div className="bottom-_line"></div>
            <p className="para--size-18 para--dark-2">Profile Picture</p>
            <div className="u-margin-bottom-small">
              <div className="form__box-2">
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
                      Click to add your main event image,high quality image
                      size: 2160x1080px (2:1 ratio)
                    </p>
                    <p className="para form__file--text--sub">
                      {" "}
                      JPEG or PNG, no larger than 5MB
                    </p>
                    <input
                      type="file"
                      id="profile_pic"
                      value={photo}
                      onChange={(e) => handleFile(e)}
                    />
                    {src && (
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
                            width: crop.width ? crop.width : 0,
                            height: crop.height ? crop.height : 0,
                          }}
                        />
                      </>
                    )}
                  </Label>
                  <div className="u-margin-top-small clearfix">
                    <span className="para--size-11 float-left">
                      No file selected
                    </span>
                    <Button className="btn btn--blue float-right">
                      Upload
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom__line"></div>

            <div className="form__group u-margin-top-medium">
              {loading ? (
                <Button className="btn btn--blue float-right" type="button">
                  <div className="loader"></div>
                </Button>
              ) : (
                <Button className="btn btn--blue float-right" type="submit">
                  Profile Update
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

ProfileSetting.propTypes = {
  userProfileUpdate: PropTypes.func.isRequired,
  // loadingProfile: PropTypes.bool.isRequired,
  // listLoading: PropTypes.bool.isRequired,

  // cancelSave: PropTypes.func.isRequired,
  errorList: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  // loading: state.event.loading,
  errorList: state.errors,

  loadingProfile: state.profile.loading,
  user: state.profile.user,
});

export default connect(mapStateToProps, {
  userProfileUpdate,
  cancelSave,
})(ProfileSetting);
