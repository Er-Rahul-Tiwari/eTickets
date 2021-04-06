const express = require('express');
const viewsController = require('../controllers/viewsController');
const useragent = require('express-useragent');
const authController = require('../controllers/user/authController');

const router = express.Router();

router.use(viewsController.alerts);

router.get('/', (req, res, next) => {
    var source = req.headers['user-agent'],
    ua = useragent.parse(source);
    console.log(ua.browser);
    next();
},authController.isLoggedIn, viewsController.getOverview);

// router.get('/event/:slug', authController.isLoggedIn, viewsController.getEvent);
// router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
// router.get('/me', authController.protect, viewsController.getAccount);

// router.get('/my-events', authController.protect, viewsController.getMyEvents);

// router.post(
//   '/submit-user-data',
//   authController.protect,
//   viewsController.updateUserData
// );

module.exports = router;
