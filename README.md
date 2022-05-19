# Aplicação Backend com Node.js + MySQL

![TABLE](https://user-images.githubusercontent.com/96146165/169185035-488d680b-1701-47d0-82fe-4f33afef7fda.png)

CREATE DATABASE DB_userRegistration;

USE DB_userRegistration;

CREATE TABLE users(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
firstname VARCHAR(50) NOT NULL, 
lastname VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL, 
password VARCHAR(100) NOT NULL
);

SELECT * FROM users;
