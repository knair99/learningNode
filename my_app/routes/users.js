var express = require('express');
var router = express.Router();
var users = require('../data/users');
var User = require('../data/models/users');
var maxUsersPerPage = 2;

//Get user list
router.get('/', function(req, res){
  //this is how mongodb returns all users - find on an empty object
  //pagination for user list
  var page = req.query.page && parseInt(req.query.page, 10) || 0;
  User.count(function(err, count) {
    if (err) {
      return next(err);
    }
    var lastPage = (page + 1) * maxUsersPerPage >= count;
    User.find({})
        .sort('name')
        .skip(page * maxUsersPerPage)
        .limit(maxUsersPerPage)
        .exec(function (err, users) {
          if (err) {
            return next(err);
          }
          res.render('users/index', {title: 'Users listing', users: users, page: page, lastPage: lastPage});
        });
  });
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
//creates a user in mongodb
router.post('/', function(req, res){
  User.findOne({username: req.body.username}, function(err, user){
    if(err){
      return next(err);
    }
    if(user){
      return res.send('Conflict', 409);
    }
    //if not create that user in mongodb
    User.create(req.body, function(err){
      if(err){
        return next(err);
      }
      res.redirect('/users/');
    });
  });
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
