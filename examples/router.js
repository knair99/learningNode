/**
 * Created by kprasad on 2/18/16.
 */


function route(handle, pathname, response, postData){

    console.log("Currently routing " + pathname );

    if(typeof handle[pathname] === 'function'){
        handle[pathname](response, postData);
    } else{
        console.log("Unable to find a handler for " + pathname);
    }

}

exports.route = route;