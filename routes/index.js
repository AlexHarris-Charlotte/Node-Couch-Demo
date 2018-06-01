const express = require('express');
const router = express.Router();
const keys = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

// in this route get db name from the user and create the DB
router.post('/makeDB', (req, res) => {

})

module.exports = router;
