var DigimonsModel = require('../models/DigimonsModel');

function DigimonsController(Model) {
	this.Model = Model;
}

DigimonsController.prototype.findAll = function(req, res) {
	var data = req.body;
	this.Model.findAll(function(err, result) {
		res.json(result);
	});
};

DigimonsController.prototype.findOne = function(req, res) {
	var _id = req.params._id;
	this.Mode.findOne(_id, function(err, result) {
		console.log(err, result);
		res.json(result);
	});
};

DigimonsController.prototype.create = function(req, res) {
	this.Model.create(req.body, function(err, res) {
		console.log(err, res);
	});
};

DigimonsController.prototype.update = function(req, res) {
	var data = req.body,
		_id = req.params.id;
};

DigimonsController.prototype.delete = function(req, res) {
	var _id = req.params.id;
};

module.exports = new DigimonsController(DigimonsModel);