const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PeopleSchema = new Schema({
    id: {
        type: String,
        required: true,
    },

    avatar: {
        type: String,
        required: true,
    },

    nameAuthor: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        required: true,
    },

    credits: {
        type: Number,
        required: true,
    },

    gender: {
        type: String,
        required: true,
    },

    birthday: {
        type: String,
        required: true,
    },

    placeOfBirth: {
        type: String,
        required: true,
    },

    aka: {
        type: Array,
        required: true,
    },

    contentScore: {
        type: Array,
        required: true,
    },

    biography: {
        type: String,
        required: true,
    },

    knownForImage: {
        type: Array,
        required: true,
    },

    knownFor: {
        type: Array,
        required: true,
    },

    acting: {
        type: Array,
        required: true,
    },

    production: {
        type: Array,
        required: true,
    },

    creator: {
        type: Array,
        required: true,
    },
});

const People = mongoose.model('PeopleComponent', PeopleSchema);
module.exports = People;

