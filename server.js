const Koa = require('koa');
const Router = require("koa-router");
const serve = require('koa-static');
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
router.get("/reviews", async (context, next) => {
  const photos = await database.getPhotos(5);
  context.status = 200;
  context.body = photos;
  await next();
});

// mount the router to our web application
server.use(router.routes());
server.use(router.allowedMethods());
database.pool.connect();

// launch the server
server.listen(3005);