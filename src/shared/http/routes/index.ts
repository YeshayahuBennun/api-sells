import productRouter from '@modules/product/routes/products.routes';
import sessionsRouter from '@modules/user/routes/sessions.routes';
import usersRouter from '@modules/user/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
