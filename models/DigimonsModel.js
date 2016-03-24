var mongo = require('../db/mongo');

function DigimonsModel() {

}

DigimonsModel.prototype.findAll = function(callback) {
	mongo.collection('digimons').find({}, callback);
};

DigimonsModel.prototype.findOne = function(_id, callback) {
	mongo.collection('digimons').find({
		_id: _id
	}, callback);
};

DigimonsModel.prototype.create = function(data, callback) {
	mongo.collection('digimons').save(data, callback);
};

DigimonsModel.prototype.update = function(data, _id, callback) {
	mongo.collection('digimons').update(data, callback);
};

DigimonsModel.prototype.delete = function(_id, callback) {
	mongo.collection('digimons').remove({
		_id: _id
	}, callback);
};

module.exports = new DigimonsModel();