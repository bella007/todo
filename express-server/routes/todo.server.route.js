import express from 'express';

import * as todoController from '../controllers/todo.server.controller';

const router = express.Router();

console.log('todo.server.route.js');
router.route('/')
     .get(todoController.getTodos)
     .post(todoController.addTodo);

router.route('/:id')
    .delete(todoController.deleteTodo);


export default router;
