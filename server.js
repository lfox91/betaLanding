////////////////////////
// Initialize Variables
////////////////////////
var    express      = require('express'),
       morgan       = require('morgan'),
       bodyParser   = require('body-parser'),
       mongoose     = require('mongoose'),
       add          = require('./controller/email.js'),
       validate     = require('./middleware/validate.js'),
       jade         = require('pug'),
       env          = process.env,
       port         = env.PORT || 3000,
       app          = express();

process.title = 'center_stage_app';

//////////////////////////
// Mongo Db Connection
//////////////////////////

//provide a sensible default for local development
var mongodb_connection_string = 'mongodb://127.0.0.1:27017';
//take advantage of heroku env vars when available:
if(env.MONGODB_URI){
  mongodb_connection_string = env.MONGODB_URI;
}

mongoose.connect(mongodb_connection_string);

///////////////////////////////
// App globals
////////////////////////////////
app.set('view engine', 'pug');
app.use(express.static('static'));
app.use(morgan('dev'));                                         // log with Morgan
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text

/////////////////////////////////
// TODO: REPLACE WITH ROUTE FILE
// routes
/////////////////////////////////
app.get('/', function (req, res) {
  res.render('index', { submitted: false });
});

app.post('/save', validate, add, function(req, res){
  res.render('index', {submitted: true});
} );

app.listen(port, function() {
  console.log(`Server running on ${port}...`);
});
