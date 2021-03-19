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

load data from csv file
\copy [tablename] from '/Users/nickpapadakis/Desktop/SDC/rr-data/reviews_photos.csv' (absolute path, just drag schema file into terminal) DELIMITER ',' CSV HEADER ENCODING 'UTF8';