var mongo = require('../db/mongo');

function DigimonsModel() {

}

DigimonsModel.prototype.create = function(data, callback) {
	mongo.collection('digimons').save(data, callback);
};

module.exports = new DigimonsModel();