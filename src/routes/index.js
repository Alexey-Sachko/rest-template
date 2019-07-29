import Router from 'koa-router';


const router = new Router();

router.get('/', ctx => {
  ctx.body = 'hello world'
})


export const routes = () => router.routes();
export const allowedMethods = () => router.allowedMethods();