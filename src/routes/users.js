import Router from 'koa-router';
import { getUsers } from '../controllers/users';


const usersRouter = new Router();

usersRouter.get('/', getUsers)


export default usersRouter;