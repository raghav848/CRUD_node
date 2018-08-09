var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

var student = require('./Students.model');

router.get('/add_students',function(req,res){
    res.render('addStudents');
}); 

router.post('/add_students',function(req,res){
    student.create({
        fname:req.body.fname,
        lname: req.body.lname,
        rollNumber: req.body.rollNumber
    },function(err,user){
        if(err) throw err;
        res.redirect('/');
    });
});

router.get('/view_Students',function(req,res){
    student.find({},function(err,result){
        if(err) throw err;
        res.render('viewStudents',{data:result});
    });
});

router.get('/delete_students/:id',function(req,res){
    student.findByIdAndRemove(req.params.id,function(err,result){
        if(err) throw err;
        res.redirect('/students/view_students');
    });
});

router.get('/update_students/:id',function(req,res){
    student.findById(req.params.id
    ,function(err,result){
        if(err) throw err;
        console.log(result);
        res.render('addStudents',{data:result});
    });
});

router.post('/update_students/:id',function(req,res){
    student.findByIdAndUpdate(req.params.id,{
        $set:{
            fname:req.body.fname,
            lname: req.body.lname,
            rollNumber: req.body.rollNumber
        }
    },function(err,result){
        if(err) throw err;
        res.redirect('/students/view_students');
    });
});

module.exports = router;