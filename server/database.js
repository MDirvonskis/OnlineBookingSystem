const mysql = require('mysql2');
module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'md',
    password: '@SQL17',
    database: 'OnlineBookingSystem'
});
