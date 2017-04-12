var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Orders page. */
router.get('/Orders', function(req, res, next) {
  res.render('Orders', { title: 'Orders' });
});

/* GET Order Details page. */
router.get('/OrderDetails', function(req, res, next) {
  res.render('OrderDetails', { title: 'Order Details' });
});


module.exports = router;
