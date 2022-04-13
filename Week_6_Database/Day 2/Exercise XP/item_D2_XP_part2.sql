-- Part 1
select * from purchases

-- CREATE TABLE purchases(
-- id SERIAL,
-- customer_id INTEGER,
-- item_id INTEGER,
-- quantity_purchased INTEGER,
-- PRIMARY KEY (id),
-- FOREIGN KEY (customer_id) REFERENCES customers (name_id),
-- FOREIGN KEY (item_id) REFERENCES items (item_id)
-- );

-- 3 Add data to purchases


-- INSERT INTO purchases (customer_id, item_id, quantity_purchased)
-- values((SELECT name_id FROM customers WHERE firstname = 'Scott' AND lastname='Scott'),
-- (SELECT item_id FROM items WHERE item ='fan'), 
-- 	   1),
	   
-- ((SELECT name_id FROM customers WHERE firstname = 'Melanie' AND lastname='Johnson'),
-- (SELECT item_id FROM items WHERE item ='large_desk'), 
-- 	   10),
	   
-- ((SELECT name_id FROM customers WHERE firstname = 'Greg' AND lastname='Jones'),
-- (SELECT item_id FROM items WHERE item ='small_desk'), 
-- 	   2)

-- Part 2
-- select * from purchases

-- SELECT * FROM purchases
-- INNER JOIN customers
-- ON purchases.customer_id = customers.name_id;

-- SELECT * FROM purchases
-- INNER JOIN customers
-- ON purchases.customer_id = customers.name_id
-- WHERE customers.name_id = 5

-- SELECT * FROM purchases
-- INNER JOIN items
-- ON purchases.item_id = items.item_id
-- WHERE items.item = 'large_desk' OR items.item = 'small_desk'


-- SELECT firstname, lastname, item, quantity_purchased FROM purchases
-- INNER JOIN customers
-- ON purchases.customer_id = customers.name_id
-- JOIN items ON purchases.item_id = items.item_id

-- INSERT INTO purchases(customer_id)
-- VALUES((SELECT name_id FROM customers WHERE firstname = 'Trevor' AND lastname ='Green' ))

