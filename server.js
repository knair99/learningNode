/**
 * Created by kprasad on 2/18/16.
 */


var http = require("http");
var url = require("url");

function start(route) {
    //request response callback
    function onRequest(request, response){
        console.log("Request received");
        var pathname = url.parse(request.url).pathname;
        route(pathname);
        response.writeHead(200, {"Content-type": "text/plain"});
        response.write("Hello KK! Keep learning node.js");
        response.end();
    }

    //create the server
    http.createServer(onRequest).listen(8888);
    console.log("Server started");
}

exports.start = start;