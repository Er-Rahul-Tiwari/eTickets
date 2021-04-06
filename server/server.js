const mongoose = require('mongoose');
const dotenv = require('dotenv');
const https = require('https');
const http = require('http');
const fs = require('fs');

var options = {
  key: fs.readFileSync('security/private.key'),
  cert: fs.readFileSync('security/certificate.crt'),
  ca: fs.readFileSync('security/ca_bundle.crt')
};

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');


const DB = 'mongodb://localhost:27017/eventAPI';
// const DB = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD
// );

mongoose.set('runValidators', true);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

// const port = process.env.PORT || 3000;
// const server = app.listen(port, () => {
//  console.log(`App running on port ${port}...`);
// });

// Create an HTTP service.
//http.createServer(app).listen(80, () => {
//   console.log('http server running...');
//});
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(443, () => {
  console.log('https server running...');
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});
