/**
 * Created by kprasad on 2/18/16.
 */


var http = require("http");

http.createServer(function(request, response){
    console.log("Request received");
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Hello KK! Keep learning node.js");
    response.end();
}).listen(8888);

console.log("Server has started");