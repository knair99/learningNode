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


io.sockets.on('connection', function (socket) {

    //handle user broadcast messages
    socket.on('clientMessage', function(content) {
        socket.emit('serverMessage', 'You said: ' + content);
        username = socket.username;
        var room = socket.room;
        var message = content;
        if(room){
            socket.broadcast.to(room);
        }
        socket.broadcast.emit('serverMessage', username + ' said: ' + message);
    });

    //handle user login
    socket.on('login', function(username) {
            socket.username = username;
            socket.emit('serverMessage', 'Currently logged in as ' + username);
            socket.broadcast.emit('serverMessage', 'User ' + username +
                ' logged in');
    });

    //handle client disconnects
    socket.on('disconnect', function() {
        username = socket.username;
        socket.broadcast.emit('serverMessage', 'User ' + username + ' disconnected');
    });

    //handle room joins
    socket.on('join', function(room){
       socket.room = room;
       socket.join(room);
        if(socket.oldRoom){
            socket.leave(oldRoom);
        }

        username = socket.username;
        if(!username){
            username = socket.id;
        }

        socket.emit('serverMessage', 'You joined room: ' + room);
        socket.broadcast.to(room).emit('serverMessage', 'User ' + username + ' has joined this room');

    });

    socket.emit('login');
});








