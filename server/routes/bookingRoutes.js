const express = require('express');
const paymentController = require('./../controllers/payment/paymentController');
const { check, validationResult } = require('express-validator');
const authController = require('./../controllers/user/authController');

const router = express.Router();

router
  .route('/redirectCheckoutLocal')
  .post(authController.protect,
    paymentController.redirectCheckoutLocal);

router
  .route('/createOrder')
  .post(
    [
    check('ticket', 'please provide a ticket ID').not().isEmpty(),
    check('quantity', 'please send the ticket quantity')
    ],
    authController.protect,
    paymentController.createOrder);

router.use(authController.restrictTo('admin', 'event_manager'));
module.exports = router;
