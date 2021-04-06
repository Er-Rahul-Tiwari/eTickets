const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../../models/userModel');

passport.serializeUser(async (user, next) => {
  next(null, user);
});

passport.deserializeUser(async (user, next) => {
  var user = await User.findOne({authId: user.authId});
  next(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:5000/api/v1/users/google/callback"
  }, async (accessToken, refreshToken, profile, next) => {
    var user = await User.findOne({authId: profile.id});
    if (user){
     return next(null, user);
    }
    var user = await User.create({ name: profile.displayName, authId: profile.id,
      email: profile.emails[0].value, password: 'dandyit1234', 
      passwordConfirm: 'dandyit1234', role: ['user', 'event_manager']});
  	return next(null, user);
  }
));

module.exports = passport;