var express = require('express');
var router = express.Router();
var DigimonsController = new require('../controllers/DigimonsController');

router.get('/digimons', function(req, res) {
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

router.get('/digimons/:_id', function(req, res) {
	var _id = parseInt(req.params._id, 10);
	res.json([{
		"name": "Rodrigo Oler"
	}]);
});

router.post('/digimons', DigimonsController.create.bind(DigimonsController));

router.put('/digimons/:_id', function(req, res) {
	var _id = parseInt(req.params, 10);
	res.json({
		"status": "Updated"
	});
});

router.delete('/digimons/:_id', function(req, res) {
	var _id = parseInt(req.params, 10);
	res.json({
		"status": "Deleted"
	});
});

module.exports = router;