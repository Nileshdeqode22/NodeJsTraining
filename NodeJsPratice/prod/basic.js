"use strict";

var _express = _interopRequireDefault(require("express"));

var _web = _interopRequireDefault(require("../routes/web.js"));

var _loggerMiddleware = _interopRequireDefault(require("../middlewares/logger-middleware.js"));

var _student = _interopRequireDefault(require("../routes/student.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//setup express js code
var app = (0, _express["default"])();
var port = 3000; //Set the view engine to ejs

app.set('view engine', 'ejs'); //application level middleware
//app.use(myLogger);
//Load the routes

app.use('/', _web["default"]);
app.use('/', _student["default"]);
app.get('/', function (req, res) {
  res.send('Hello !');
});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});