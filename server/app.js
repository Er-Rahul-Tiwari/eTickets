const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressip = require('express-ip');
const passport = require('passport');
const compression = require('compression');
const cors = require('cors');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const eventRouter = require('./routes/eventRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const paymentController = require('./controllers/payment/paymentController');
const viewRouter = require('./routes/viewRoutes');
const ticketRouter = require('./routes/ticketRoutes');
// const leadRouter = require('./routes/leadRoutes');

// Start express app or application
const app = express();

app.enable('trust proxy');

var allowlist = ['https://ticketviral.com', 'http://localhost:3000'];
var corsOptionsDelegate = (req, next) => {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  next(null, corsOptions) // callback expects two parameters: error and options
}

// 1) GLOBAL MIDDLEWARES
// Implement CORS
app.use(cors(corsOptionsDelegate));

// app.options('*', cors());
// app.options('/api/v1/tours/:id', cors());

app.use(expressip().getIpInfoMiddleware);

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Limit requests from same API
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 500,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

app.use(passport.initialize());

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'price'
    ]
  })
);

app.use(compression());

app.use("/user/", express.static(path.join(__dirname, "public/img/users/")));
app.use("/qrcode/", express.static(path.join(__dirname, "public/qr_code/")));
app.use("/event/", express.static(path.join(__dirname, "public/img/events/")));

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/', viewRouter);
app.use('/api/v1/events', eventRouter);
app.use('/api/v1/users', userRouter);
// app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouter);
app.use('/api/v1/tickets', ticketRouter);
// app.use('/api/v1/leads', leadRouter);

//set webhook and calback for razorpay
// app.post('/dANDyITLlpJAI/webhookVerify', paymentController.webhookVerify);
app.post('/dANDyITLlpJAI/redirectCheckoutGlobal', paymentController.redirectCheckoutGlobal);
app.post('/dANDyITLlpJAI/callbackPayment', paymentController.callbackPayment);
// app.get('/dANDyITLlpJAI/callbackPayment', (req, res) => {
//   res.send(req.query);
// });

app.get('/favicon.ico', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/logo.svg'))
})
// app.get('/assets/img/favicon.png', (req, res) => {
// 	res.sendFile(path.join(__dirname, '/public/logo.svg'))
// })

// app.get('/qrcode/:image', (req, res) => {
//   const image = req.params.image;
//   console.log(image);
//   try {
//     res.status(200).sendFile(path.join(__dirname, `public/qr_code/${image}`));
//   } catch (error) {
//     res.json({status: false, error: error});
//   }
// })

app.all('*', (req, res, next) => {
  console.log(req.params);
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;