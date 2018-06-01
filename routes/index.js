const express = require('express');
const router = express.Router();
const keys = require('../config');


const nano = require('nano')('http://root:jabberwocky@localhost:5984');

// Get Home Page
router.get('/', function(req, res, next) {
	res.render('home');
});

// Test Route to Create a DB
router.post('/makeDB', (req, res) => {
	const { databaseName } = req.body;
	nano.db.create(databaseName);
	res.send(`Your DB: '${databaseName}' has been created.`);
});

// Test Route to Delete a DB
router.post('/deleteDB', (req, res) => {
	const { databaseName } = req.body;
	nano.db.destroy(databaseName);
	res.send(`Your DB: '${databaseName}' has been deleted`);
});

router.get('/listDBs', (req, res) => {
	nano.db.list(function(err, body) {
		body.forEach(function(db) {
		  console.log(db);
		});
		console.log(typeof body);
		res.json(JSON.stringify(body, null, 2));
	  });
});

module.exports = router;
