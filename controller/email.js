var emailModel = require("../model/schema.js");

module.exports = function (req, res, next) {
  var email = new emailModel ({ email: req.body.email });

  email.save( function( err, email ) {
    if (err) return console.error(err);
    else console.log(req.body.email + "saved to database");
  });

  next();
}

