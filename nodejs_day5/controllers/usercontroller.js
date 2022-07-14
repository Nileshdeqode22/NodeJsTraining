import bcrypt from 'bcrypt';
import express from 'express';
import register from '../model/register';

const app = express();

// login if email and password is correct using login db model
const loginUser = (req, res) => {
  const { email, password } = req.body;
  if (email === '' || password === '') {
    res.json({
      message: 'Please enter email and password',
    });
  } else {
    // if email and password with bcrypt compare with db is correct return 200 and login success
    register
      .findOne({
        where: {
          email,
        },
      })
      .then((user) => {
        if (user) {
          bcrypt.compare(password, user.password, (_err, result) => {
            if (result) {
              res.status(200).json({
                message: 'Login Successful',
              });
            } else {
              res.status(401).json({
                message: 'Login Failed',
              });
            }
          });
        } else {
          res.status(401).json({
            message: 'Login Failed',
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  }
};

// register user with register db model store password in hash format
const registerUser = (req, res) => {
  const { username, email, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  // check if email,username and password is not empty if empty return error please fill all fields
  if (username === '' || email === '' || password === '') {
    res.status(401).json({
      message: 'Please fill all fields',
    });
    // if email is already exist return error email already exist
  } else if (email) {
    register
      .findOne({
        where: {
          email,
        },
      })
      .then((user) => {
        if (user) {
          res.status(401).json({
            message: 'Email already exist',
          });
          //check if password is in regex format if not return error password must be in regex format
        } else if (
          password.match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          )
        ) {
          // if email and password with bcrypt compare with db is correct return 200 and login success
          register
            .create({
              username,
              email,
              password: hash,
            })
            .then(() => {
              res.status(200).json({
                message: 'Register Successful',
              });
            })
            .catch((err) => {
              res.status(500).json({
                error: err,
              });
            });
        } else {
          res.status(401).json({
            message:
              'Password must be 8 characters long, contain at least one number, one uppercase letter and one special character',
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  } else {
    res.status(401).json({
      message: 'Please fill all fields',
    });
  }
};

//get all users from register db model
const getAllUsers = (req, res) => {
  register
    .findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/login', (req, res) => {
  res.render('login');
});

export { loginUser, registerUser, getAllUsers };
