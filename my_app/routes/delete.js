/**
 * Created by kprasad on 2/24/16.
 */
var express = require('express');
var router = express.Router();
var users = require('../data/users');

//Delete a user
router.post('/:name', function(req, res, next){
    req.user.remove(function(err){
        if(err){
            return next(err);
        }
        res.redirect('/users');
    });
});

module.exports = router;