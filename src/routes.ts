import express from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesController.store);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.store);
routes.get('/connections', connectionsController.index);

export default routes;