/**
 * Created by ajayv on 5/11/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({

   itemId : String,
    name :String,
     itemQuantity : String,
      specialInstructions : String,
       cost : String,
        customerName : String,
         customerPhone : String,
          customerAddress : String,
           refNumber : String

});

var OrderModel = mongoose.model('Order',OrderSchema);
var models = {
   Order : OrderModel
};
module.exports = models;
