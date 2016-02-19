/**
 * Created by kprasad on 2/18/16.
 */


function route(handle, pathname){
    console.log("Currently routing " + pathname );
    if(typeof handle[pathname] === 'function'){
        handle[pathname]();
    }
    else{
        console.log("Unable to find a handler for your request");
    }

}

exports.route = route;