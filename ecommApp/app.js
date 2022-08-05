/* eslint-disable import/no-import-module-exports */
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
// eslint-disable-next-line import/no-import-module-exports
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';

import path from 'path';

//Import Routes
const user = require('./routes/user');
const home = require('./routes/home');
const product = require('./routes/product');
const payment=require('./routes/payment');
const order = require('./routes/order');

dotenv.config();
const app = express();

//swagger documentation
const swaggerDocument = yaml.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//regular midleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cookies and file middleware
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  })
);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//morgan is used to log the requests in the console for debugging purposes (optional)
app.use(morgan('tiny'));

//router for home page
app.use('/api/v1', home);
app.use('/api/v1', user);
app.use('/api/v1', product);
app.use('/api/v1', payment);
app.use('/api/v1', order);

//simple test
app.get('/signuptest', (req, res) => {
  res.render('signuptest');
});

module.exports = app;
