import customersRouter from '@modules/customer/routes/customers.routes';
import orderRouter from '@modules/orders/routes/orders.routes';
import productRouter from '@modules/product/routes/products.routes';
import passwordRouter from '@modules/user/routes/password.routes';
import profileRouter from '@modules/user/routes/routes.profile';
import sessionsRouter from '@modules/user/routes/sessions.routes';
import usersRouter from '@modules/user/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/customers', customersRouter);
routes.use('/orders', orderRouter);

export default routes;
