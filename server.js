/**
 * Created by kprasad on 2/18/16.
 */


var http = require("http");
var url = require("url");

function start(route, handle) {
    //request response callback
    function onRequest(request, response){
        console.log("Request received");

        var pathname = url.parse(request.url).pathname;
        route(handle, pathname, response);
    }

    //create the server
    http.createServer(onRequest).listen(8888);
    console.log("Server started");
}

exports.start = start;