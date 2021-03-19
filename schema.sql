DROP DATABASE IF EXISTS ratingsreviewsTest1

CREATE DATABASE ratingsreviewsTest1
\c ratingsreviewsTest1

CREATE TABLE reviews
(
    id integer NOT NULL DEFAULT nextval('reviews_id_seq'::regclass),
    product_id integer,
    rating integer,
    date text COLLATE pg_catalog."default",
    summary text COLLATE pg_catalog."default",
    body text COLLATE pg_catalog."default",
    recommend boolean,
    reported boolean,
    reviewer_name text COLLATE pg_catalog."default",
    reviewer_email text COLLATE pg_catalog."default",
    helpfulness integer,
    CONSTRAINT reviews_pkey PRIMARY KEY (id)
)

CREATE TABLE photos
(
    id serial NOT NULL,
    review_id integer NOT NULL,
    url text NOT NULL,
    PRIMARY KEY (id),
);
