var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var TaskSchema = require('../models/task');
mongoose.connect('mongodb://admin:123@ds041484.mlab.com:41484/todo_listtt');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.post('/abc', function(req, res, next) {
    let task = req.body
    var Task = mongoose.model('Task', TaskSchema);

    var Task_item = new Task(task)
    console.log(task);
    Task_item.save(function(err) {
        if (err) throw err;

        console.log('brbrbrbrbrbr');
    });
    res.send(JSON.stringify(Task_item))

})

module.exports = router;