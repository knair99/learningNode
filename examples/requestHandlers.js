/**
 * Created by Karunakaran_Prasad on 2/19/2016.
 */

var querystring = require("querystring");

function start(response, postData){
    console.log("Request handling 'start'");
    var body =
        '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="10" cols="60"></textarea>'+
        '<br>' +
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead(200, {"Content-type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData){
    console.log("Request handling 'upload'");
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Hello from Upload. ");
    response.write("You've posted: \n" + querystring.parse(postData).text);
    response.end();
}

exports.start = start;
exports.upload = upload;