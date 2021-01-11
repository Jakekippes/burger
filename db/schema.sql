
DROP TABLE IF EXISTS burgers;
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (

	id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    burger_name VARCHAR(255),
    devoured BOOLEAN DEFAULT false
    
);