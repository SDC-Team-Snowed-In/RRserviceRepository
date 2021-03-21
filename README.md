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

  {{1,https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80},

  {2,https://images.unsplash.com/photo-1561693532-9ff59442a7db?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80},

  {3,https://images.unsplash.com/photo-1487349384428-12b47aca925e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80}}
