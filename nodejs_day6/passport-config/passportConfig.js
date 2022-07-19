import register from '../model/register';

const LocalStrategy = require('passport-local').Strategy;
const GoogleStratgey = require('passport-google-oauth').OAuth2Strategy;

const bcrypt = require('bcrypt');

function initialize(passport) {
  const authenticateUser = (email, password, done) => {
    register
      .findOne({
        where: {
          email: email,
        },
      })
      .then((user) => {
        if (user == null) {
          return done(null, false);
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          }
          return done(null, false);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      authenticateUser
    )
  );

  passport.use(
    new GoogleStratgey(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL,
      },
      function (accessToken, refreshToken, email, profile, cb) {
        //store the user's profile into the db if not already there using sync await syntax
        register
          .findOrCreate({
            where: {
              email: profile.emails[0].value,
              username: profile.displayName,
            },
            defaults: {
              username: profile.displayName,
              email: profile.emails[0].value,
              password: '',
            },
          })
          .then((user) => {
            console.log('User created');
            return cb(null, user);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    )
  );
  passport.serializeUser(function (user, cb) {
    cb(null, user);
  });

  passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
  });
  return passport;
}

export default initialize;
