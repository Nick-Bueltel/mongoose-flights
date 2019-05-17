var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var flightSchema = new Schema({
  airline: {
    type: String,
    required: true
  },
  
  
});

module.exports = mongoose.model('Flight', flightSchema);