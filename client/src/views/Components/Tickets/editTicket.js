import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { create, cancelSave } from "actions/ticket";
import { Button, Form, Input, Label } from "reactstrap";
import * as Constants from "constants/index";
import CKEditor from "ckeditor4-react";
import Errors from "views/Notifications/Errors";

const EditTicket = ({ create, cancelSave, errorList, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    ticketType: "",
    currency: "",
    price: "",
    quantity: "",
    active: "",
    dateTimeStart: "",
    dateTimeEnd: "",
  });
  const {
    name,
    ticketType,
    currency,
    price,
    dateTimeStart,
    dateTimeEnd,
  } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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

  return (
    <div className="createTickets">
      <div className="box">
        <div className="createTickets__inner--box">
          <h2 className="heading-2 heading-2--dark-2 u-margin-bottom-medium">
            Edit Ticket
          </h2>
          <Form
            className="form"
            onSubmit={(e) => onSubmit(e)}
            encType="multipart/form-data"
          >
            <div className="">
              <p className="para--size-18 para--dark-2">
                Edit Ticket Name & Time
              </p>
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
                    Ticket Name*
                  </Label>
                  <Errors current_key="name" key="name" />
                </div>
                <div className="form__group">
                  <Input
                    className="form__input"
                    type="text"
                    name="eventStartTime"
                    id="eventStartTime"
                    placeholder="12:01"
                    // value={}
                    onChange={(e) => onChange(e)}
                  />
                  <Label htmlFor="eventStartTime" className="form__label">
                    Event start Timing
                  </Label>
                  <Errors
                    current_key="event Start Time"
                    key="event Start Time"
                  />
                </div>
              </div>

              <p className="para--size-18 para--dark-2 u-margin-top-medium">
                Dates
              </p>
              <div className="form__box-2">
                <div className="form__group">
                  <Input
                    className="form__input"
                    type="date"
                    name="dateTimeStart"
                    id="dateTimeStart"
                    value={dateTimeStart}
                    onChange={(e) => onChange(e)}
                  />
                  <Label htmlFor="dateTimeStart" className="form__label">
                    Start ticket validity*
                  </Label>
                  <Errors current_key="date Time Start" key="date Time Start" />
                </div>
                <div className="form__group">
                  <Input
                    className="form__input"
                    type="date"
                    name="dateTimeEnd"
                    id="dateTimeEnd"
                    value={dateTimeEnd}
                    onChange={(e) => onChange(e)}
                  />
                  <Label htmlFor="dateTimeEnd" className="form__label">
                    End ticket validity*
                  </Label>
                  <Errors current_key="date Time End" key="date Time End" />
                </div>
                <div className="form__group">
                  <Input
                    className="form__input"
                    type="date"
                    name="ticketSellDateStart"
                    id="ticketSellDateStart"
                    // value={ticketSellDateStart}
                    onChange={(e) => onChange(e)}
                  />
                  <Label htmlFor="ticketSellDateStart" className="form__label">
                    Start Selling date*
                  </Label>
                  <Errors
                    current_key="ticket Sell Date Start"
                    key="ticket Sell Date Start"
                  />
                </div>
                <div className="form__group">
                  <Input
                    className="form__input"
                    type="date"
                    name="ticketSellDateEnd"
                    id="ticketSellDateEnd"
                    // value={ticketSellDateEnd}
                    onChange={(e) => onChange(e)}
                  />
                  <Label htmlFor="ticketSellDateEnd" className="form__label">
                    End selling date*
                  </Label>
                  <Errors
                    current_key="ticket sell date end"
                    key="ticket sell date end"
                  />
                </div>
              </div>

              <p className="para--size-18 para--dark-2 u-margin-top-medium">
                Price Info
              </p>
              <div className="form__box-2">
                <select
                  className="form__select form__select__size-2"
                  name="ticketType"
                  // id="ticketType"
                  value={ticketType}
                  onChange={(e) => onChange(e)}
                >
                  <option>Price Type</option>
                  {Constants.TICKET_PRICE_INFO.map((type) => {
                    return (
                      <option key={type.id} value={type.id}>
                        {type.value}
                      </option>
                    );
                  })}
                </select>
                <Errors current_key="Price Type" key="Price Type" />
                <select
                  className="form__select form__select__size-2"
                  name="currency"
                  // id="currency"
                  value={currency}
                  onChange={(e) => onChange(e)}
                >
                  <option>Currency</option>
                  {Constants.CURRENCY.map((type) => {
                    return (
                      <option key={type.id} value={type.id}>
                        {type.value}
                      </option>
                    );
                  })}
                </select>
                <Errors current_key="currency" key="currency" />

                <div className="form__group">
                  <Input
                    className="form__input"
                    type="text"
                    name="price"
                    id="price"
                    value={price}
                    onChange={(e) => onChange(e)}
                  />
                  <Label htmlFor="price" className="form__label">
                    Ticket Price
                  </Label>
                  <Errors current_key="price" key="price" />
                </div>
                <select
                  className="form__select form__select__size-2"
                  name="paymentGatewayCharge"
                  placeholder="18"
                  // value={paymentGatewayCharge}
                  onChange={(e) => onChange(e)}
                >
                  <option>payment gateway charge</option>
                  {Constants.TICKET_TAX_WHO_WILL_PAY.map((type) => {
                    return (
                      <option key={type.id} value={type.id}>
                        {type.value}
                      </option>
                    );
                  })}
                </select>
                <Errors
                  current_key="payment gateway charge"
                  key="payment gateway charge"
                />
              </div>

              <p className="para--size-18 para--dark-2 u-margin-top-medium">
                Seats Info
              </p>
              <div className="form__box-2">
                <select
                  class="form__select form__select__size-2"
                  name="ticketSeat"
                  // value={ticketSeat}
                  onChange={(e) => onChange(e)}
                >
                  <option>Available Seats</option>
                  {Constants.TICKET_SEAT.map((type) => {
                    return (
                      <option key={type.id} value={type.id}>
                        {type.value}
                      </option>
                    );
                  })}
                </select>
                <Errors current_key="available seats" key="available seats" />
                <div className="form__group">
                  <Input
                    className="form__input"
                    type="text"
                    name="seatAvailable"
                    id="seatAvailable"
                    // value={availabelSeatNumber}
                    onChange={(e) => onChange(e)}
                  />
                  <Label htmlFor="seatAvailable" className="form__label">
                    Available seats
                  </Label>
                  <Errors
                    current_key="available seat number"
                    key="available seat number"
                  />
                </div>

                <select
                  class="form__select form__select__size-2"
                  name="status"
                  // value={status}
                  onChange={(e) => onChange(e)}
                >
                  <option>Status</option>
                  {Constants.TICKET_STATUS.map((type) => {
                    return (
                      <option key={type.id} value={type.id}>
                        {type.value}
                      </option>
                    );
                  })}
                </select>
                <Errors current_key="status" key="status" />
                <div className="form__group">
                  <Input
                    className="form__input"
                    type="text"
                    name="memberPerTicket"
                    id="memberPerTicket"
                    // value={memberPerTicketAllow}
                    onChange={(e) => onChange(e)}
                  />
                  <Label htmlFor="memberPerTicket" className="form__label">
                    member allow per ticket
                  </Label>
                  <Errors
                    current_key="per ticket member allow"
                    key="per ticket member allow"
                  />
                </div>
                <p className="para para--size-11">
                  Do you want to live your ticket
                </p>
              </div>

              <p className="para--size-18 para--dark-2 u-margin-top-medium">
                Ticket Terms & Conditions
              </p>
              <div className="form__group">
                <CKEditor
                  // data={termsConditions}
                  id="termsConditions"
                  name="termsConditions"
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
                  // invalid={errorList.termsConditions ? true : false}
                />
                <Errors
                  current_key="terms and Conditions"
                  key="terms and Conditions"
                />
              </div>
            </div>

            <div className="bottom__underline"></div>

            <div className="bottom__underline"></div>

            <div className="form__group">
              <Button
                className="btn--white float-left u-margin-right-small"
                type="button"
                onClick={(e) => onClickHandel(e)}
              >
                cancel
              </Button>
              <Button
                className="btn btn--blue float-right u-margin-left-small"
                type="button"
              >
                Submit
              </Button>
              <Button className="btn btn--white float-right" type="submit">
                {" "}
                + Add New Ticket
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

EditTicket.propTypes = {
  create: PropTypes.func.isRequired,
  cancelSave: PropTypes.func.isRequired,
  errorList: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  loading: state.ticket.loading,
  errorList: state.errors,
});

export default connect(mapStateToProps, {
  create,
  cancelSave,
})(EditTicket);
