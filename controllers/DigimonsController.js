function DigimonsController(Model) {
	this.Model = Model;
}

DigimonsController.prototype.create = function(req, res){
	console.log(req.body);
	console.log("49:05");
};

module.exports = function(Model) {
	return new DigimonsController(Model);
}
