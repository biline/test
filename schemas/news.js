"use strict";

var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var NewsSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    date: {type: Date, default: Date.now},
    images:[]
});


mongoose.model('News', NewsSchema);