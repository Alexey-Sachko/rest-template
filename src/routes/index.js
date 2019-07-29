import Router from 'koa-router';
import usersRouter from './users';

const router = new Router();

router.use('/users', usersRouter.routes())


export const routes = () => router.routes();
export const allowedMethods = () => router.allowedMethods();