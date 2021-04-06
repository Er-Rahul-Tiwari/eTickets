const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const tokenSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please tell us your first name!']
  },
  lastName: {
    type: String,
    required: [true, 'Please tell us your last name!']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    // unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  // role: {
  //   type: [String],
  //   // enum: ['user', 'guide', 'lead-guide', 'admin'],
  //   default: ['user']
  // },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!'
    }
  },
  confirmationToken: String,
  confirmationTokenExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});

tokenSchema.methods.createConfirmationToken = function() {
  const emailToken = crypto.randomBytes(32).toString('hex');

  this.confirmationToken = crypto
    .createHash('sha256')
    .update(emailToken)
    .digest('hex');

  // console.log({ resetToken }, this.passwordResetToken);

  this.confirmationTokenExpires = Date.now() + 12 * 60 * 60 * 1000;

  return emailToken;
};

const Token = mongoose.model('EmailToken', tokenSchema);

module.exports = Token;

