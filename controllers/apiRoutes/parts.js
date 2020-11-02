const router = require('express').Router();
var db = require('../../models/Part.js');

router.get('/', (req, res) => {
	db
		.find({})
		.sort({ created_at: -1 })
		.then((parts) => {
			res.json(parts);
		})
		.catch((err) => res.status(400).json(err));
});

router.post('/', ({ body }, res) => {
	db
		.create(body)
		.then((part) => {
			res.json(part);
		})
		.catch((err) => res.status(400).json(err));
});

module.exports = router;
