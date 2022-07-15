import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import passportJWT from 'passport-jwt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import sequelize from '../util/db';
import user from './model/user';

const port = process.env.PORT;
dotenv.config();

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const app = express();
const jwtOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret',
};

//lets create the strategy for web token
const strategy = new JWTStrategy(jwtOptions, function (JwtPayload, next) {
  console.log('payload received', JwtPayload);
  const users = getUsers1({ id: JwtPayload.id });
  if (users) {
    next(null, users);
  } else {
    next(null, false);
  }
});
//use the strategy
passport.use(strategy);

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// do not create table if it already exists and use the existing table and data
user
  .sync({ force: false })
  .then(() => {
    console.log('Table created successfully');
  })
  .catch((err) => {
    console.error('Error creating table:', err);
  });

const createUsers = async ({ username, password }) => {
  const createUser = await user.create({
    username,
    password,
  });
  return createUser;
};
const getAllUsers = async () => {
  const getAllUser = await user.findAll();
  return getAllUser;
};

const getUsers1 = async (obj) => {
  const getUser = await user.findOne({ where: obj });
  return getUser;
};

// set some basic routes
app.get('/', function (req, res) {
  res.json({ message: 'Express is up!' });
});
// get all users
app.get('/users', async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
});
// register a new user
app.post('/users/register', async (req, res) => {
  const { username, password } = req.body;
  const users = await createUsers({ username, password });
  res.status(201).json({ users, message: 'User created successfully' });
});
// login a user
app.post('/users/login', async (req, res) => {
  const { username, password } = req.body;
  const users = await getUsers1({ username, password });
  if (users) {
    const token = jwt.sign({ id: users.id }, 'secret', {
      expiresIn: '1h',
    });
    res.json({
      message: 'User logged in successfully',
      token,
    });
  } else {
    res.status(401).json({ message: 'Invalid Credentials' });
  }
});

//protected route
app.get(
  '/protected',
  passport.authenticate('jwt', { session: false }),
  function (req, res) {
    res
      .status(200)
      .json('congrts!,you are seeing this because you are authorized');
  }
);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
