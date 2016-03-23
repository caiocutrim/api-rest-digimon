var express = require('express');
var routes = require('./routes');
var app = express();

app.use('/', routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});