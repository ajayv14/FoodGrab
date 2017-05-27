angular.module('starter.services', [])

.factory('Menu', function() {

  // Might use a resource here that returns a JSON array
  var cusine = [{
    id: 0,
    name: '  Appetizers - Veg',
    details: 'Try the rice and curry',
    img: 'img/fish2.jpg'
  }, {
    id: 1,
    name: 'ENTREE - VEG',
    details: 'Get a taste of South Indian curries',
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
    {id: 0,item_Id: 'a1',name: 'IDLY',details: 'Steamed Spongy Rice & Lentil Cake',img: 'img/sampleIdlii.png',cost:'4.99'},
    {id: 0,item_Id: 'a2', name: 'MEDHU VADA',details: 'Fried Lentil Donut',img: 'img/sampleIdlii.png',cost:'4.99'},
    {id: 0,item_Id: 'a3',name: 'RASA VADA',details: 'Vada Soaked In Rasam',img: 'img/sampleIdlii.png',cost:'5.49'},
    {id: 0,item_Id: 'a4',name: 'SAMBAR VADA',details: 'Vada Soaked In Sambar',img: 'img/sampleIdlii.png',cost:'5.49'},
    {id: 0,item_Id: 'a5',name: 'DAKSHIN COMBO',details: 'Combination Of Vada & Iddly',img: 'img/sampleIdlii.png',cost:'4.99'},
    {id: 0,item_Id: 'a6',name: 'DAHI VADA',details: 'Vada Soaked In Flavoured Youghurt Sauce',img: 'img/sampleIdlii.png',cost:'5.49'},
    {id: 0,item_Id: 'a7',name: 'PANNER PAKORA',details: 'Cubes Of Cottage Cheese Fried In Batter',img: 'img/sampleIdlii.png',cost:' 6.99'},
    {id: 0,item_Id: 'a8',name: 'ALOO BONDA',details: 'Spiced Potato Dipped In Gram Flour Batter & Deep Fried',img: 'img/sampleIdlii.png',cost:' 4.99'},
    {id: 0,item_Id: 'a9',name: 'VEG SAMOSA',details: 'Flaky Golden Pastry Stuffed With Delicatly Spiced Vegetables',img: 'img/sampleIdlii.png',cost:' 4.99'},
    {id: 0,item_Id: 'a10',name: 'DAKSHIN CUT MIRCHI',details: 'Crispy Frried Banana Pepper',img: 'img/sampleIdlii.png',cost:' 4.99'},
    {id: 0,item_Id: 'a11',name: 'SPINACH PAKORA',details: 'Crisp, Spinach Leaves, Golden Fried In Light Batter',img: 'img/sampleIdlii.png',cost:'4.99'},
    {id: 0,item_Id: 'a12',name: 'VEG CUTLET',details: 'Deep Fried Breaded Veg Patties',img: 'img/sampleIdlii.png',cost:'4.99'},
    {id: 0,item_Id: 'a13',name: 'DAKSHIN SPL ASSORTMENT',details: 'One Vada, Bonda, Chilli Bajji,Spinach Pakora',img: 'img/sampleIdlii.png',cost:'7.99'}

  ]

  },
{id: 1,items:
  [
    {id: 1,item_Id: 'b1',name: 'AVIAL',details: 'Stewed Garden Fresh Vegetables Cooked With Coconut &Youghurt Sauce',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b2', name: 'VATHAL KOZHAMBU',details: 'Typical Tamilian Curry Made With Dried Vegetables In Hot Sour Sauce',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b3',name: 'GUTHI VANKAYA',details: 'Tender Eggplants Deep Fried & Cooked With Delicious Sauce, Favourite Of Andhra',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b4',name: 'CAULIFLOWER MILAGU PERATTU',details: 'Cauliflower Sauted With Pepper & Spices',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b5',name: 'MIRCHI KA SALAN',details: 'A Famous Hyderabadi Dish, Fried Green Chillies Cooked In Seasame Seed Tamarind Sauce',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b6',name: 'VEGETABLE KHORMA',details: 'Garden Fresh Vegetables Cooked With Dakshin Special Sauce',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b7',name: 'MALAI KOFTA',details: 'Spongy Cottage Cheese Rolled Into Balls Cooked In Mild Gravy',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b8',name: 'CHANNA MASALA',details: 'Chick Peas Cooked In Exotic Blend Of North Indian Spices',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b9',name: 'ALOO SAAG',details: 'Potatoes Cooked With Spinach & Spices',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b10',name: 'BHINDI MASALA',details: 'Fresh Crip Okra Tossed With Onion, Tomato & Spices',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b11',name: 'PALAK PANEER',details: 'Cottage Cheee Cooked In Spinach Sauce',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b12',name: 'ALOO GOBI MASALA',details: 'Spice Cauliflower & Potato Cooked In Perfection Along With Ginger, Tomatoes',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b13',name: 'MUTTER PANEER MASALA',details: 'Green Peas & Cheese Cubes In Sauce',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b14',name: 'DAL BHUKARA',details: 'Black Lentil Cooked Over Night In A Slow Fire Seasoned With Herbs',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b15',name: 'MUSHROOM CHETTINAD',details: 'Fresh Mushroom Cooked In Chettinad Special Gravy',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b16',name: 'ALOO PALAK',details: 'Potato Cooked With Spinach And Spieces',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b17',name: 'CHANNA PALAK',details: 'Chick Peas Cooked With Spinach And Spices',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b18',name: 'PALAK MUSHOOM',details: 'Mushroom Cooked With Spinach And Spices',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b19',name: 'PANEER JALFREZE',details: 'Cottage Cheese Cooked With Onion Green Pepper And Spicy',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b20',name: 'KADAI PANEER',details: 'Cubes Of Paneer Sauted With Bell Pepper, Onion Indian Style Hot Masala',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b21',name: 'NAVARATHAN KHORMA',details: 'Fresh Veg Cooked With Nuts Mild Spices And Cream',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b22',name: 'BRINJAL CHOPS',details: 'Indian Eggplant Simmered In Gravy Of Dry Coconut, Chillies And Tomatos',img: 'img/sampleIdlii.png',cost:'10.99'},
    {id: 1,item_Id: 'b23',name: 'DUM ALOO',details: 'Potato"S Cooked With Creamy Tomato Sauce',img: 'img/sampleIdlii.png',cost:'9.99'},
    {id: 1,item_Id: 'b24',name: 'PANEER BHURJEE',details: 'Fresh Homemade Chesse Grated And Cooked With Green Peppers, Onoin And Tomatoes',img: 'img/sampleIdlii.png',cost:'11.99'}

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
          if(localStorage.getItem('cart')) return JSON.parse(localStorage.getItem('cart'));
          else return '';
        },

       set: function(order){

          if(localStorage.getItem('cart')!==null){
             cartArray.splice(0,cartArray.length);
             cartArray = JSON.parse(localStorage.getItem('cart'));


              for (var its = 0; its < cartArray.length; its++) {

                  if (cartArray[its].itemId === order.itemId) {
                    //  alert( order.itemId+'repeat item');
                      cartArray[its].itemQuantity = parseInt(cartArray[its].itemQuantity) + parseInt(order.itemQuantity);
                       cartArray[its].cost = parseFloat(cartArray[its].cost) + parseFloat(order.cost);
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
                 //alert(cartArray[cr].itemId + 'same as ' + itemId);
               //get cost and update subtotal, then remove item
              // alert(-Math.abs(cartArray[cr].cost));

    //       Price.set('-'+ cartArray[cr].cost);

    var subTotal = 0;
    var tax = 0; // percentage of all taxes
    var total = 0;

           if(localStorage.getItem('subTotal')!==null){
                subTotal = parseFloat(localStorage.getItem('subTotal'));
                total = parseFloat(localStorage.getItem('Total'));
           }
           else{
                subTotal = 0; total = 0;
           }
             subTotal = parseFloat('-'+ cartArray[cr].cost) + parseFloat(subTotal);
             localStorage.setItem('subTotal',subTotal);

          //   total = parseFloat(subTotal) + (parseFloat(tax)*0.01)*parseFloat(subTotal);
           total = parseFloat(subTotal) + parseFloat(subTotal);
              localStorage.setItem('Total',total);








            cartArray.splice(cr,1);
            }
          }
          localStorage.setItem('cart',JSON.stringify(cartArray));
        },

       clear: function(){
           localStorage.removeItem('cart');
          localStorage.removeItem('Total');
           localStorage.removeItem('subTotal');
          // localStorage.setItem('cart',[]);
          // localStorage.setItem('Total','0');
        //   localStorage.setItem('subTotal','0');



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

               if(localStorage.getItem('subTotal')) return localStorage.getItem('subTotal');

               else return '0' ;
    },

    getTotal : function(){
         if(localStorage.getItem('Total')) return localStorage.getItem('Total');

         else return '0'


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
