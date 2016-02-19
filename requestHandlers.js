/**
 * Created by Karunakaran_Prasad on 2/19/2016.
 */

function start(response){
    console.log("Request handling 'start'");
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Hello from Start");
    response.end();
}

function upload(response){
    console.log("Request handling 'upload'");
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Hello from Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;