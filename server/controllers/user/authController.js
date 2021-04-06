const crypto = require('crypto');
const { check, validationResult } = require('express-validator');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../../models/userModel');
const Token = require('../../models/verifyToken');
const catchAsync = require('../../utils/catchAsync');
const Event = require('../../models/eventModel');
const AppError = require('../../utils/appError');
const Email = require('../../utils/email');
const response = require('../../utils/response');


exports.exposedCookie = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
  });

  // Remove password from output
  user.password = undefined;
  user.passwordConfirm = undefined;

  res.status(statusCode).json({
    status: true,
    statusCode: statusCode,
    token,
    data: {
      user
    }
  });
};

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};


const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  });

  // Remove password from output
  user.password = undefined;
  user.passwordConfirm = undefined;

  res.status(statusCode).json({
    status: true,
    statusCode: statusCode,
    token,
    data: {
      user,
    },
  });

  // response.successResponse(res, user,
  //   'User authenticated', statusCode, true);
};

// exports.signup = catchAsync(async (req, res, next) => {
//   const newUser = await User.create({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     passwordConfirm: req.body.passwordConfirm
//   });

//   const url = `${req.protocol}://${req.get('host')}/me`;
//   console.log(url);
//   await new Email(newUser, url).sendWelcome();

//   createSendToken(newUser, 201, req, res);
// });

exports.signup = catchAsync(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return response.errorResponse(res, errors.array(), errors.msg, 200, false);
  }

  // 1) Get user based on POSTed email
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return next(new AppError('User exists, try login', 200));
  }
  console.log(req.body);
  // var token = await Token.save({email: req.body.email});
  const token = await Token.create(req.body);

  const emailToken = token.createConfirmationToken();
  await token.save({ validateBeforeSave: false });

  // 3) Send it to user's email
  try {
    const resetURL = `${req.protocol}://${process.env.APP_URL}/confirmAccount/${emailToken}`;
    await new Email(token, resetURL).confirmationMail();
    // 2) Generate the random reset token
    return response.successResponse(res, {}, "Token sent to email!", 200, true);
  } catch (err) {
    await Token.deleteMany({ email: req.body.email });
    // token.confirmationToken = undefined;
    // token.confirmationTokenExpires = undefined;
    // await token.save({ validateBeforeSave: false });
    console.log(err);

    return response.errorResponse(
      res,
      err,
      "There was an error sending the email. Try again later!",
      500,
      false
    );

    // return next(
    //   new AppError('There was an error sending the email. Try again later!'),
    //   500
    // );
  }
});

exports.confirmAccount = catchAsync(async (req, res, next) => {
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await Token.findOne({
    confirmationToken: hashedToken,
    confirmationTokenExpires: { $gt: Date.now() },
  });

  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    await Token.deleteOne({ confirmationToken: hashedToken });
    // return next(new AppError('Token is invalid or expired', 400));
    return response.errorResponse(res, 'Token is invalid or expired', 'Token is invalid or expired', 200, false)
  }

  user.confirmationToken = undefined;
  user.confirmationTokenExpires = undefined;
  await user.save({ validateBeforeSave: false });

  console.log(user);
  await User.create({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    passwordConfirm: user.passwordConfirm,
  });

  const url = `${req.protocol}://${req.get("host")}/me`;
  await new Email(user, url).sendWelcome();
  await Token.deleteMany({ email: user.email });

  createSendToken(user, 200, req, res);
});

// exports.createDifferentRole = catchAsync(async (req, res, next) => {
//   console.log(req.body);
//   if (req.body.key == 'nAtOuR_eVeNtS'){
//     const newRoleUser = await User.create({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//       passwordConfirm: req.body.passwordConfirm,
//       role: req.body.role
//     });

//     const url = `${req.protocol}://${req.get('host')}/me`;
//     console.log(url);
//     await new Email(newRoleUser, url).sendWelcome();

//     createSendToken(newRoleUser, 200, req, res);
//   } else {
//     return next(new AppError('Wrong information', 401));
//   }
// });

exports.login = catchAsync(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return response.errorResponse(res, errors.array(), errors.msg, 200, false);
  }  
  const { email, password } = req.body;
  // console.log(req.body);

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 200));
  }
  // 2) Check if user exists && password is correct
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 200));
  }

  // 3) If everything ok, send token to client
  createSendToken(user, 200, req, res);
});

exports.logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  return response.successResponse(res, {}, "User logged out!", 200, true);
};

exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access.', 200)
    );
  }

  // 2) Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        200
      )
    );
  }

  // 4) Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("User recently changed password! Please log in again.", 200)
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});

// Only for rendered pages, no errors!
exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      // 1) verify token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      // 2) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }

      // 3) Check if user changed password after the token was issued
      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next();
      }

      // THERE IS A LOGGED IN USER
      res.locals.user = currentUser;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles ['admin', 'lead-guide']. role='user'
    // let checker = (arr, target) => target.every(v => arr.includes(v));
    const checker = (arr1, arr2) => arr1.some((r) => arr2.includes(r));
    // console.log(roles, req.user.role);
    // console.log(checker(roles, req.user.role));
    if (!checker(roles, req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }
    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on POSTed email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("There is no user with email address.", 200));
  }

  // 2) Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3) Send it to user's email
  try {
    const resetURL = `${req.protocol}://${process.env.APP_URL}/resetPassword/${resetToken}`;
    await new Email(user, resetURL).sendPasswordReset();
    console.log(resetURL);

    return response.successResponse(res, {}, "Token sent to email!", 200, true);
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError("There was an error sending the email. Try again later!"),
      500
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // 3) Update changedPasswordAt property for the user
  // 4) Log the user in, send JWT
  createSendToken(user, 200, req, res);
});

exports.resetPage = catchAsync(async (req, res, next) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError("Token is invalid or has expired", 200));
  }
  // const userEmail = {email: user.email};

  return response.successResponse(res, {}, "Token is valid", 200, true);
});