DROP DATABASE IF EXISTS servertest1;

CREATE DATABASE servertest1;
\c servertest1;

CREATE TABLE reviews
(
    id serial NOT NULL,
    product_id integer NOT NULL,
    rating integer,
    date text,
    summary text,
    body text,
    recommend boolean,
    reported boolean,
    reviewer_name text,
    reviewer_email text,
    response text,
    helpfulness integer,
    PRIMARY KEY (id)
);

CREATE TABLE photos
(
    id serial NOT NULL,
    review_id integer NOT NULL,
    url text NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (review_id) REFERENCES reviews(id)
);

CREATE TABLE characteristics
(
    id serial NOT NULL,
    product_id integer NOT NULL,
    name text NOT NULL,
    PRIMARY KEY (id),
);

CREATE TABLE characteristicsreviews
(
    id serial NOT NULL,
    characteristic_id integer,
    review_id integer,
    value integer,
    PRIMARY KEY (id),
    FOREIGN KEY (characteristic_id) references characteristics (id),
    FOREIGN KEY (review_id) references reviews (id)
);




