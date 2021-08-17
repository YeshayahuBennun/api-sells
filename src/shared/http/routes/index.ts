import productRouter from '@modules/product/routes/products.routes';
import passwordRouter from '@modules/user/routes/password.routes';
import sessionsRouter from '@modules/user/routes/sessions.routes';
import usersRouter from '@modules/user/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);

export default routes;
