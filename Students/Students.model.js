var mongoose = require('mongoose');
var Sschema = new mongoose.Schema({
    fname:String,
    lname:String,
    rollNumber:Number
});
module.exports = mongoose.model('StudentsSchema',Sschema);