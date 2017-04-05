angular.module('starter.controllers', ['ngStorage'])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.choices = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.menuItems = Chats.get($stateParams.choiceId);
})

.controller('CustomizationsCtrl', function($scope,$stateParams,$location,$localStorage,
    $sessionStorage,Local) {

   $scope.itemId = $stateParams.itemId
   $scope.addToCart = function(itemId){   
   
   var order = {"itemId": $scope.itemId , "itemQuantity": "1"};
  
  /*
   Storage.prototype.setObj = function(key, value) {
    this.setItem(key, JSON.stringify(value));
   }

   Storage.prototype.getObj = function(key) {
    var value = this.getItem(key);
    return JSON.parse(value);
   }
 
 */
    // add to cart to be implemented (local storage)
   //$sessionStorage.order = $sessionStorage.order || 0
   // $sessionStorage.order = order;  
   // local storage array
   /* var cartArray = [];
   
      if(localStorage.getObj('cart')!=null){
       cartArray = localStorage.getObj('cart') ;
       //update the cart array with new entry
       // cartArray.push(order);
      localStorage.setObj('cart',order);
    }
    else {
       cartArray.push(order);
       localStorage.setObj('cart',order);
     }

      alert(localStorage.getObj('cart'));
*/


   Local.set(order);
   alert(Local.get());

   $location.path('/tab/menu');

  }; 
})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('CheckoutCtrl', function($scope,Local) {
  
  $scope.fullOrder = Local.get();

});

