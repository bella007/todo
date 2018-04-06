import express from 'express';

import * as userController from '../controllers/users.server.controller';

const router = express.Router();

console.log('router router')
router.route('/')
    .get(userController.getUsers)
    .post(userController.addUsers);

router.route('/:id')
    .delete(userController.deleteUser)
    .post(userController.editUser);

export default router;
