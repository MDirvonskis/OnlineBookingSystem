const mysql = require('mysql2');
module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'mdSQL',
    password: '@SQL17',
    database: 'OnlineBookingSystem'
});
