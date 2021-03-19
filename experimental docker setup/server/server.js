const Koa = require('koa');
const Router = require("koa-router");
const serve = require('koa-static');
const cors = require('koa-cors');

const server = new Koa();
const router = new Router();

//  serve build of app
server.use(serve('./build'));

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
router.get("/reviews", async (context, next) => {
  const tweets = await helper.summonDogeWisdom();
  context.status = 200;
  context.body = tweets;
  await next();
});

router.get("/reviews/meta", async (context, next) => {
  const tweets = await helper.summonDogeWisdom();
  context.status = 200;
  context.body = tweets;
  await next();
});

router.post("/reviews", async (context, next) => {
  const tweets = await helper.summonDogeWisdom();
  context.status = 200;
  context.body = tweets;
  await next();
});

router.get('/reviews/:review_id/helpful', async (context, next) => {
  const tweets = await helper.summonDogeWisdom();
  context.status = 200;
  context.body = tweets;
  await next();
});

router.get('/reviews/:review_id/report', async (context, next) => {
  const tweets = await helper.summonDogeWisdom();
  context.status = 200;
  context.body = tweets;
  await next();
});

// mount the router to our web application
server.use(router.routes());
server.use(router.allowedMethods());

// launch the server
server.listen(3001);