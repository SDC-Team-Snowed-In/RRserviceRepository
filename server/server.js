const Koa = require('koa');
const Router = require("koa-router");
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const controllers = require('./controllers');

const server = new Koa();
const router = new Router();

//  handle the demon that is CORS
server.use(cors());

//  parse them bodies
server.use(bodyParser({ enableTypes: ['json', 'text'] }));

//  compress data being sent back to client
// server.use(compress({
//   filter (content_type) {
//   	return /text/i.test(content_type)
//   },
//   threshold: 2048,
//   gzip: {
//     flush: require('zlib').constants.Z_SYNC_FLUSH
//   },
//   deflate: {
//     flush: require('zlib').constants.Z_SYNC_FLUSH,
//   },
//   br: false // disable brotli
// }));

//  error-handling middleware
server.use(async (context, next) => {
  try {
    await next();
  } catch (error) {
    console.log(error);
    context.status = 500;
    context.body = error;
  }
});

// specify route(s)
router
  .get('/reviews/:id/:count', controllers.reviews)
  .get('/meta/:id', controllers.meta)
  .post('/reviews/:id', controllers.post)
  .put('/reviews/:id/helpful', controllers.helpful)
  .put('/reviews/:id/report', controllers.report);

// mount the router to our web application
server.use(router.routes());
server.use(router.allowedMethods());

// launch the server
server.listen(3005);