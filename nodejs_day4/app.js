import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './router/user-routes';
import sequelize from './util/db';

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
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Table created successfully');
  })
  .catch((err) => {
    console.error('Error creating table:', err);
  });
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to login application.' });
});
app.post('/login', router);
app.post('/register', router);
app.get('/allUsers', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
