angular.module('starter.services', [])

.factory('Menu', function() {
  // Might use a resource here that returns a JSON array
  var cusine = [{
    id: 0,
    name: 'south indian',
    details: 'Try the rice and curry',
    img: 'img/sampleIdlii.png'
  }, {
    id: 1,
    name: 'North Indian',
    details: 'Get a taste of bread and spicy curries',
    img: 'img/sampleIdlii.png'
  }, {
    id: 2,
    name: 'Indo Chinese',
    details: '',
    img: 'img/sampleIdlii.png'
  }, {
    id: 3,
    name: 'Pizza',
    details: 'Look at my mukluks!',
    img: 'img/sampleIdlii.png'
  }, {
    id: 4,
    name: 'Specialities',
    details: 'This is wicked good ice cream.',
    img: 'img/sampleIdlii.png'
  }];

var menuItems = [{id: 0,items:
  [
    {id: 0,item_Id: 'm',name: 'Molaga bajji',details: 'spice warning',img: 'img/sampleIdlii.png',cost:'5.00'},
    {id: 0,item_Id: 'v', name: 'Vadai',details: 'deep fried donught shapped spicy dish',img: 'img/sampleIdlii.png',cost:'4.00'},
    {id: 0,item_Id: 's',name: 'Masala poori',details: 'mouth watering evening snacks',img: 'img/sampleIdlii.png',cost:'7.80'}

  ]

  },
{id: 1,items:
  [
    {id: 1,item_Id: 'n',name: 'Paneer Butter Masala',details: 'spice warning',img: 'img/sampleIdlii.png',cost:'5.00'},
    {id: 1,item_Id: 'a', name: 'Paratha',details: 'deep fried donught shapped spicy dish',img: 'img/sampleIdlii.png',cost:'5.00'},
    {id: 1,item_Id: 'p',name: 'Pav bhaji',details: 'mouth watering evening snacks',img: 'img/sampleIdlii.png',cost:'5.00'}

  ]

  }

  ];

  return {

    all: function() {
      return cusine;
    },
    remove: function(itemId) {
      cusine.splice(chats.indexOf(itemId), 1);
    },
    get: function(chatId) {

      for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].id === parseInt(chatId)) {
          return menuItems[i].items;
        }
      }
    return null;
    },

    getSpecific: function(itemId) {

      for (var i = 0; i < menuItems.length; i++) {

         for (j=0;j<menuItems[i].items.length;j++){

               if (menuItems[i].items[j].item_Id ==itemId) {
                      return menuItems[i].items[j];
                }

         }




      }
    return null;
    }



  };
})

.factory('Local',function(Price){ //Price to update subtotal

  // local storage array
  var cartArray = [];

    return {

       get: function(){
          return JSON.parse(localStorage.getItem('cart'));
       },

       set: function(order){

          if(localStorage.getItem('cart')!==null){
             cartArray.splice(0,cartArray.length);
             cartArray = JSON.parse(localStorage.getItem('cart'));


              for (var its = 0; its < cartArray.length; its++) {

                  if (cartArray[its].itemId === order.itemId) {
                    //  alert( order.itemId+'repeat item');
                      cartArray[its].itemQuantity = parseInt(cartArray[its].itemQuantity) + parseInt(order.itemQuantity);
                       cartArray[its].cost = parseInt(cartArray[its].cost) + parseInt(order.cost);
                   // cartArray.splice(cartArray.indexOf(order.itemId),1);
                      localStorage.setItem('cart',JSON.stringify(cartArray));
                      return true;
                  }


              }

              cartArray.push(order);  //update the cart array with new entry
              localStorage.setItem('cart',JSON.stringify(cartArray));

         }

          else {
           cartArray.push(order);
           localStorage.setItem('cart',JSON.stringify(cartArray));
         }
         return false;

       },

       remove: function(itemId){
          cartArray =  JSON.parse(localStorage.getItem('cart'));
          for (var cr = 0; cr < cartArray.length; cr++) {
            if (cartArray[cr].itemId === itemId) {
               //alert(cr+'cr');
               //get cost and update subtotal, then remove item
              // alert(-Math.abs(cartArray[cr].cost));

           Price.set('-'+ cartArray[cr].cost);
            cartArray.splice(cr,1);
            }
          }
          localStorage.setItem('cart',JSON.stringify(cartArray));
        },

       clear: function(){
           localStorage.removeItem('cart');
           localStorage.removeItem('Total');
           localStorage.removeItem('subTotal');
        }

      };

})

.factory('Price',function(){

  var subTotal = 0;
  var tax = 10; // percentage of all taxes
  var total = 0;
 return{

    set: function(cost){

      if(localStorage.getItem('subTotal')!==null){
           subTotal = parseFloat(localStorage.getItem('subTotal'));
           total = parseFloat(localStorage.getItem('Total'));
      }
      else{
           subTotal = 0; total = 0;
      }
        subTotal = parseFloat(cost) + parseFloat(subTotal);
        localStorage.setItem('subTotal',subTotal);

        total = parseFloat(subTotal) + (parseFloat(tax)*0.01)*parseFloat(subTotal);
         localStorage.setItem('Total',total);

        //Total amount after tax




      },

    getSubTotal : function(){

         return localStorage.getItem('subTotal');
    },

    getTotal : function(){
         return localStorage.getItem('Total');
    }



 }



})

.factory('Customer',function(){


  return{

        set : function(name,phone,email,address){


        },

        get : function(){


        }




  }





});
