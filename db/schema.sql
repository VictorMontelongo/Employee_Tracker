DROP DATABASE IF EXISTS employee_info_db;

CREATE DATABASE employee_info_db;

USE employee_info_db;

CREATE TABLE department (

id INT NOT NULL,

name VARCHAR(50) NOT NULL,

PRIMARY KEY(id)

);

CREATE TABLE role (

id INT NOT NULL,

title VARCHAR(50) NOT NULL,

salary DECIMAL(10,2) NOT NULL,

department_id INT NOT NULL,

PRIMARY KEY (id)

);

CREATE TABLE employee (

id INT NOT NULL,

first_name VARCHAR(50) NOT NULL,

last_name VARCHAR(50) NOT NULL,

role_id INT NOT NULL,

manager_id INT,

PRIMARY KEY (id)

);