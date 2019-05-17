var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var flightSchema = new Schema({
  airline: {
    type: String },
  flightNo: {type: Number, min: 10, max:9999},
  departs: Date, 
  airport: {type: String, },
  destination: {type: String, },



  
  
});

module.exports = mongoose.model('Flight', flightSchema);