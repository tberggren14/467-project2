var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
});

connection.connect();

module.exports = {
    getAll: async result => {
        connection.query('SELECT * FROM brackets', function (err, rows) {
            if (err) throw err;
            result(rows);
        });
    }
}