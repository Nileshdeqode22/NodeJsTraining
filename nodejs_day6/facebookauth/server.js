import express from 'express';
import session from 'express-session';
import passport from 'passport';
import dotenv from 'dotenv';
import router from './routes/router';

const FacebookStrategy = require('passport-facebook').Strategy;

const app = express();
const { PORT, FB_CLIENT_ID, FB_CLIENT_SECRET, FB_CALLBACK_URL } = process.env;
dotenv.config();
app.set('view engine', 'ejs');
app.use(
  session({ secret: 'keyboard cat', resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, cb) {
  cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});
passport.use(
  new FacebookStrategy(
    {
      clientID: FB_CLIENT_ID,
      clientSecret: FB_CLIENT_SECRET,
      callbackURL: FB_CALLBACK_URL,
      profileFields: ['id', 'displayName', 'photos', 'email'],
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);

app.use('/', router);

app.listen(PORT, () => {
  console.log(`FBAuth app listening at http://localhost:${PORT}`);
});
