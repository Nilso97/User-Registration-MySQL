// Connection with MySQL
async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection('mysql://root:1234@localhost:3306/DB_userRegistration');
    console.log('connected with mysql at port 3306');
    global.connection = connection;
    return connection;
}

// connect();

/* 
DATABASE: DB_userRegistration  
TABLE: users

   |  ID  |  FIRSTNAME	|    LASTNAME	      |       EMAIL	                     |  PASSWORD  |
   |  1	  | Claudio 	| Oliveira	          | claudiomsi@hotmail.com	         |   ******   |
   |  2	  | Fabio	    | José	              | fabiosilvarodolpho@gmail.com     |   ******   |
   |  3	  | Fernando 	| Eduardo de Souza    | fernando.financeiro@yahoo.com.br |   ******   |
   |  4	  | João 	    | Moura	              | joaomoura.com@gmail.com	         |   ******   |
   |  5	  | Luciano 	| Santos	          | luciano.santos@uol.com.br	     |   ******   |
   |  6	  | Mariana 	| Figueiredo	      | maripitanga@yahoo.com.br	     |   ******   |
   |  7	  | Roberto 	| Paiva	              | robertopaivaf@hotmail.com	     |   ******   |
   |  8	  | Ronan 	    | Gonçalves Figuerêdo | ronangoncalves@gmail.com	     |   ******   |
*/

// INSERT users
async function insertUsers(user) {
    const conn = await connect();
    const sql = 'INSERT INTO users(firstname, lastname, email, password) VALUES (?,?,?,?);';
    const values = [user.firstname, user.lastname, user.email, user.password];
    return await conn.query(sql, values);
}

// SELECT all users
async function selectUsers() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM users;');
    return await rows;
}

// UPDATE users
async function updateUsers(id, user) {
    const conn = await connect();
    const sql = 'UPDATE users SET firstname=?, lastname=?, email=?, password=? WHERE id=?;';
    const values = [user.firstname, user.lastname, user.email, user.password, id];
    return await conn.query(sql, values);
}

// DELETE users
async function deleteUsers(id) {
    const conn = await connect();
    const sql = 'DELETE FROM users WHERE id=?;';
    return await conn.query(sql, [id]);
}

module.exports = {
    selectUsers,
    insertUsers,
    updateUsers,
    deleteUsers
}