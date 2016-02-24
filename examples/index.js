/**
 * Created by Karunakaran_Prasad on 2/19/2016.
 */


var server = require ("./server");
var router = require ("./router");
var requestHandlers = require("./requestHandlers");

var handle = {
    "/": requestHandlers.start,
    "/start": requestHandlers.start,
    "/upload": requestHandlers.upload
}

server.start(router.route, handle);