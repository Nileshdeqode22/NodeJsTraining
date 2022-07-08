import express from 'express';
import bodyParser from 'body-parser';
import router from './router/user-routes';

const app = express();
const port = 3000;

app.use(bodyParser.json()); // for parsing application/json
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to login application.' });
});
app.post('/login', router);
app.post('/register', router);
app.get('/allUsers', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
