var express = require('express');
var router = express.Router();
//@apollo server/ resolvers/schema


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Request' });
});


module.exports = router;
