var express = require('express');
var router = express.Router();
//@apollo server/ resolvers/schema


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Request' });
});

router.get('/render', function(req, res, next) {
  res.render('render', { title: 'Render' });
});

module.exports = router;
