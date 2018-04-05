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

    Todo.findByIdAndRemove(req.params.id, function (err) {
        if (err) throw err;

        return res.json({'success': true, 'message': 'DELETED'});
    });
};

export const editTodo = (req, res) => {
    req.body.data.title = req.body.input_val;
    console.log('req.body', req.body)

    Todo.findOneAndUpdate({_id: req.body.data._id}, req.body.data, {title: req.body.input_val}, (err, todo) => {
        if (err) {
            return res.json({'success': false, 'message': 'Some Error'});
        }

        return res.json({'success': true, 'message': 'EDITED'});
    })

};


export const updateTodo = (req, res) => {
    console.log('req.paramsreq.params', req.params);
    console.log('req.bodyreq.bodyreq.bodyreq.bodyreq.bodyreq.bodyreq.bodyreq.body', !req.body.done);

    Todo.findOneAndUpdate({_id: req.body._id}, {done: !req.body.done}, (err, todo) => {
        if (err) {
            return res.json({'success': false, 'message': 'Some Error'});
        }

        return res.json({'success': true, 'message': 'updated'});
    })
};
