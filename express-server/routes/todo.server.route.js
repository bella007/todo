import express from 'express';

import * as todoController from '../controllers/todo.server.controller';

const router = express.Router();

router.route('/')
     .get(todoController.getTodos)
     .post(todoController.addTodo);

router.route('/:id')
    .delete(todoController.deleteTodo);


export default router;
