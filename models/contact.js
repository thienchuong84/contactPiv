// require mongoose package
const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        max: 20
    },
    ext: {
        type: String
    }
});

Schema.virtual('url').get(function() {
    return '/contacts/' + this._id;
});

module.exports = mongoose.model('Contact', Schema);