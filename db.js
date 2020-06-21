var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'206.189.178.241',
    user:'root',
    password:'1997Kristy',
    database:'classicmodels'
});
connection.connect(function(error){
    if(!!error) {
        console.log(error);
    } else {
        console.log('Connected..!');
    }
});

module.exports = connection;
