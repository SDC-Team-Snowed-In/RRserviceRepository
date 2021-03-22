# RRserviceRepository
This repo will encapsulate the server/database functionality of our Ratings and Reviews module backend

basic commands in postgres
\c connect to database
\l list databases
\dt list tables for database
\d+ tablename describe table
\i load schema file

load schema from outside postgres
psql postgres -f '/Users/nickpapadakis/Desktop/SDC/RRserviceRepository/schema.sql';


SET session_replication_role = 'replica';

SET session_replication_role = 'origin';

load data from csv file
\copy [tablename] from '/Users/nickpapadakis/Desktop/SDC/rr-data/reviews_photos.csv' (absolute path, just drag schema file into terminal) DELIMITER ',' CSV HEADER ENCODING 'UTF8';

join queries

  SELECT *
FROM reviews, LATERAL (
  SELECT ARRAY (
    SELECT photos.url
    FROM photos
    WHERE photos.review_id = reviews.id

    ) AS photos
WHERE reviews.id = 5
  ) p;

