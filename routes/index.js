const express = require('express');
const router = express.Router();
const keys = require('../config');




// Get Home Page
// router.get('/', function(req, res, next) {
// 	res.render('home');
// });

// // Test Route to Create a DB
// router.post('/makeDB', (req, res) => {
// 	const { databaseName } = req.body;
// 	nano.db.create(databaseName);
// 	res.send(`Your DB: '${databaseName}' has been created.`);
// });

// // Test Route to Delete a DB
// router.post('/deleteDB', (req, res) => {
// 	const { databaseName } = req.body;
// 	nano.db.destroy(databaseName);
// 	res.send(`Your DB: '${databaseName}' has been deleted`);
// });

// router.get('/listDBs', (req, res) => {
// 	const databases = [];
// 	nano.db.list(function(err, body) {
// 		console.log(body);
// 		body.forEach( db => {
// 			if (db.charAt(0) !== '_') {
// 				databases.push(db);
// 			}
// 		});
// 		console.log(databases);
// 		res.json(databases);
// 	  });
// });

module.exports = router;
