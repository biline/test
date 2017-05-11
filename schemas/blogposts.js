"use strict";

var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var BlogPostsSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    date: {type: Date, default: Date.now},
    images:[],
    link: {type: String}
});


mongoose.model('BlogPosts', BlogPostsSchema);