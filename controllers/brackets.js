var mysql = require('mysql')
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'student',
  password: 'student',
  database: 'csci467'
});

connection.connect();

module.exports = {
    getAll: async result => {
        connection.query('select * from brackets', function(err, rows){
            if (err) throw err;
            console.log('rows: ', rows);
            result(rows);
        });
    }
}