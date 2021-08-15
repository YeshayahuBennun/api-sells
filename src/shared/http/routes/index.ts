import productRouter from '@modules/product/routes/products.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productRouter);

export default routes;
