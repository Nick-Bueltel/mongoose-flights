var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
  };

function newTicket(req, res) {
    res.render('flights/index', { title: 'Add Ticket' });
    console.log(req.body);
};

  function create(req, res) {
      var ticket = new Ticket(req.body);
      ticket.save(function(err){
        if (err) return res.redirect('flights');
        console.log(ticket); 
        res.redirect('/flights');
      })

  }
  

