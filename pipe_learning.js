/**
 * Created by Karunakaran_Prasad on 2/23/2016.
 */

var spawn = require ('child_process').spawn;
var http = require('http');
var fs = require('fs');

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

function get_ls(){
    var child = spawn('ls', ['-latr']);
    var str = "";
    child.stdout.pipe(str);

    child.stdout.on('end', function(){
        child.kill();
    });

    return str;
}
http.createServer(function(req, res){

    res.writeHead(200, {'Content-type' : 'text/plain'});
    res.write(get_ls());
    res.end();

}).listen(8888);