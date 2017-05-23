angular.module('starter.controllers', [])



.controller('TabCtrl', function($scope) {
    //default badge value
    $scope.$root.badgeCount = 0;
})

.controller('ChatsCtrl', function($scope, Menu) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.choices = Menu.all();
  $scope.remove = function(choice) {
    Menu.remove(choice);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Menu) {
  $scope.menuItems = Menu.get($stateParams.choiceId);
})

.controller('CustomizationsCtrl', function($scope,$timeout,$stateParams,$location,Local,Menu,Price) {

   $scope.itemId = $stateParams.itemId
   $scope.itemDetails = Menu.getSpecific($scope.itemId);
  //alert('itemDetails'+$scope.itemDetails);
   $scope.itemQuantity = 1; // default quantity


   $scope.addToCart = function(itemId,splInstructions){

      var order = {'itemId': $scope.itemDetails.item_Id,'name':$scope.itemDetails.name,'itemQuantity':$scope.itemQuantity,img:$scope.itemDetails.img, 'specialInstructions' :splInstructions, cost :$scope.itemQuantity*$scope.itemDetails.cost };
      //compute and update total cost
      Price.set(order.cost);

      var redundantItem = false;
      redundantItem = Local.set(order);
      $scope.itemQuantity = '1';// set item quantity to default
      //alert(Local.get());

      if(redundantItem == false) $scope.$root.badgeCount++;
          $location.path('/tab/menu');

  };


   $scope.itemQuantityIncrement = function(){
       $scope.itemQuantity++;
   };

   $scope.itemQuantityDecrement = function(){
     if($scope.itemQuantity>1) $scope.itemQuantity--;
   };

 })

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('CheckoutCtrl', function($scope,Local,Price,$http,$location,$ionicHistory) {

  $scope.refNumber = 'AJY-'+Math.random().toString(36).substring(7).toUpperCase();
  $scope.fullOrder = Local.get();
  //alert( $scope.fullOrder.length + Local.get());
  $scope.$root.badgeCount = $scope.fullOrder.length;


  $scope.subCost = Price.getSubTotal();
  $scope.totalCost = Price.getTotal();

  $scope.removeItem = function(itemId){

       Local.remove(itemId);
       $scope.fullOrder = Local.get(); // update order
       $scope.subCost = Price.getSubTotal();  //update subtotal
       $scope.totalCost = Price.getTotal();
       $scope.totalCost = Price.getTotal();
       $scope.$root.badgeCount--;

  };

   $scope.placeOrder = function(customerEmail,customerPhone,customerAddress,customerName,refNumber){
  var orderData = Local.get();
  var objData =  {

     ordersItems : orderData,
      customerName : customerName,
       customerPhone : customerPhone,
        customerAddress : customerAddress,
         customerEmail : customerEmail,
           refNumber : refNumber

}
    /*Local Storage Session to store email /phone */
     localStorage.removeItem('customerEmail');
     localStorage.removeItem('customerPhone');

     if(customerEmail=='') {
          localStorage.setItem('customerEmail','none');
     }
     else {
           localStorage.setItem('customerEmail',customerEmail);
     }

     if(customerPhone=='') {
            localStorage.setItem('customerPhone','none');
     }
     else {
             localStorage.setItem('customerPhone',customerPhone);
     }




       $http.post('http://10.0.0.185:3000/PlaceOrder',JSON.stringify(objData),function (err,res) {
           if(err) console.log('post error' +err);
      //     alert('thyank you, order submitted' + objData);
    }).then(function(req,res){
           /*Clear Cart*/
           Local.clear();
          //$ionicHistory.clearCache();
          $location.path('/tab/orders');


    });

};

})

.controller('OrdersCtrl', function($scope,$http) {

    if(localStorage.getItem('customerEmail')!=='none'){
         var emailURL = 'http://10.0.0.185:3000/AllOrders/email/'+localStorage.getItem('customerEmail');
         $http.get(emailURL).then(function (res) {
             $scope.orders = res.data;
          });
    }

    else if (localStorage.getItem('customerPhone')!=='none') {
       var phoneURL = 'http://10.0.0.185:3000/AllOrders/phone/'+localStorage.getItem('customerPhone');
      $http.get(phoneURL).then(function (res) {
          $scope.orders = res.data;
       });
    }

    else $scope.displayInputFlagRet = 'true';



});
