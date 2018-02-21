var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://localhost:27017/testcases";
var db = null;

MongoClient.connect(url, function (err, database) {
  if (err) throw err;
  db = database;
});

var response = {
  status: 200,
  message: null,
  data: []
}

//Get all testcases from DB
router.get('/testcases', function(req, res) {
  db.collection("testCaseLists").find().toArray( function(err, data) {
     if (err) throw err;
    response.data = data;
    res.json(response);
     //console.log(res);
   });
});

//Update testcase into DB
router.post('/testcases/edit/:id', function(req, res) {
  var id = new ObjectId(req.params.id );
  var query = { _id : id};
  var newValue = { $set: {title: req.body.title, script: req.body.script } };
  db.collection("testCaseLists").updateOne(query, newValue,  function(err, data) {
    if (err) throw err;
    res.json(data);
  });
});

//Get all single testcase from DB
router.get('/testcases/:id', function(req, res) {
  var id = new ObjectId(req.params.id );
  var query = { _id : id};
  db.collection("testCaseLists").find(query).toArray( function(err, data) {
    if (err) throw err;
    response.data = [];
    response.data = data;
    res.json(response);
  });
});

//add new testcase into DB
router.post('/testcases/add', function(req, res) {
  console.log("inside postt");
  var newValue = {title: req.body.title, script: req.body.script };
  db.collection("testCaseLists").insertOne( newValue,  function(err, data) {
    if (err) throw err;
    console.log('added');
    res.json(data);
  });
});



module.exports = router;

