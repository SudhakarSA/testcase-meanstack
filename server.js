var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

var api = require('./server/api');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('/*',  function(req, res, next) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

var hostPort = Number(8888);

app.listen(hostPort, function () {
  console.log("app listening at ", +hostPort)
})

module.exports = app;
