var express = require('express');
var app = express();

app.get('/digimons', function(req, res) {
	res.json([{
		"name": "Agumon (アグモン)"
	}, {
		"level": "Rookie"
	}, {
		"type": "Reptile"
	}, {
		"attribute": "Vaccine"
	}, ]);
});

app.get('/digimons/:_id', function(req, res) {
	var _id = parseInt(req.params._id, 10);
	res.json([{
		"name": "Rodrigo Oler"
	}]);	
});

app.post('/digimons/', function(req, res) {
	r
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});