<<<<<<< HEAD
var    express      = require('express'),
=======
const  express      = require('express'),
>>>>>>> c32152ea4582ca506e11eae6defc10f03457ffc9
       morgan       = require('morgan'),
       bodyParser   = require('body-parser'),
       mongoose     = require('mongoose'),
       add          = require('./controller/email.js'),
       validate     = require('./middleware/validate.js'),
<<<<<<< HEAD
       env          = process.env,
       db_name      = centerstage,
       app          = express();

//provide a sensible default for local development
mongodb_connection_string = 'mongodb://127.0.0.1:27017/' + db_name;
//take advantage of openshift env vars when available:
if(process.env.OPENSHIFT_MONGODB_DB_URL){
  mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + db_name;
}

app.use(express.static('static'));
=======
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
>>>>>>> c32152ea4582ca506e11eae6defc10f03457ffc9
app.use(morgan('dev'));                                         // log with Morgan
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text

<<<<<<< HEAD
=======
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
>>>>>>> c32152ea4582ca506e11eae6defc10f03457ffc9

app.post('/save', validate, add, function(req, res){
  var email = req.body.email;
  res.send(email);
} );

<<<<<<< HEAD
app.listen(env.NODE_PORT || 8080, env.NODE_IP || '127.0.0.1', function() {
  console.log("Server running...");
=======
app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function() {
  console.log(Date.now()+` | Application worker ${process.pid} started...`);
>>>>>>> c32152ea4582ca506e11eae6defc10f03457ffc9
});
