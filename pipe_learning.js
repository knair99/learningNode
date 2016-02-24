/**
 * Created by Karunakaran_Prasad on 2/23/2016.
 */

var spawn = require ('child_process').spawn;
var http = require('http');
var fs = require('fs');
var done = false;

function pipe_process(req, res){
    //piping output of a process
    var child = spawn('ls', ['-latr']);
    child.stdout.pipe(res);
    res.on('end', function(){
        child.kill();
    });
}

function pipe_file(req, res){
    res.writeHead(200, {'Content-type': 'text'});
    var rs = fs.createReadStream('kk.txt');
    rs.pipe(res);
}

function get_ls(req, res){

    for(var i = 0; i < 10; i++) {

        setTimeout(function () {
            var child = spawn('ls', ['-latr']);
            child.stdout.pipe(res);
            child.stdout.on('end', function () {
                child.kill();
            });
        }, 1000);
    }

    done = true;
}
http.createServer(function(req, res){

    res.writeHead(200, {'Content-type' : 'text/plain'});
    get_ls(req, res);

    //while(!done)

}).listen(8888);