const mysql=require('mysql2')
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    port     : '3306',
    password : '1234',
    database : 'world'
});
module.exports = connection;
