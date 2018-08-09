var express = require('express');
var app = express();

var db = require('./db');
var students = require('./Students/Students.controller');
app.set('view engine','ejs');
app.use('/student',students);

app.get('/',function(req,res){
    res.render('home');
});

app.listen('8080',function(){
    console.log('server started on port 8080 !');
});