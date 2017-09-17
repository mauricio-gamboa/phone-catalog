'use strict';

var mongoose = require('mongoose');
var Phone = mongoose.model('Phones');

exports.listPhones = function (req, res) {
    Phone.find({}, function (err, phone) {
        if (err) {
            res.send(err);
        } else {
            res.json(phone);
        }
    });
};

exports.createPhone = function (req, res) {
    var newPhone = new Phone(req.body);

    newPhone.save(function (err, phone) {
        if (err) {
            res.send(err);
        } else {
            res.json(phone);
        }
    });
};

exports.getPhone = function (req, res) {
    Phone.findById(req.params.phoneId, function (err, phone) {
        if (err) {
            res.send(err);
        } else {
            res.json(phone);
        }
    });
};

exports.updatePhone = function (req, res) {
    Phone.findOneAndUpdate({ _id: req.params.phoneId }, req.body, { new: true }, function (err, phone) {
        if (err) {
            res.send(err);
        } else {
            res.json(phone);
        }
    });
};

exports.deletePhone = function (req, res) {
    Phone.remove({
        _id: req.params.phoneId
    }, function (err, phone) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Phone successfully deleted.' });
        }
    });
};
