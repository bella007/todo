var express = require('express');
var router = express.Router();
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json();

let url = 'mongodb://admin:123@mongodb://@ds041484.mlab.com:41484/todo_listtt';
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird');

mongoose.connect(url, { useMongoClient: true });
const db = mongoose.connection;
const Task = require('../models/task');

router.post('/', (req, res, next) => {
    console.log('delTask')
});

module.exports = router;