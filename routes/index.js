var express = require('express');
var router = express.Router();
var DigimonsController = new require('../controllers/DigimonsController');

router.get('/digimons', 		DigimonsController.findAll.bind(DigimonsController));
router.get('/digimons/:_id', 	DigimonsController.findOne.bind(DigimonsController));
router.post('/digimons', 		DigimonsController.create.bind(DigimonsController));
router.put('/digimons/:_id', 	DigimonsController.update.bind(DigimonsController));
router.delete('/digimons/:_id', DigimonsController.delete.bind(DigimonsController));

module.exports = router;