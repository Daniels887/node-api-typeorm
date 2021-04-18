import { Router } from 'express';

import UserController from '@controllers/UserController';
import authMiddleware from './middlewares/auth';
import SessionControler from '@controllers/SessionController';
import ListController from '@controllers/ListController';
import TodoController from '@controllers/TodoController';

const router = Router();

router.post('/user', UserController.store);
router.post('/auth', SessionControler.store);

router.use(authMiddleware);

router.post('/list', ListController.store);
router.get('/lists/:user_id', ListController.show);
router.put('/list/:id', ListController.update);
router.delete('/list/:id', ListController.delete);

router.post('/todo', TodoController.store);
router.get('/todos/:list_id', TodoController.show);
router.put('/todo/:id', TodoController.update);
router.delete('/todo/:id', TodoController.delete);

export default router;
