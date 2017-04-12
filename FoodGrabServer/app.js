var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();


//Mongo db connection params
var mongoose = require('mongoose');

// Mongo db Connection URL
var url = 'mongodb://localhost:27017/FoodGrab_test'; // / project name or DB Name
mongoose.connect(url); // establish connection

var Schema = mongoose.Schema;
//Schema
var orderSchema = new Schema({
   order :[ {'itemId': String,'name': String,'itemQuantity':String,img:String,cost : String }]
});

var orders = mongoose.model('orders',orderSchema);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);


app.post('/', function(request, response){
    console.log(request.body);      // your JSON
    response.send(request.body);    // echo the result back
});

app.post('/PlaceOrder', function(request, response){
    console.log(request.body);      // your JSON
    response.send(request.body);    // echo the result back
   // alert(request.body)
  var newOrder = new orders(request.body);
  newOrder.save(function (err) {
    if (err) return handleError(err);
    // saved!
  });



});





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
