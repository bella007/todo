import mongoose from 'mongoose';

import Todo from '../models/todo.server.model';

export const getTodos = (req, res) => {
    Todo.find((err, todos) => {
        if (err) {
            return res.json({'success': false, 'message': 'Some Error'});
        }

        return res.json({'success': true, 'message': 'Todos fetched successfully', todos});
    }
    );
};

export const addTodo = (req, res) => {
    const newTodo = new Todo(req.body);
    newTodo.save((err, todo) => {
        if (err) {
            return res.json({'success': false, 'message': 'Some Error'});
        }
        return res.json({'success': true, 'message': 'Todo added successfully', todo});
    })
};

export const deleteTodo = (req, res) => {

    let element_id = mongoose.Types.ObjectId(req.params._id);
console.log('req', req)
    Todo.findByIdAndRemove(element_id, function (err) {
        if (err) throw err;
    });

};
export const editTodo = (req, res) => {
    req.body.data.title = req.body.input_val;


    Todo.findOneAndUpdate({_id: req.body.data._id}, req.body.data, {title: req.body.input_val}, (err, todo) => {
        if(err){
            return res.json({'success':false,'message':'Some Error'});
        }

        return res.json({'success':true,'message': 'EDITED'});
    })

};
