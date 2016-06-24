const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const add = require('./controller/email.js');
const validate = require('./middleware/validate.js');
// var ip_addr = process.env.OPENSHIFT_DIY_IP   || '127.0.0.1';
const port = process.env.PORT || 3000; 
const app = express();
//
// // default to a 'localhost' configuration:
// var connection_string = '127.0.0.1:27017/centerstage';
// // if OPENSHIFT env variables are present, use the available connection info:
// if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
//   connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
//   process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
//   process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
//   process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
//   process.env.OPENSHIFT_APP_NAME;
// }
//
// mongoose.connect(connection_string);

app.use(express.static(__dirname +'/diy'));
app.use(morgan('dev'));                                         // log with Morgan
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text

// app.get('/', function(req, res){
//   res.send('/diy/index.html');
// })

app.post('/save', validate, add, function(req, res){
  var email = req.body.email;
  res.send(email);
} );

app.listen(port, function() {
  console.log('%s: Node server started on port: %d ...',
     Date(Date.now() ), port);
});
