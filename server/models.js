const database = require('../database/db.js');

//  once decoupled from database: axios request to database instance?
exports.getReviews = async (params) => {
  const reviews = await database.getReviews(params);
  return reviews;
};

exports.getMeta = async (params) => {
  const meta = await database.getMeta(params);
  return meta;
};

exports.postReview = async (params) => {
  const response = await database.postReview(params);
  return response;
};

exports.markReviewHelpful = async (params) => {
  const response = await database.markReviewHelpful(params);
  return response;
};

exports.reportReview = async (params) => {
  const response = await database.reportReview(params);
  return response;
};