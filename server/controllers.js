const model = require('./models');

exports.reviews = async (context, next) => {
  const reviews = await model.getReviews(context.params);
  context.status = 200;
  context.body = reviews;
};

exports.meta = async (context, next) => {
  const meta = await model.getMeta(context.params);
  context.status = 200;
  context.body = meta;
};

exports.post = async (context, next) => {
  console.log(context.request.body);
  const post = await model.postReview(context.request.body);
  console.log(post);
  context.status = 204;
};

exports.helpful = async (context, next) => {
  const helpful = await model.markReviewHelpful(context.params);
  console.log(helpful);
  context.status = 204;
};

exports.report = async (context, next) => {
  const report = await model.reportReview(context.params);
  console.log(report);
  context.status = 204;
};


