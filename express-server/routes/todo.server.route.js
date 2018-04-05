import express from 'express';

import * as todoController from '../controllers/todo.server.controller';

const router = express.Router();

console.log('router router')
router.route('/')
    .get(todoController.getTodos)
    .post(todoController.addTodo);

router.route('/:id')
    .put(todoController.updateTodo)
    .post(todoController.editTodo)
    .delete(todoController.deleteTodo);


export default router;
