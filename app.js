var express = require('express');
var routes = require('./routes');
var bodyParser = require('bodyParser');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/', routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});