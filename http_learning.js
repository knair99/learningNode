/**
 * Created by kprasad on 2/23/16.
 */


var http = require('http');
var fs = require('fs');
var inspect = require('util').inspect;

var options = {
    host: "www.yahoo.com",
    port: 80,
    path: "/",
    //this will stop reusing the same socket pool (5 sockets per host:port)
    //agent: false,
    method: "GET"
};

//var file = fs.createWriteStream('/Users/kprasad/Desktop/google.html');
//how to 'curl' a webpage with an http request, and write to file
/*http.request(options, function(response){
    response.pipe(file);
}).end();
*/

//This Agent is the socket manager inside of Node.js
//http.Agent.defaultMaxSockets = 10; //<- will now use 10 sockets per host:port pair

//how to use 'request' module from npm
//npm install request

var request = require('request');

/*request.get('www.symantec.com', function(err, res, body){
    console.log("got the home page of google");
    console.log(inspect({
        err: err,
        res: {
            statusCode: res.statusCode
        },
        body: JSON.parse(body)
    }))
});
*/
//all http verbs can be used with request - http.put, post, get, delete, head


