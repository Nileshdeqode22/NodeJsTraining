import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import flash from 'express-flash';
//stroing session in memory psql database
import session from 'express-session';
import bcrypt from 'bcrypt';
import passport from 'passport';
import sequelize from './util/db';
import register from './model/register';
import initializePassport from './passport-config/passportConfig';

const logout = require('express-passport-logout');

initializePassport(passport);

const app = express();
dotenv.config();

const port = process.env.PORT;

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
app.use(flash());
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

// Funtion inside passport which initializes passport
app.use(passport.initialize());
// Store our variables to be persisted across the whole session. Works with app.use(Session) above
app.use(passport.session());

app.get('/', (req, res) => {
  res.render('index');
});

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

app.get('/users/register', checkAuthenticated, (req, res) => {
  res.render('register.ejs');
});

app.get('/users/login', checkAuthenticated, (req, res) => {
  //flash sets a messages variable. passport sets the error message
  console.log(req.session.flash.error);
  res.render('login.ejs');
});

app.get('/users/dashboard', checkNotAuthenticated, async (req, res) => {
  console.log(req.isAuthenticated());
  const users = await register.findAll();
  res.render('dashboard', { user: users });
});
app.get('/users/logout', (req, res) => {
  logout();
  res.render('index', { message: 'You have logged out successfully' });
});
app.post('/users/register', async (req, res) => {
  const { username, email, password, password2 } = req.body;

  const errors = [];

  console.log('line number85', {
    username,
    email,
    password,
    password2,
  });

  if (!username || !email || !password || !password2) {
    errors.push({ message: 'Please enter all fields' });
  }

  if (password.length < 6) {
    errors.push({ message: 'Password must be a least 6 characters long' });
  }

  if (password !== password2) {
    errors.push({ message: 'Passwords do not match' });
  }

  if (errors.length > 0) {
    res.render('register', { errors, username, email, password, password2 });
  } else {
    //check if email is already in use
    const user = await register.findOne({ where: { email } });
    if (user) {
      errors.push({ message: 'Email is already in use' });
      res.render('register', { errors, username, email, password, password2 });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const registerUser = await register.create({
        username,
        email,
        password: hashedPassword,
      });
      registerUser.save();
      req.flash('success_msg', 'You are now registered and can log in');
      res.redirect('/users/login');
    }
  }
});
app.post(
  '/users/login',
  passport.authenticate('local', {
    successRedirect: '/users/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true,
  })
);
// //to fetch all users from database and display them in the table
// app.get('/all/dashboard', checkAuthenticated, async function (req, res) {
//   const users = await register.findAll();
//   res.render('dashboard', { data: users });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
