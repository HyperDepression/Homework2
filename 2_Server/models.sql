CREATE TABLE genres(
	id serial PRIMARY KEY,
	name varchar(32) UNIQUE NOT NULL
);

CREATE TABLE films(
	id serial PRIMARY KEY,
	name varchar(32) NOT NULL,
	year integer
);

CREATE TABLE film_genre(
	filmId integer REFERENCES films (id) ON DELETE CASCADE,
	genreId integer REFERENCES genres (id) ON DELETE CASCADE
);