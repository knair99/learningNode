var express = require('express');
var router = express.Router();
var users = require('../data/users');

//Get user list
router.get('/', function(req, res){
  res.render('users/index', {title:'Users listing', users: users});
});

//Add new user
router.get('/newp', function(req, res){
  res.render('users/newp', {title: "New user"});
});

//Get each user by name
router.get('/:name', function(req, res, next){
  var user = users[req.params.name];
  if(user){
    res.render('users/profile', {title:'User profile', user: user});
  } else{
    next();
  }
});


//POST request for users
router.post('/', function(req, res){
  if(users[req.body.username]){
    res.send('Conflict', 409);
  } else{
    users[req.body.username] = req.body;
    res.redirect('/users');
  }
});

//Delete a user
router.delete('/user/:name', function(req, res, next){
  if(users[req.params.name]){
    delete users[req.params.name]; //delete from json object in memory
    res.redirect('/users');
  } else {
    next();
  }
});


module.exports = router;
