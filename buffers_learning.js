/**
 * Created by kprasad on 2/21/16.
 */

//a buffer is a way to store raw data in node

var buffer = new Buffer(10);

for(var i = 0; i < 10; i++){
    buffer[i] = i;
}

console.log(buffer);