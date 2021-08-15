import productRouter from '@modules/product/routes/products.routes';
import usersRouter from '@modules/user/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/users', usersRouter);

export default routes;
