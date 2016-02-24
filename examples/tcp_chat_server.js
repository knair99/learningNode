/**
 * Created by Karunakaran_Prasad on 2/22/2016.
 */

var port = 4001;
var server = require('net').createServer(handle_sockets);

//all connections
var clients= [];
var sentence = "";

//wait for new connections
server.on('listening', function () {
    console.log('Server is listening on port', port);
});

//handle new connections
server.on('connection', function (socket) {
    console.log('Server has a new connection!');
    clients.push(socket);
});

//when server closes
server.on('close', function () {
    console.log('Server has left the building');
});

//handle all errors
server.on('error', function (data) {
    console.log('uh oh. error in the socket');
});

function handle_sockets(socket) {
    //now actual sockets
    socket.on('data', function (data) {

        if(data == '\r\n'){
            clients.forEach(function(others){
                if(others != socket){
                    others.write('client ' + clients.indexOf(socket) + 'says: ' + sentence + '\n');
                }
            });
            sentence = "";
        }
        else{
            sentence += data;
        }

        console.log('Client ' + clients.indexOf(socket) + ' says: ' + data);
    })

    socket.on('close', function(){
       console.log('connection closed');
        var index = clients.indexOf(socket);
        sockets.delete(index);
    });

    socket.on('end', function (data) {
        console.log('Bye from client');
    })

}

server.listen(port);