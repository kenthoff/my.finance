var express = require('express');
var router = express.Router();
let mysql = require('mysql');
var url = require('url');




/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("Receiveddd!");
  
  var queryData = url.parse(req.url, true).query;

  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sql_store'
  });
console.log(queryData.name);
  connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
    query = `SELECT * FROM customers WHERE first_name = "${queryData.name}"`;
    connection.query(query , function (err, result, fields) {
      console.log(result);
      res.json(result);
    });
  });
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  /*
  console.log("Received!");
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sql_store'
  });
  connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
    connection.query('SELECT * FROM customers WHERE first_name = "Elka"', function (err, result, fields) {
      console.log(result);
      res.json(result);
    });
  });
  */
 const newUser = {
    first_name: request.body.first_name,
    last_name: request.body.last_name
  };

  response.status(201).json(newUser);
});

module.exports = router;
