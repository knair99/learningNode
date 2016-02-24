var express = require('express');
var router = express.Router();
var users = require('../data/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Get user list
router.get('/users', function(req, res, next){
  res.render('users/index', {title:'Users listing', users: users});
});


//Get each user by name
router.get('/users/:name', function(req, res, next){
  var user = users[req.params.name];
  if(user){
    res.render('users/profile', {title:'User profile', user: user});
  }
  else{
    next();
  }
});

module.exports = router;
