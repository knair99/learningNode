/**
 * Created by kprasad on 2/23/16.
 */


var connect = require('connect');
var query = require('connect-query')

//import custom middleware
var helloWorld = require('./middleware_test');

var app = connect();
app.use(query());

//could have passed in helloWorld as the callback
//here we can examine url params
app.use(function(req, res){
    res.end(JSON.stringify(req.query));
});

//using cookie parsing
//app.use(connect.cookieParser());
//https://github.com/pillarjs/cookies


app.listen(8888);