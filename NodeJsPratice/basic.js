//setup express js code
import express from 'express'; 
import web from '../routes/web.js';
import myLogger from '../middlewares/logger-middleware.js';
import student from '../routes/student.js';
const app = express();
const port = 3000;

//Set the view engine to ejs
app.set('view engine', 'ejs');

//application level middleware
//app.use(myLogger);

//Load the routes
app.use('/', web);
app.use('/',student);


app.get('/', (req, res) => {
  res.send('Hello !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

