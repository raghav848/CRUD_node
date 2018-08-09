var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    fname:String,
    lname:String,
    rollNumber:Number
});
mongoose.model('StudentsSchmea',schema);
module.exports = mongoose.model('StudentsSchema');