'use strict';
const express = require('express');
const router = express.Router();

/* GET About page. */
router.get('/', function(req, res, next) {
  res.render('about', { 
    title: 'About' 
  });
});

module.exports = router;