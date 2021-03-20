const { Pool, Client } = require('pg');
const config = require('./config.js');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'rrloadtest',
  password: `${config.password}`,
  port: 5432
});

pool.connect();

// const client = new Client({
//   host: 'localhost',
//   user: 'postgres',
//   password: 'plato2013',
//   database: 'test5000',
// });

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
// });

// const getPhotos = async (id) => {
//   try {
//     const photos = await pool.query(`Select * from photos where review_id=${id}`);
//     return photos.rows;
//   }
//   catch (error) {
//     console.log(error);
//   }
// };

//incorporated into front-end
//need to get photos for each review as well =(
const getReviews = async (params) => {
  try {
    const queryString = `SELECT * FROM reviews WHERE product_id=$1 limit $2`;
    const input = [params.id, params.count];

    const reviews = await pool.query(queryString, input);
    return reviews.rows;
  }
  catch (error) {
    console.log(error);
  }
};

const getMeta = async (params) => {
  try {
    const queryString = `SELECT * from characteristicsreviews WHERE review_id=$1 limit 100`;
    const input = [params.id];
    console.log(input);

    const meta = await pool.query(queryString, input);
    return meta.rows;
  }
  catch (error) {
    console.log(error);
  }
};
//incorporated into front-end
const markReviewHelpful = async (params) => {
  try {
    const queryString = 'UPDATE reviews SET helpfulness=(helpfulness + 1) WHERE id=$1';
    const input = [params.id];
    const response = await pool.query(queryString, input);
  }
  catch (error) {
    console.log(error);
  }
};
//incorporated into front-end
const reportReview = async (params) => {
  try {
    const queryString = 'UPDATE reviews SET reported=true WHERE id=$1';
    const input = [params.id];
    const response = await pool.query(queryString, input);
  }
  catch (error) {
    console.log(error);
  }
};

module.exports = {
  pool,
  getReviews,
  getMeta,
  // getPhotos,
  markReviewHelpful,
  reportReview,
  // postReview
};