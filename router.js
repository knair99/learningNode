/**
 * Created by kprasad on 2/18/16.
 */


function route(handle, pathname, response){

    console.log("Currently routing " + pathname );

    if(typeof handle[pathname] === 'function'){
        handle[pathname](response);
    } else{
        console.log("Unable to find a handler for " + pathname);
    }



}

exports.route = route;