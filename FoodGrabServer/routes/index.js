var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Orders page. */
router.get('/CurrentOrders', function(req, res, next) {
  res.render('CurrentOrders', { title: 'Orders' });
});

/* GET Orders page. */
router.get('/OrdersInProgress', function(req, res, next) {
  res.render('OrdersInProgress', { title: 'Orders' });
});

router.get('/OrdersHistory', function(req, res, next) {
  res.render('OrdersHistory', { title: 'Orders History' });
});



/* GET Order Details page. */
router.get('/OrderDetails', function(req, res, next) {
  res.render('OrderDetails', { title: 'Order Details' });
});

/* GET Specific Order Details page. */
router.get('/OrderDetails/:refNumber', function(req, res, next) {
  res.render('OrderDetails', {});
});

module.exports = router;
