const express=require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const controller = require('./MVC_Test/Controller/Controller.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/member', controller);

app.listen(port, function(){
  console.log("server is running port 3000");
});

module.exports = app;