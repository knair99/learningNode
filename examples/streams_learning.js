/**
 * Created by Karunakaran_Prasad on 2/22/2016.
 */

var fs = require('fs');
var path = 'kk.txt';
var rs = fs.createReadStream(path);
var ws = fs.createWriteStream(path);

//writing from buffer to file
fs.open(path, 'w', function(err, fd){
    var sen = 'this is a new setence';
    ws.write(sen);
    fs.close(fd);
});

//Streaming to console from file
fs.open(path, 'r', function(err, fd){
    rs.on('data', console.log);
    fs.close(fd);
});


