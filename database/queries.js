const getReviewsQuery = `SELECT *
  FROM reviews,
    LATERAL (
      SELECT array_agg (
	      array[
		      photos.id::text,
		      photos.url
	      ]) AS photos
		  FROM photos
		  WHERE photos.review_id = reviews.id
    ) AS p
  WHERE product_id = $1
  LIMIT $2`;

const postReviewQuery = `INSERT INTO reviews
(product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;

const getMetaQuery = `SELECT * from characteristicsreviews WHERE review_id=$1 limit 100`;

const helpfulQuery = 'UPDATE reviews SET helpfulness=(helpfulness + 1) WHERE id=$1';

const reportQuery = 'UPDATE reviews SET reported=true WHERE id=$1';

module.exports = {
  getReviewsQuery,
  postReviewQuery,
  getMetaQuery,
  helpfulQuery,
  reportQuery
};