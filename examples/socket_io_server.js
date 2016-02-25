/**
 * Created by kprasad on 2/24/16.
 */

//learn websockets
var httpd = require('http').createServer(handler);
var io = require('socket.io').listen(httpd);
var fs = require('fs');


httpd.listen(4000);

function handler(req, res){
    fs.readFile(__dirname + '/index.html',
        function(err, data){
            if(err){
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}


io.sockets.on('connection', function(socket){

    socket.emit('login');

    socket.on('clientMessage', function(content){
        socket.emit('serverMessage', 'You said: ' + content);
        socket.broadcast.emit('serverMessage', socket.id + ' said ' + content);
    });


    //handle chat logins
    socket.on('login', function(username){
        socket.set('username', username, function(err){
            if(err){ throw err; }
            socket.emit('serverMessage', 'Currently logged in as ' + function(username){
                socket.broadcast.emit('serverMessage', 'User: ' + username + ' has logged in.' );
            });
        });


    });
});







