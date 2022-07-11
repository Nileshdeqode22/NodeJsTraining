/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
const _express = _interopRequireDefault(require('express'));

const _web = _interopRequireDefault(require('../routes/web.js'));

const _student = _interopRequireDefault(require('../routes/student.js'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// setup express js code
const app = (0, _express.default)();
const port = 3000; // Set the view engine to ejs

app.set('view engine', 'ejs'); // application level middleware
// app.use(myLogger);
// Load the routes

app.use('/', _web.default);
app.use('/', _student.default);
app.get('/', (req, res) => {
  res.send('Hello !');
});
app.listen(port, () => {
  console.log('Example app listening on port '.concat(port));
});
