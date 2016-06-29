var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Email Schema
 */

var EmailSchema = new Schema({
  email: { type: String, default: '' },
});

var emailModel = mongoose.model('Email', EmailSchema);

module.exports = emailModel;
