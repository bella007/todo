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

    let element_id = req.params.id;
    console.log('req', req.params.id);
    Todo.findByIdAndRemove(element_id, function (err, ololo) {
        if (err) throw err;

        return res.json({'success': true, 'message': 'DELETED'});
    });
};

export const editTodo = (req, res) => {
    req.body.data.title = req.body.input_val;

    Todo.findOneAndUpdate({_id: req.body.data._id}, req.body.data, {title: req.body.input_val}, (err, todo) => {
        if (err) {
            return res.json({'success': false, 'message': 'Some Error'});
        }

        return res.json({'success': true, 'message': 'EDITED'});
    })

};
