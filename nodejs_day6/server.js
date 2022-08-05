import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import passport from 'passport';
import session from 'express-session';
import flash from 'express-flash'; //stroing session in memory psql database
import registerController from './controllers/controller';
import sequelize from './util/db';
import register from './model/register';
import initializePassport from './passport-config/passportConfig';

initializePassport(passport);
const port = process.env.PORT;
const app = express();
dotenv.config();

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// do not create table if it already exists and use the existing table and data
register
  .sync({ force: false })
  .then(() => {
    console.log('Table created successfully');
  })
  .catch((err) => {
    console.error('Error creating table:', err);
  });

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(
  session({
    // Key we want to keep secret which will encrypt all of our information
    secret: process.env.SESSION_SECRET,
    // Should we resave our session variables if nothing has changes which we dont
    resave: false,
    // Save empty value if there is no vaue which we do not want to do
    saveUninitialized: false,
    // Cookie options with expire in one minute
  })
);
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/users/dashboard');
  }
  next();
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/users/login');
}
// Funtion inside passport which initializes passport
app.use(passport.initialize());
// Store our variables to be persisted across the whole session. Works with app.use(Session) above
app.use(passport.session());
app.use(flash());
app.get('/error', (req, res) => res.send('error logging in'));
app.get('/', (req, res) => {
  res.render('index');
});
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/users/dashboard');
  }
);
app.post('/users/register', registerController, (req, res) => {
  res.render('register.ejs');
});
app.get('/users/register', checkAuthenticated, (req, res) => {
  res.render('register.ejs');
});
app.get('/users/login', checkAuthenticated, (req, res) => {
  res.render('login.ejs');
});

app.get('/users/dashboard', checkNotAuthenticated, async (req, res) => {
  try {
    const users = await register.findAll();
    res.render('dashboard', { user: users });
  } catch (error) {
    console.error(error);
  }
});

//logout route is used to logout the user and session is destroyed at the end of the request
app.get('/users/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
  res.redirect('/users/login');
});

app.post(
  '/users/login',
  passport.authenticate('local', {
    successRedirect: '/users/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true,
  })
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;