CREATE TABLE persons(
	id serial PRIMARY KEY,
	name varchar(32) NOT NULL,
	height integer,
	birthdate date,
	birthplace varchar(32)
);

CREATE TABLE actors(
	id serial PRIMARY KEY,
	name varchar(32) NOT NULL,
	height integer,
	birthdate date,
	birthplace varchar(32)
);

CREATE TABLE dubbers(
	id serial PRIMARY KEY,
	name varchar(32) NOT NULL,
	height integer,
	birthdate date,
	birthplace varchar(32)
);

CREATE TABLE genres(
	id serial PRIMARY KEY,
	name varchar(32) NOT NULL
);
	
CREATE TABLE countries(
	id serial PRIMARY KEY,
	name varchar(32) NOT NULL
);
	
CREATE TABLE films(
	id serial PRIMARY KEY,
	name varchar(32) NOT NULL,
	year integer,
	slogan text,
	budget integer,
	marketing integer,
	fees_usa integer,
	fees_world integer,
	premier_russia date,
	premier_world date,
	dvd_release date,
	age integer,
	mpaa_rating varchar(5),
	length integer,
	directorId integer REFERENCES persons (id),
	scenaristId integer REFERENCES persons (id),
	producerId integer REFERENCES persons (id),
	operatorId integer REFERENCES persons (id),	 
	composerId integer REFERENCES persons (id),
	designerId integer REFERENCES persons (id),
	editorId integer REFERENCES persons (id)
);
	
CREATE TABLE film_actor(
	filmId integer REFERENCES films (id),
	actorId integer REFERENCES actors (id)
);
	
CREATE TABLE film_dubber(
	filmId integer REFERENCES films (id),
	dubberId integer REFERENCES dubbers (id)
);
	
CREATE TABLE film_country(
	filmId integer REFERENCES films (id),
	countryId integer REFERENCES countries (id)
	views integer
);
	
CREATE TABLE film_genre(
	filmId integer REFERENCES films (id),
	genreId integer REFERENCES genres (id)
);