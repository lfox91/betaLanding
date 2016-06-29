
const  express      = require('express'),
       morgan       = require('morgan'),
       bodyParser   = require('body-parser'),
       mongoose     = require('mongoose'),
       add          = require('./controller/email.js'),
       validate     = require('./middleware/validate.js'),
       env          = process.env,
       app          = express();

//provide a sensible default for local development
var mongodb_connection_string = 'mongodb://127.0.0.1:27017';
//take advantage of openshift env vars when available:
if(process.env.MONGODB_URI){
  mongodb_connection_string = process.env.MONGODB_URI;
}

mongoose.connect(mongodb_connection_string);

app.set('port', (process.env.PORT || 5000));
app.use(express.static('static'));
app.use(morgan('dev'));                                         // log with Morgan
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text

app.post('/save', validate, add, function(req, res){
  var email = req.body.email;
  res.send(email);
} );

var port = app.get('port');

app.listen(port, function() {
  console.log(`Server running on ${port}...`);
});
