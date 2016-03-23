var express = require('express');
var app = express();

app.get('/digimons', function (req, res) {
	res.json([
  	{ "name": "Agumon (アグモン)" },
  	{ "level": "Rookie" },
  	{ "type": "Reptile" },
  	{ "attribute": "Vaccine" },
	]);
});

app.get('/digimons/:_id', function (req, res) {
  res.json([
  	{ "name": "Rodrigo Oler" }
	]);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});