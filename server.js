const app = require('express');
const PORT = 3004;

app.get('/reviews' (err, results) => {
  // db.getReviews
});

app.get('/reviews/meta', (err, results) => {
  //sjdsjdusdu
}

app.post('/reviews', (err, results) => {

});

app.put('/reviews/:review_id/helpful', (err, results) => {

});

app.put('/reviews/:review_id/report', (err, results) => {

});

app.listen(PORT, () => {
  console.log(`Server is now listening on port ${PORT}`);
});

