// // const Mongoose = require('mongoose');
// // const Schema = Mongoose.Schema;
// // mongoose.connect("mongodb://admin:123@ds041484.mlab.com:41484/todo_listtt");
// //
// // const TaskSchema = new Schema({
// //     title: String,
// //     done: Boolean,
// //     id: String
// // });
// //
// // module.exports = Mongoose.model('Task', TaskSchema);
// //
// console.log('Ух ты! Крошечное Node-приложение!');
var express = require('express');

// создаём Express-приложение
var app = express();

// создаём маршрут для главной страницы
// http://localhost:8080/
app.get('/', function(req, res) {
    res.sendfile('src/index.js');
});

// запускаем сервер на порту 8080
app.listen(8080);
// отправляем сообщение
console.log('Сервер стартовал!');
// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/cat_app");
//
// var catSchema = new mongoose.Schema({
//     name : String,
//     age : Number,
//     description : String
// });
//
// var cat = mongoose.model("cat",catSchema);
//
// //Adding a new cat to DB
// var nora = new cat({
//     name : "nora",
//     age : 11 ,
//     description : "she is so cute"
// });
//
// nora.save(function(err,added_cat){
//     if(err){
//         console.log("something went wrong");
//         console.log(err);
//     }
//     else
//     {
//         console.log("new cat added");
//         console.log(added_cat);
//     }
//
// });
//
// // Second way of adding a cat to DB
// cat.create({
//     name : "norris",
//     age : 15,
//     description : "she is an evil cat"
// },function(err,added_cat){
//     if(err){
//         console.log("something went wrong");
//         console.log(err);
//     }
//     else
//     {
//         console.log("new cat added");
//         console.log(added_cat);
//     }
// });
//
//
// //Searching in DB
// cat.find({},function(err,found_cat){
//     if(err){
//         console.log("something went wrong");
//         console.log(err);
//     }
//     else
//     {
//         console.log(found_cat);
//     }
// });
//
