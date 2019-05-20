var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

router.post('/', ticketsCtrl.create )

// router.get('/', function(req, res, next) {
//     flight = req.body.params
//     res.send(`<h1>${flight}</h1>`)
// });

// router.get('/:id', ticketsCtrl.show);
module.exports = router;