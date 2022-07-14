import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import session from 'express-session';
import passport from 'passport';

const GoogleStratgey = require('passport-google-oauth').OAuth2Strategy;

dotenv.config();

const app = express();
const port = process.env.PORT;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  })
);
app.get('/', (req, res) => {
  res.render('auth');
});
let userProfile;
app.use(passport.initialize());
app.use(passport.session());
app.get('/success', (req, res) => {
  res.render('success', { user: userProfile });
});
app.get('/error', (req, res) => res.send('error logging in'));
//serialize and deserialize are used to store and retrieve the user's session data`its takes the user's id and stores it in the session
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});
//passport.use is used to configure the GoogleStrategy
passport.use(
  new GoogleStratgey(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, cb) {
      userProfile = profile;
      return cb(null, profile);
    }
  )
);
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/error' }),
  (req, res) => {
    res.redirect('/success');
  }
);

app.listen(port, () => {
  console.log(`Google Auth app listening at ${port}`);
});
