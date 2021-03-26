const Koa = require('koa');
const Router = require("koa-router");
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const controllers = require('./controllers');

const server = new Koa();
const router = new Router();

server.use(cors());
server.use(bodyParser({ enableTypes: ['json', 'text'] }));

server.use(async (context, next) => {
  try {
    await next();
  } catch (error) {
    console.log(error);
    context.status = 500;
    context.body = error;
  }
});

router
  .get('/reviews/:id/:count', controllers.reviews)
  .get('/meta/:id', controllers.meta)
  .post('/reviews/:id', controllers.post)
  .put('/reviews/:id/helpful', controllers.helpful)
  .put('/reviews/:id/report', controllers.report);

server.use(router.routes());
server.use(router.allowedMethods());

server.listen(3005);