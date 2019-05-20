var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Flight = require('../models/flight' );


var ticketSchema = new Schema({
    seat: {type: String, },
    price: {type: Number, min: 0},
    flight: {
        type: Schema.Types.ObjectId, ref: Flight
        },
  })

module.exports = mongoose.model('Ticket', ticketSchema);
