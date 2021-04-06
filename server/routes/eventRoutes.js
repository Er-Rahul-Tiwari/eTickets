const express = require('express');
const eventController = require('./../controllers/events/eventController');
const { check, validationResult } = require('express-validator');
const authController = require('./../controllers/user/authController');
const reviewRouter = require('./../routes/reviewRoutes');

const router = express.Router();

// Srish Agrawal
// 9831066996
// hr@a1future.com

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'event_manager'),
    eventController.getAllEvents
  )
  .post(
    authController.protect,
    authController.restrictTo('admin', 'event_manager'),
    eventController.uploadEventImages,
    eventController.resizeEventImages,
    [
      check('name', 'Please enter the event name.').isLength({ min: 1 }),
      check('summary', 'Please enter the event type.').not().isEmpty(),
      check('venueType', 'Please enter the event venue type.').not().isEmpty()
    ],
    eventController.createEvent
  );

router
  .route('/:id')
  .get(eventController.getEvent)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'event_manager'),
    eventController.uploadEventImages,
    eventController.resizeEventImages,
    eventController.updateEvent
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'event_manager'),
    eventController.deleteEvent
  );

module.exports = router;