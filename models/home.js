const mongoose = require('mongoose');   // 
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const HomeSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    statistical: {
        type: Number,
        required: true
    },
    category: [],
    notification: [],

});

const Home = mongoose.model('HomeComponent', HomeSchema);
module.exports = Home;