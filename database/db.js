const { Pool, Client } = require('pg');
const config = require('../config');
const queries = require('./queries');
const formatters = require('./queryHelpers');

// const clientOptions = {
//   host: 'localhost',
//   user: 'postgres',
//   password: `${config.password}`,
//   database: 'rrloadtest',
// }

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: `${config.password}`,
  database: 'rrloadtest',
  port: 5432
});

//  incorporated into front-end
const getReviews = async (params) => {
  const input = [params.id, params.count];

  try {
    const reviews = await pool.query(queries.getReviewsQuery, input);
    return reviews.rows;
  }
  catch (error) {
    console.log(error);
  }
};

const getMeta = async (params) => {
  const input = [params.id];

  try {
    console.log(params);
    const meta = await pool.query(queries.getMetaQuery, input);
    return meta.rows;
  }
  catch (error) {
    console.log(error);
  }
};

//incorporated into front-end
const postReview = async (params) => {
  const input = formatters.postFormatter(params);

  try {
    const post = await pool.query(queries.postReviewQuery, input);
    return post;
  }
  catch (error) {
    console.log(error);
  }
};

//incorporated into front-end
const markReviewHelpful = async (params) => {
  const input = [params.id];

  try {
    const response = await pool.query(queries.helpfulQuery, input);
    return response;
  }
  catch (error) {
    console.log(error);
  }
};

//incorporated into front-end
const reportReview = async (params) => {
  const input = [params.id];

  try {
    const response = await pool.query(queries.reportQuery, input);
    return response;
  }
  catch (error) {
    console.log(error);
  }
};

module.exports = {
  getReviews,
  getMeta,
  markReviewHelpful,
  reportReview,
  postReview
};