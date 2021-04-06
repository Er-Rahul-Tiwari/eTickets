const express = require('express');
const ticketController = require('../controllers/tickets/ticketController');
const { check, validationResult } = require('express-validator');
const authController = require('../controllers/user/authController');

const router = express.Router();

router
	.route('/:id')
	.get(
		authController.protect,
		ticketController.getTicket)
	.patch(
		authController.protect,
		ticketController.updateTicket
	)
	.delete(
		authController.protect,
		ticketController.deleteTicket
	)

router
	.route('/')
	.post(
		authController.protect,
		[
			check('event', 'Please enter the ticket event.').not().isEmpty(),
			check('ticketName', 'Please enter the ticket name.').not().isEmpty(),
			check('price', 'Please enter a valid ticket price.').isNumeric(),
			check('currency', 'Please enter the ticket currency.').not().isEmpty(),
			check('ticketType', 'Please enter the ticket type between "paid", "free" and "donation"').not().isEmpty()
		],
		ticketController.createTicket
	)
	.get(
		authController.protect,
		ticketController.getAllTickets
	);


router
	.route('/event/:eventId')
	.get(authController.protect, 
		ticketController.viewTicketForOneEvent)

module.exports = router;