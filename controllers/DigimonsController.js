var DigimonsModel = require('../models/DigimonsModel');

function DigimonsController(Model) {
	this.Model = Model;
}

DigimonsController.prototype.create = function(req, res){
	this.Model.create(req.body, function(err, res) {
		console.log(err, res);
	});
};

module.exports = new DigimonsController(DigimonsModel);