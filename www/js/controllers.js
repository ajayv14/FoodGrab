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

.controller('CheckoutCtrl', function($scope,Local,Price,$http) {

  $scope.refNumber = 'AJY-'+Math.random().toString(36).substring(7).toUpperCase();
  $scope.fullOrder = Local.get();
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

  $scope.placeOrder = function(customerEmail,customerPhone,customerAddress,customerName){

        
       for (var r = 0; r < dat.length; r++) {

           r.itemId
            r.name
             r.itemQuantity
              r.specialInstructions
               r.cost

        }







       var url = 'http://192.168.56.1:3000/PlaceOrder';
//     alert(JSON.stringify(Local.get()));
       var dat = Local.get();

       var HTMLdat = "";

       for (var s = 0; s < dat.length; s++) {



          HTMLdat += "<p> ID : "+s.itemId+"</p>" +
           "<p> Name : "+s.name+"</p>" +
           "<p> Quantity : "+s.itemQuantity+"</p>" +
           "<p> Special Instructions : "+s.specialInstructions+"</p>" +
           "<p> Price : "+s.cost+"</p>";

        }

     // $http.post(url,dat).then(function (res){
//              $scope.response = res.data;
  //      });


alert(HTMLdat);
      // mail
      var aws = require('aws-sdk');
      var ses = new aws.SES({"accessKeyId": "AKIAIBVA4NMDSLM3R4EA", "secretAccessKey": "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", "region": "us-west-2"});
      var eparam = {
                     Destination: {
                        ToAddresses: ["ajay.v14@gmail.com"]
                   },
                     Message: {
                        Body: {
                          Html: {
                                  Data: HTMLdat.toString() +

                                         "</br>" +

                                   "<p> Customer Name : "+customerName+"<p>" +  "</br>" +

                                    "<p> Phone Number : "+customerPhone+"<p>" +  "</br>" +

                                     "<p> Delivery Address : "+customerAddress+"<p>" +  "</br>"

                                },
                          Text: {
                                  Data: dat
                                }
                              },
                        Subject: {
                                  Data: "New Food Delivery Order - " + $scope.refNumber +" "
                                }
                              },
                        Source: "ajay.v14@gmail.com",
                         ReplyToAddresses: ["ajay.v14@gmail.com"],
                           ReturnPath: "ajay.v14@gmail.com"
                    };

                  ses.sendEmail(eparam, function (err, data) {
                    if (err) console.log(err);
                         else console.log(data);
                        });

                  //Clear the car after order is placed
                   Local.clear();
                   $scope.$root.badgeCount = 0; // set badge count back to zero

 };






});
