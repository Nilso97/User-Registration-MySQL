# Aplicação Backend com Node.js + MySQL ![database (1)](https://user-images.githubusercontent.com/96146165/167915387-a1832398-48a4-4261-8ca9-febea674d17c.png)
Aplicação Backend para Cadastro de Usuários desenvolvida em Node.js conectada ao Banco de dados MySQL 👥 🖥 💾 

- Gera uma ID automática;
- Cadastra os seguintes dados: 
Nome;
Sobrenome;
E-mail;
Senha;

Após isso, todos esses dados são armazenados na base de dados do MySQL

## Instalação das depêndencias:
- npm init -y
- npm install mysql2
ou
- yarn init -y
- yarn add mysql2

### user: root / password: 1234

#### Servidor em execução 👏
![Sem título](https://user-images.githubusercontent.com/96146165/169265521-a5f92a5e-1176-4b49-8b3f-02bcff31f72b.png)

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

![TABLE](https://user-images.githubusercontent.com/96146165/169265378-c82e4dc1-598c-4a37-a119-d6a317fa9ada.png)


