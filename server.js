const  express      = require('express'),
       morgan       = require('morgan'),
       bodyParser   = require('body-parser'),
       mongoose     = require('mongoose'),
       add          = require('./controller/email.js'),
       validate     = require('./middleware/validate.js'),
       contentTypes = require('./utils/content-types'),
       sysInfo      = require('./utils/sys-info'),
       env          = process.env,
       app          = express();

// default to a 'localhost': configuration:
var connection_string = '127.0.0.1:27017/centerstage';
// if OPENSHIFT env variables are present, use the available connection info:
if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
  connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  process.env.OPENSHIFT_APP_NAME;
}

mongoose.connect(connection_string);

app.use(express.static(__dirname +'/static'));
app.use(morgan('dev'));                                         // log with Morgan
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text

app.get('/', function(req, res){
  res.writeHead(200);
  res.send('/diy/index.html');
})

app.get('/health', function(req, res){
  res.writeHead(200);
  res.end();
} );

app.get('/info/gen' || '/info/poll', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-cache, no-store');
  res.end(JSON.stringify(sysInfo[url.slice(6)]())); 
});

app.post('/save', validate, add, function(req, res){
  var email = req.body.email;
  res.send(email);
} );

app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function() {
  console.log(Date.now()+` | Application worker ${process.pid} started...`);
});
