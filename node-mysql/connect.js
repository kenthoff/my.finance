let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sql_store'
});


connection.connect(function(err) {
  let asdf;
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
  connection.query('SELECT * FROM customers', function (err, result, fields) {
    console.log(result[0]);
  });
});

connection.end(function(err) {

  console.log('Close the database connection.');
});