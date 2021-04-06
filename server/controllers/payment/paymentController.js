const catchAsync = require('../../utils/catchAsync');
const crypto = require('crypto');
const qr = require('qr-image');
const fs = require('fs');
const request = require('request');
const response = require('../../utils/response');
const { check, validationResult } = require('express-validator');
const useragent = require('express-useragent');
// const { format, compareAsc } = require('date-fns');
const Email = require('../../utils/email');
const randomstring = require('randomstring');
const Ticket = require('../../models/ticketModel');
const User = require('../../models/userModel');
const Event = require('../../models/eventModel');
const Booking = require('../../models/bookingModel');
const Razorpay = require('razorpay');

// //prod
// const razorpay = new Razorpay({
// 	key_id: process.env.RAZORPAY_PROD_ID,
// 	key_secret: process.env.RAZORPAY_PROD_SECRET
// })

// dev
const razorpay = new Razorpay({
	key_id: process.env.RAZORPAY_DEV_ID,
	key_secret: process.env.RAZORPAY_DEV_SECRET
})

exports.webhookVerify = catchAsync(async (req, res, next) => {

	// do a validation
	const secret = 'd&yit_mapSoR_tViraL';
	const data = JSON.parse(JSON.stringify(req.body.payload.payment.entity));
	const check = await Booking.findOne({paymentId: data.id, status: data.status});
	if (check){
		return response.errorResponse(res, {}, 'Captured payment', 400, false);
	}
	const shasum = crypto.createHmac('sha256', secret);
	shasum.update(JSON.stringify(req.body));
	const digest = shasum.digest('hex');

	console.log(digest, req.headers['x-razorpay-signature']);

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit');
		const confirmBooking = await Booking.updateOne(
			{orderId: data.order_id}, {
				paymentId: data.id,
				createdOrCompletedAt: Date.now(),
				status: "captured",
				paymentMethod: data.method,
				vpa: data.vpa || null,
				card: data.card || null,
				currencyPaid: data.currency
			}
		);
		const booking = await Booking.findOne({orderId: data.order_id});
		const event = await Event.findById(booking.event);
		const user = await User.findById(booking.user);

		const path = `public/qr_code/${booking.bookingId}.png`;
		const qr_svg = qr.image(booking.bookingId);
		qr_svg.pipe(fs.createWriteStream(path));
		const svg_string = qr.imageSync(booking.bookingId, { type: 'png' });

		const sendData = {
			bookingId: booking.bookingId,
			eventName: event.name,
			qrCode: path,
			ticketName: (booking.ticketName).toUpperCase(),
			paid: data.currency + ' ' + (data.amount)/100,
			quantity: booking.quantity
		}

		await new Email(user, '').bookingConfirmed(sendData);
		return response.successResponse(res, {}, 'Done', 200, true);

	} else {
		return response.errorResponse(res, {}, 'Bad request', 500, false);
	}
})


exports.callbackPayment = catchAsync(async (req, res, next) => {

	var source = req.headers['user-agent'],
    ua = useragent.parse(source);
    // console.log(ua);

	const paymentId = req.body.razorpay_payment_id;

	try {
		request.get(
			`https://${process.env.RAZORPAY_DEV_ID}:${process.env.RAZORPAY_DEV_SECRET}@api.razorpay.com/v1/payments/${paymentId}`, 
		async (err,httpResponse,data) => {
			if (err){
				console.log(err)
				return response.errorResponse(res, err, `There's a problem creating the order`, 200, false);
			}
			data = JSON.parse(data);
			const check = await Booking.findOne({paymentId: data.id, status: data.status});
			if (check){
				return response.errorResponse(res, {}, 'Captured payment', 400, false);
			}
			const confirmBooking = await Booking.updateOne(
				{orderId: data.order_id}, {
					paymentId: data.id,
					createdOrCompletedAt: Date.now(),
					status: "captured",
					paymentMethod: data.method,
					vpa: data.vpa || null,
					card: data.card || null,
					currencyPaid: data.currency
				}
			);
			const booking = await Booking.findOne({orderId: data.order_id});
			const ticket = await Ticket.findById(booking.ticket);
			const event = await Event.findById(booking.event);
			const user = await User.findById(booking.user);
			await Ticket.updateOne({_id: booking.ticket},
				{$set: {quantity: ticket.quantity - booking.quantity, sold: ticket.sold + booking.quantity}});

			const path = `public/qr_code/${booking.bookingId}.png`;
			const qr_svg = qr.image(booking.bookingId);
			qr_svg.pipe(fs.createWriteStream(path));
			const svg_string = qr.imageSync(booking.bookingId, { type: 'png' });

			// console.log(ticket);

			const sendData = {
				bookingId: booking.bookingId,
				eventName: event.name,
				startTime: new Date((`${ticket.dateTimeStart}`)).toLocaleString() || null,
				endTime: new Date((`${ticket.dateTimeEnd}`)).toLocaleString() || null,
				ticketName: (booking.ticketName).toUpperCase(),
				paid: data.currency + ' ' + (data.amount)/100,
				address: event.venueAddress || null,
				quantity: booking.quantity,
				operatingSystem: ua.os,
				paidMethod: data.method,
				browser: ua.browser,
				geoIp: ua.geoIp,
				curDT: new Date().toString()
			}
			await new Email(user, '').bookingConfirmed(sendData);
			return response.successResponse(res, req.body, 'Done', 200, true);
		})
	} catch (error) {
		console.log(error);
		return response.errorResponse(res, error, `There's a problem creating the order`, 200, false);
	}
});

exports.refundInit = catchAsync(async (req, res, next) => {
	const bookingId = req.body.bookingId;
	const booking = await Booking.findOne({bookingId: bookingId, status: "captured"});
	if (!booking){
		return response.errorResponse(res, {}, 'Booking not found', 200, false);
	}

	const paymentId = booking.paymentId;
	const amount = (booking.price) * (100/100);
	const data = {amount: amount};

	try {
		request.post(`https://${process.env.RAZORPAY_DEV_ID}:${process.env.RAZORPAY_DEV_SECRET}@api.razorpay.com/v1/payments/${paymentId}/refund`,
		{json: data},
		(err,httpResponse,body) => {
			return response.successResponse(res, body, 'Done', 200, true);	
		})

	} catch (error){
		return response.errorResponse(res, error, 'Error occured', 200, false);
	}
})

exports.createOrder = catchAsync(async (req, res, next) => {
	const errors = validationResult(req);

    if (!errors.isEmpty()){
        return response.errorResponse(res, errors.array(), errors.msg, 200, false);
	}
	// console.log(req.body);
	
	// console.log(req.ipInfo);
	const ticket = await Ticket.findById(req.body.ticket);
	// console.log(ticket);
	if (!ticket){
		return response.errorResponse(res, error, `The ticket ID does not exist`, 200, false);
	}
	const event = await Event.findById(ticket.event);

	const payment_capture = 1;
	const amount = ticket.price;
	const currency = req.body.currency || ticket.currency;
	const bookingId = randomstring.generate(12).toUpperCase();
	const quantity = req.body.quantity || 1;

	const options = {
		amount: amount * 100 * quantity,
		currency: currency.toUpperCase(),
		receipt: bookingId,
		payment_capture
	}
	try {
		const resp = await razorpay.orders.create(options);
		console.log(resp);
		const data = {
			id: resp.id,
			event: event.name,
			currency: resp.currency,
			amount: resp.amount
		}
		const booking = await Booking.create({
			event: event._id,
			ticket: ticket._id,
			user: req.user._id,
			ticketName: ticket.ticketName,
			bookingId: bookingId,
			orderId: data.id,
			price: data.amount,
			quantity: quantity,
			status: resp.status
		});
		return response.successResponse(res, data, `Order created`, 200, true);

	} catch (error) {
		console.log(error);
		return response.errorResponse(res, error, `There's a problem creating the order`, 200, false);
	}
})


exports.redirectCheckoutLocal = catchAsync(async (req, res, next) => {
	console.log(req.body);
	const ticket = await Ticket.findById(req.body.ticket);
	if (!ticket){
		return response.errorResponse(res, error, `The ticket ID does not exist`, 200, false);
	}
	const event = await Event.findById(ticket.event);

	const payment_capture = 1;
	const amount = ticket.price;
	const currency = (ticket.currency).toUpperCase();
	const bookingId = ((ticket.name).substring(0, 3) + randomstring.generate(9)).toUpperCase();
	const quantity = req.body.quantity || 1;

	const options = {
		amount: req.body.amount * 100 || amount * 100 * quantity,
		currency,
		receipt: bookingId,
		payment_capture
	}

	const customer = {
		name: req.user.name,
		email: req.user.email,
		contact: req.user.phoneNumber || '9876543210'
	}
	const data = {
		customer: customer,
		type: 'link',
		view_less: 1,
		amount: options.amount,
		currency: currency,
		description: event.name,
		receipt: bookingId,
		expire_by: Math.round(new Date().getTime() / 1000) + 1200,
		callback_url: 'http://localhost:5000/dANDyITLlpJAI/callbackPayment',
		callback_method: 'get'
	}
	try {
		request.post(`https://${process.env.RAZORPAY_DEV_ID}:${process.env.RAZORPAY_DEV_SECRET}@api.razorpay.com/v1/invoices/`,
		{json: data}, 
		(err,httpResponse,body) => {
			if (err){
				console.log(err)
				return response.errorResponse(res, err, `There's a problem creating the order`, 200, false);
			}	
			console.log(body);
			return res.json({url:body.short_url});
		})
		// const booking = await Booking.create({
		// 	event: event._id,
		// 	ticket: ticket._id,
		// 	user: req.user._id,
		// 	bookingId: bookingId,
		// 	orderId: data.id,
		// 	price: data.amount,
		// 	quantity: quantity,
		// 	status: resp.status
		// });
		// return response.successResponse(res, JSON.parse(JSON.stringify(result)), `Link send`, 200, true);

	} catch (error) {
		console.log(error);
		return response.errorResponse(res, error, `There's a problem creating the order`, 200, false);
	}
})




exports.redirectCheckoutGlobal = catchAsync(async (req, res, next) => {
	console.log(req.body);
	if (!(req.body.price && req.body.currency && req.body.callbackUrl)) {
		return response.errorResponse(res, error, `Key error. There's a problem creating the order`, 400, false);
	}

	const payment_capture = 1;
	const amount = req.body.price;
	const currency = (req.body.currency).toUpperCase();
	const bookingId = randomstring.generate(8).toUpperCase();
	// const quantity = req.body.quantity || 1;

	const options = {
		amount: req.body.price * 100,
		callbackUrl: req.body.callbackUrl,
		currency,
		receipt: bookingId,
		payment_capture
	}
	const customer = {};
	if (req.body.email && req.body.phone){
		customer = {
			email: req.body.email,
			contact: req.body.phone
		}
	}

	const data = {
		customer: customer,
		type: 'link',
		view_less: 1,
		amount: options.amount,
		currency: currency,
		description: 'GLOBAL TICKET HANDLER BY D and Y IT',
		receipt: bookingId,
		expire_by: Math.round(new Date().getTime() / 1000) + 1200,
		callback_url: options.callbackUrl,
		callback_method: 'get'
	}
	try {
		request.post(`https://${process.env.RAZORPAY_DEV_ID}:${process.env.RAZORPAY_DEV_SECRET}@api.razorpay.com/v1/invoices/`,
		{json: data}, 
		(err,httpResponse,body) => {
			if (err){
				console.log(err)
				return response.errorResponse(res, err, `There's a problem creating the order`, 400, false);
			}	
			console.log(body);
			return res.json({url:body.short_url});
		})
		// const booking = await Booking.create({
		// 	event: event._id,
		// 	ticket: ticket._id,
		// 	user: req.user._id,
		// 	bookingId: bookingId,
		// 	orderId: data.id,
		// 	price: data.amount,
		// 	quantity: quantity,
		// 	status: resp.status
		// });
		// return response.successResponse(res, JSON.parse(JSON.stringify(result)), `Link send`, 200, true);

	} catch (error) {
		console.log(error);
		return response.errorResponse(res, error, `There's a problem creating the order`, 400, false);
	}
})