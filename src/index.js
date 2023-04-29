(async () => {
    const db = require('../db');
    console.log('mysql started');

    console.log('INSERT INTO users');
    const resultInsert = await db.insertUsers({
        firstname: 'Ronan',
        lastname: 'Gonçalves Figuerêdo',
        email: 'ronangoncalves@gmail.com',
        password: '******'
    });
    console.log(resultInsert);

    console.log('SELECT * FROM users');
    const users = await db.selectUsers();
    console.log(users);

    console.log('UPDATE users');
    const resultUpdate = await db.updateUsers(3, {
        firstname: 'Nilso',
        lastname: 'Junior',
        email: 'nilsojunior90@gmail.com',
        password: '******'
    });
    console.log(resultUpdate);

    console.log('DELETE FROM users');
    const resultDelete = await db.deleteUsers(9);
    console.log(resultDelete);
})();