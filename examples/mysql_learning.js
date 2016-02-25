/**
 * Created by kprasad on 2/25/16.
 */

var mysql = require('mysql');


var client = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root',
    database: 'node'
});


client.connect();

var data = [300, "the content"];

//client.query('INSERT INTO test (id, content) VALUES (?, ?)', data);
//client.query('INSERT INTO test (id, content) VALUES (?,?)', data);

var query = client.query('SELECT * FROM test');

query.on('error', function(err){
    throw err;
});

query.on('field', function(field){
    console.log('received field:');
    console.log(field);
});

query.on('result', function(row){
    console.log('received row: ');
    console.log(row);
});

query.on('end', function(result){
   console.log("done getting results!!")
});

client.end();



