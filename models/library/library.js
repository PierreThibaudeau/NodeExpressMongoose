var dbconnect = require('./../../dbconnect');
var mongoose = dbconnect.connect('library');

var librarySchema = mongoose.Schema({
    _id : Number,
    type : String,
    title : String,
    pages : Array,
    year : Number,
    booktitle : String,
    url : String,
    authors : Array
});

var Library = mongoose.model('libraries', librarySchema);

module.exports = Library;