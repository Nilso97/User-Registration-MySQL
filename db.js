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

async function insertUsers(user) {
    const conn = await connect();
    const sql = 'INSERT INTO users(firstname, lastname, email, password) VALUES (?,?,?,?);';
    const values = [user.firstname, user.lastname, user.email, user.password];
    return await conn.query(sql, values);
}

async function selectUsers() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM users;');
    return await rows;
}

async function updateUsers(id, user) {
    const conn = await connect();
    const sql = 'UPDATE users SET firstname=?, lastname=?, email=?, password=? WHERE id=?;';
    const values = [user.firstname, user.lastname, user.email, user.password, id];
    return await conn.query(sql, values);
}

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