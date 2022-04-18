-- SELECT name FROM language

-- Films even though no language
-- SELECT title, description, language.name FROM film
-- LEFT join language
-- ON film.language_id = language.language_id



-- All language even know film
-- SELECT title, description, language.name FROM film
-- FULL join language
-- ON film.language_id = language.language_id

--  CREATE TABLE new_film(
--  id INTEGER PRIMARY KEY,
--  name TEXT NOT NULL
--  );

-- INSERT INTO new_film(id, name)
--  VALUES( 1, 'The Shawshank Redemption'),
--  (	2, 'The Godfather'),
--  (	3, 'The Dark Knight'),
--  (	4, 'The Godfather: Part II'),
--  (	5, '12 Angry Men'),
--  (	6, 'Schindlers List')

-- 4
-- CREATE TABLE customer_review(
-- review_id SERIAL PRIMARY KEY,
-- film_id INTEGER,
-- language_id INTEGER,
-- title TEXT,
-- score SMALLINT CHECK(score > 1 <= 10) ,
-- review_text TEXT,
-- last_update TEXT,
-- FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
-- FOREIGN KEY (language_id) REFERENCES language(language_id) ON DELETE CASCADE
-- );

--5
-- INSERT INTO customer_review(film_id, language_id, title, score, review_text)
--  VALUES((Select id from new_film where name= 'The Dark Knight' ), 
--   (Select language_id from language where language_id =1),
--   (Select name from new_film where name = 'The Dark Knight'),
-- 	 7, 
--  	   'About a boy in court'
--  );
	  
-- select * from customer_review

-- 6 
-- DELETE FROM new_film where name= 'The Godfather'
-- select * from new_film
-- FULL JOIN customer_review
-- ON new_film.id = customer_review.film_id


-- Part 2
-- 1
-- UPDATE film
-- set language_id = 3
-- where film_id = 1
-- returning
-- film_id,
-- title,
-- description,
-- language_id

--2
-- select * from customer



