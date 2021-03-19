const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test5000',
  password: 'plato2013',
  port: 5432,
});

// const client = new Client({
//   host: 'localhost',
//   user: 'postgres',
//   password: 'plato2013',
//   database: 'test5000',
// });

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   // pool.end()
// });

const getPhotos = async (id) => {
  try {
    const photos = await pool.query(`Select * from photos Where id=${id}`);
    console.log(photos);
    return photos.rows;
  }
  catch (error) {
    console.log(error);
  }
};

// const getReviews = async (id) => {
//   const reviews = await pool.query('SELECT * from reviews WHERE product_id=1');
//   console.log(reviews);
// };

module.exports = {
  pool,
  getPhotos
  };