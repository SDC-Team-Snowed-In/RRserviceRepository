const Koa = require('koa');
const Router = require("koa-router");
const cors = require('koa-cors');
const database = require('./db.js');

const server = new Koa();
const router = new Router();

//  handle the demon that is CORS
server.use(cors());

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
router.get('/reviews/:id/:count', async (context, next) => {
  const reviews = await database.getReviews(context.params);
  context.status = 200;
  console.log(reviews);
  context.body = reviews;
  await next();
});

router.get('/reviews/meta/:id', async (context, next) => {
  console.log(context.params);
  const meta = await database.getMeta(context.params);

  context.status = 200;
  context.body = meta;
  await next();
});

router.post('/reviews/:id', async (context, next) => {
  const post = await 'blah blah blah';
  console.log(post);
  context.status = 204;
});

router.put('/reviews/:id/helpful', async (context, next) => {
  const helpful = await database.markReviewHelpful(context.params);
  context.status = 204;
});

router.put('/reviews/:id/report', async (context, next) => {
  const report = await database.reportReview(context.params);
  context.status = 204;
});

// mount the router to our web application
server.use(router.routes());
server.use(router.allowedMethods());

// launch the server
server.listen(3005);