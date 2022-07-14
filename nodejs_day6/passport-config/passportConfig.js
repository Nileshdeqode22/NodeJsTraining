import register from '../model/register';

const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport) {
  console.info('Intialized passport');

  const authenticateUser = (email, password, done) => {
    console.log('Authenticating user');
    register
      .findOne({
        where: {
          email: email,
        }, // end where
      })
      .then((user) => {
        if (user == null) {
          console.log('User not found');
          return done(null, false);
        }
        console.log('User found');
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            console.log('Password matched');
            return done(null, user);
          }
          console.log('Password not matched');
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

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    register
      .findByPk(id)
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

export default initialize;
