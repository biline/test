"use strict";

var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var ProjectsSchema = new Schema({
    title:{
        type: String
    },
    date: {type: Date, default: Date.now},
    year: {type: Number},
    text: {type: String}
});


mongoose.model('Projects', ProjectsSchema);