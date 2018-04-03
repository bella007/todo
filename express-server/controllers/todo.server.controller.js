import mongoose from 'mongoose';

import Todo from '../models/todo.server.model';

export const getTodos = (req, res) => {
    Todo.find().exec((err, todos) => {
        if (err) {
            return res.json({'success': false, 'message': 'Some Error'});
        }

        return res.json({'success': true, 'message': 'Todos fetched successfully', todos});
    });
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
    console.log('mongoose.Types.ObjectId(req.params._id)', mongoose.Types.ObjectId(req.params._id))
    console.log('req.params.id', req.params.id);
    console.log('req.params', req.params);

    let element_id=mongoose.Types.ObjectId(req.params._id);

    // Tod.remove({_id: element_id}, function(err) {
    //     if(err) {console.log(err);}
    //     else {console.log("Deleted!");}
    // });

    Todo.findByIdAndRemove(element_id, function(err) {
        if (err) throw err;
        console.log('Task deleted!');
    });

};
// export const deleteTodo = (req,res) => {
//     let element_id=mongoose.Types.ObjectId(req.params._id)
//     Too.findByIdAndRemove(element_id, (err,todo) => {
//         if(err){
//             console.log('err',err);
//             return res.json({'success':false,'message':'Some Error'});
//         }
//         return res.json({'success':true,'message': 'deleted successfully'});
//     })
// };
