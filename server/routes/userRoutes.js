const express = require('express');
const { check, validationResult } = require('express-validator');
const createSendToken = require('./../controllers/user/authController').exposedCookie;
const userController = require('./../controllers/user/userController');
const authController = require('./../controllers/user/authController');
// const passportFacebook = require('./../controllers/social/facebook');
const passportGoogle = require('../controllers/social/google');

const router = express.Router();

router.post('/signup', [
  check('firstName', 'Please enter first name.').not().isEmpty(),
  check('lastName', 'Please enter last name.').not().isEmpty(),
  check('email', 'Please enter valid email').isEmail(),
  check('password', 'Please enter valid password').isLength({ min: 8 }),
  check('passwordConfirm', 'Please enter password confirm').custom((value, { req }) => value === req.body.password)],
  authController.signup
);

router.get('/confirmAccount/:token', authController.confirmAccount);

router.post('/login', [check('email', 'Please enter valid email').isEmail(), 
  check('password', 'Please enter valid password').isLength({ min: 8 })],
  authController.login
);


router.get('/logout', authController.logout);

// router.get('/facebook',
//   passportFacebook.authenticate('facebook', { scope: ['email'] }));

// router.get('/facebook/callback',
//   passportFacebook.authenticate('facebook', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
// });

router.get('/google',
  passportGoogle.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passportGoogle.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    console.log(req.user);
    createSendToken(req.user, 200, req, res);
  });

router.post('/forgotPassword', 
  [check('email', 'Please enter valid email').isEmail()],
  authController.forgotPassword
);

router.get('/resetPassword/:token', authController.resetPage);
router.patch('/resetPassword/:token', authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

router.patch('/updateMyPassword',
  [check('passwordCurrent', 'Please enter your current password').not().isEmpty(),
  check('password', 'Please enter your new password').isLength({ min: 8 }),
  check('passwordConfirm', 'Please confirm your new password').custom((value, { req }) => value === req.body.password)],
  userController.updatePassword);

router.get('/me', userController.getMe, userController.getUser);
router.patch(
  '/updateMe',
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);

router.delete('/deleteMe', userController.deleteMe);

router.use(authController.restrictTo('admin'));

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
