'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhoneSchema = new Schema({
    createdDate: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: 'Kindly enter the title of the phone.'
    },
    image: {
        type: String,
        required: 'Kindly enter the image of the phone.'
    },
    description: {
        type: String
    },
    color: {
        type: String,
        required: 'Kindly enter the color of the phone.'
    },
    price: {
        type: [{
            type: Number,
            min: 0
        }],
        required: 'Kindly enter the price of the phone.'
    }
});

module.exports = mongoose.model('Phones', PhoneSchema);