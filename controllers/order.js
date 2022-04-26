var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

connection.connect();

module.exports = {
    getAll: async result => {
        connection.query('SELECT * FROM customerorder', function(err, rows){
            if (err) throw err;
            console.log('rows: ', rows);
            result(rows);
        });
    }
}