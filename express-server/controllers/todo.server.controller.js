// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import Todo from '../models/todo.server.model';

export const getTodos = (req,res) => {
  Todo.find().exec((err,todos) => {
    if(err){
      console.log('controllerrrrrrRRRRRRRRRRRRR');
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Todos fetched successfully',todos});
  });
};

export const addTodo = (req,res) => {
  console.log('req.bodyreq.bodyreq.bodyreq.bodyreq.bodyreq.bodyreq.body',req.body);
  console.log('res');
  console.log('Privet-privet');
  const newTodo = new Todo(req.body);
  console.log('newTOdo', newTodo);
  newTodo.save((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'}); }

    return res.json({'success':true,'message':'Todo added successfully',todo});
  })
};
