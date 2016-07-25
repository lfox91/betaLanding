var Isemail = require('isemail');

module.exports = function (req, res, next) {
  console.log('\n' + req.body.email + '\n');
  if(Isemail.validate(req.body.email)) {
    console.log('email validated')
    next();
  }   
  else {
   res.send('We couldn\'t validate that email, please try another' );
  }
}
