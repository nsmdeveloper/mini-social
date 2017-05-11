var mongojs = require('mongojs');
var usersdb = mongojs('users',['users']);

exports.create = function(username, password, req, res){

    var data = {

    username: username,
    password: password,

  };

  usersdb.users.insert(data, function(err, result){

    if(err){
      res.json(err);
  }

    res.json({message: result});

  });

}


exports.getAll = function(res, callback){

  var data;

  usersdb.users.find(function(err, docs){

    if(err){
      res.send(err);
    }

        callback(docs);

  });

}



