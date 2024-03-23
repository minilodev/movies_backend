const mongoose = require('mongoose');   // 
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const JoinSchema = new Schema({


});

const Join = mongoose.model('JoinComponent', JoinSchema);
module.exports = Join;