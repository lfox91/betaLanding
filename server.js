////////////////////////
// Initialize Variables
////////////////////////
const  express      = require('express'),
       morgan       = require('morgan'),
       bodyParser   = require('body-parser'),
       mongoose     = require('mongoose'),
       add          = require('./controller/email.js'),
       validate     = require('./middleware/validate.js'),
       jade         = require('jade'),
       env          = process.env,
       app          = express();

//////////////////////////
// Mongo Db Connection
//////////////////////////
//provide a sensible default for local development
let mongodb_connection_string = 'mongodb://127.0.0.1:27017';
//take advantage of heroku env vars when available:
if(process.env.MONGODB_URI){
  mongodb_connection_string = process.env.MONGODB_URI;
}

mongoose.connect(mongodb_connection_string);

///////////////////////////////
// App globals
////////////////////////////////
app.set('port', (process.env.PORT || 5000));
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
app.post('/save', validate, add, function(req, res){
  let email = req.body.email;
  res.send(email);
} );

let port = app.get('port');

// Compile a function
// var html = jade.renderFile('./static/index.ejs', {debug:true});

app.listen(port, function() {
  console.log(`Server running on ${port}...`);
});
