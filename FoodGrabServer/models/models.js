/**
 * Created by ajayv on 5/11/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemsSchema = new Schema({
  itemId : String,
   name :String,
    itemQuantity : String,
     specialInstructions : String,
      cost : String

});

var OrderSchema = new Schema({
       ordersItems : [itemsSchema],
        customerName : String,
         customerPhone : String,
          customerAddress : String,
           customerEmail : String,
           refNumber : String,
            status : String,
             date : Date

});

var OrderModel = mongoose.model('Order',OrderSchema);
var models = {
   Order : OrderModel
};
module.exports = models;
