const express = require('express');
const authController = require('../controllers/user/authController');
// const { check, validationResult } = require('express-validator');
const leadController = require('../controllers/leadController');

const router = express.Router();

router.use(authController.protect);

router
	.route('/:id')
	.get(
		authController.protect,
		leadController.getLead)
	.patch(
		authController.protect,
		leadController.updateTicket
	)
	.delete(
		authController.protect,
		leadController.deleteTicket
	)

router
	.route('/')
	.post(
		authController.protect,
		leadController.createLead
	)
	.get(
		authController.protect,
		leadController.getAllLeads
	);

module.exports = router;