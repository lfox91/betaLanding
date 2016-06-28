const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Email Schema
 */

const EmailSchema = new Schema({
  email: { type: String, default: '' },
});
let emailModel = mongoose.model('Email', EmailSchema);
exports.EmailModel = emailModel;
