/**
 * Created by kprasad on 2/24/16.
 */
var express = require('express');
var router = express.Router();
var users = require('../data/users');

//Delete a user
router.post('/:name', function(req, res, next){
    if(users[req.params.name]){
        delete users[req.params.name]; //delete from json object in memory
        res.redirect('/users');
    } else {
        next();
    }
});

module.exports = router;