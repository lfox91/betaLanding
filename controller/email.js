var emailModel = require("../model/schema.js");

module.exports = function (req, res, next) {
  var email = new emailModel ({ email: req.body.email });

  email.save( function( err, emailData ) {
    if (err) console.error(err);
    else{
      console.log(emailData + "saved to database");
      next();
    }
  });
}

