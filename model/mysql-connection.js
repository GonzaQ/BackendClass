var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Primavera2020",
  database : 'Test'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;