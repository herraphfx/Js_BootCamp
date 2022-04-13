-- 1
-- select * from customer

--2
-- select CONCAT(first_name, ' ',last_name ) AS full_name from customer 

--3
-- select distinct create_date from customer

--4
-- SELECT * FROM customer ORDER BY first_name DESC

--5
-- select film_id, title, description, release_year, rental_rate from film
-- order by rental_rate asc

-- 6
-- select first_name, last_name, address, phone from customer 
-- INNER JOIN address 
-- ON customer.address_id = address.address_id
-- where district = 'Texas'

--7
-- select * from film where film_id = 15 OR film_id = 150

-- 8
-- select film_id, title, description, length , rental_rate from film
-- where title ilike '%African%'

--9
-- select film_id, title, description, length , rental_rate from film
-- where title ilike '%de%'

-- 10
-- select * from film where rental_rate <= 1 LIMIT 10

-- 11
-- select * from film where rental_rate <= 1 

-- 12
-- select first_name, last_name, amount, payment_date from customer
-- inner join payment 
-- on customer.customer_id = payment.customer_id 
-- order by customer.customer_id asc
-- limit 10

-- 13
-- select * from film
-- left join inventory
-- on film.film_id = inventory.film_id
-- where film.film_id NOT IN (select inventory.film_id from inventory)
-- order by film.film_id

--14

-- select city.city, country.country from city
-- inner join country
-- on city.country_id = country.country_id
-- order by country.country_id asc

--15
-- select  staff.staff_id, customer.customer_id, customer.first_name, customer.last_name, amount, payment_date, 
-- concat(staff.first_name, ' ', staff.last_name) as Staff_name   from customer
-- inner join payment
-- on customer.customer_id = payment.customer_id
-- inner join staff
-- on payment.staff_id = staff.staff_id
-- order by payment.staff_id asc


--16 total sales
-- -- select sum(payment.amount) as number_of_rentals,
-- -- avg(payment.amount) as average_rental_amount,
-- -- count(payment.amount),
-- -- stddev(payment.amount)
-- -- from payment
-- -- join customer
-- -- on payment.customer_id = customer.customer_id
-- -- where payment.staff_id = 2













 