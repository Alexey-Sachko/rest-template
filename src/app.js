import Koa from 'koa';
import dotenv from 'dotenv';

dotenv.config();
const app = new Koa();
const port = process.env.PORT;

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next();
  });

app.listen(port, function () {
    console.log(`listening at port ${port}`);
});