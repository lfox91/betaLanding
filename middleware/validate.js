var Isemail = require('isemail');

module.exports = function (req, res, next) {
  if(Isemail.validate(req.body.email)) {
    console.log('email validated')
    next();
  }   
  else {
   res.send('We couldn\'t validate that email, please try another' );
  }
}
