const Contact = require('../models/contact');

var async = require('async');

exports.getAll = function(req, res) {
    // res.send('Not implemented');

    async.parallel({
        contact_count: function(callback) {
            Contact.count(callback);
        },
        contact_list: function(callback) {
            Contact.find({}, callback);
        }
    },function(err, results) {
        res.json({
            title: 'get all contacts',
            error: err,
            count: results.contact_count,
            contactList: results.contact_list
        });
    });
}