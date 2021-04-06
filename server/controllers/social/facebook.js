const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const catchAsync = require('../../utils/catchAsync');
const User = require('../../models/userModel');

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    // callbackURL: "http://127.0.0.1:3000/api/v1/users/facebook/callback"
    callbackURL: "https://arnabdev.tech/api/v1/users/facebook/callback"
  }, (accessToken, refreshToken, profile, done) => {
    // User.findOrCreate({name: profile.displayName}, {name: profile.displayName,userid: profile.id}, function(err, user) {
    //   if (err) { return done(err); }
    //   done(null, user);
    // });
    console.log(profile);
    done(null, profile);
  }
));

module.exports = passport;