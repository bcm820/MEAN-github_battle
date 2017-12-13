
const mongoose = require('mongoose');
const uniqueCheck = require('mongoose-unique-validator');

const PlayerSchema = new mongoose.Schema({

    id: {type: String, unique: [true], uniqueCaseInsensitive: true},
    login: {type: String},
    name: {type: String},
    avatar_url: {type: String},
    html_url: {type: String},
    public_repos: {type: Number},
    followers: {type: Number},
    score: {type: Number}

});

mongoose.model('Player', PlayerSchema);

PlayerSchema.plugin(uniqueCheck, {message: 'Duplicate found!' });