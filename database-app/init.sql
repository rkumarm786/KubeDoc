CREATE USER raj WITH PASSWORD 'raj';
CREATE DATABASE testing_db;
GRANT ALL PRIVILEGES ON DATABASE testing_db TO raj;

-- Create tables and insert data
CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(100), email VARCHAR(100), age int);
INSERT INTO users (name, email, age) VALUES ('Raj (Container)', 'raju@bhai.com', 27);
