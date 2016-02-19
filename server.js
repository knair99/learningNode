/**
 * Created by kprasad on 2/18/16.
 */


var http = require("http");
var url = require("url");

function start(route, handle) {
    //request response callback
    function onRequest(request, response){

        var pathname = url.parse(request.url).pathname;
        var postData = "";

        console.log("Request received for " + pathname);

        //now handle POST data
        request.setEncoding("utf8");

        //now add asynchronous listeners to get bits of data
        request.addListener("data", function(postDataChunk){
            postData += postDataChunk;
            console.log("Got POST data chunk : " + postDataChunk + ". ");
        });

        //and add an asynchronous function to process when the POST ended
        request.addListener("end", function(){
            //Route to appropriate handlers
            route(handle, pathname, response, postData);

        });
    }

    //create the server
    http.createServer(onRequest).listen(8888);
    console.log("Server started");
}

exports.start = start;