# Aplicação Backend com Node.js + MySQL ![database (1)](https://user-images.githubusercontent.com/96146165/167915387-a1832398-48a4-4261-8ca9-febea674d17c.png)
Aplicação Backend para Cadastro de Usuários desenvolvida em Node.js conectada ao Banco de dados MySQL 👥 🖥 💾 

## Instalação das depêndencias:
- npm init -y
- npm install mysql2
ou
- yarn init -y
- yarn add mysql2

### user: root / password: 1234

## Comandos SQL utilizados na aplicação:

- <strong>CREATE DATABASE</strong> DB_userRegistration;

- <strong>USE</strong> DB_userRegistration;

- <strong>CREATE TABLE</strong> users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    firstname VARCHAR(50) NOT NULL, 
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL, 
    password VARCHAR(100) NOT NULL
);

- <strong>SELECT * FROM</strong> users;

## Resultado:

![TABLE](https://user-images.githubusercontent.com/96146165/169185035-488d680b-1701-47d0-82fe-4f33afef7fda.png)

