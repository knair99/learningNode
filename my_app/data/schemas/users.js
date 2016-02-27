/**
 * Created by kprasad on 2/26/16.
 */

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
   username: String,
    name: String,
    password: String
});

module.exports = UserSchema;

