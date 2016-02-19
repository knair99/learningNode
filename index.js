/**
 * Created by Karunakaran_Prasad on 2/19/2016.
 */


var server = require ("./server");
var router = require ("./router");

server.start(router.route);