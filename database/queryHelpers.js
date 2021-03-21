const postFormatter = (params) => {
  const { product_id, rating, summary, body, recommend, name, email } = params;
  const reviewer_name = name;
  const reviewer_email = email;
  const date = new Date().toISOString().slice(0, 10);
  const helpfulness = 0;
  const response = '';
  const reported = false;

  const input = [product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness];

  return input;
};

module.exports = {
  postFormatter
};