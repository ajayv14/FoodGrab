/**
 * Created by ajayv on 4/9/2017.
 */
angular.module('app',[])

.controller('mainController',function($scope){
})


.controller('ordersCurrentController',function($scope,$http,$window,$rootScope){
/*Not Exposed*/
 $http.get('/AllOrders/status/open').then(function (res) {
    $scope.allOrders = res.data;
 });

  $scope.playAudio = function(){
     var audio =  document.getElementById("audioAlert");
     audio.play();
  };

  $scope.viewOrderDetails = function(refNumber){
    var audio =  document.getElementById("audioAlert");
    audio.pause();
    audio.currentTime = 0;

    localStorage.setItem('currentOrderReference',JSON.stringify({refNumber : refNumber}));

    var redirectURl = '/OrderDetails';
    $window.open(redirectURl);

  };

})

.controller('ordersHistoryController',function($scope,$http,$window){
    /*Not Exposed*/
    $http.get('/AllOrders/status/closed').then(function (res) {
      $scope.closedOrders = res.data;
    });


    $scope.viewOrderDetails = function(refNumber){
      localStorage.setItem('currentOrderReference',JSON.stringify({refNumber : refNumber}));

      var redirectURl = '/OrderDetails';
      $window.location.href = redirectURl;

    };

  })

.controller('ordersInProgressController',function($scope,$http,$window){
    $http.get('/AllOrders/status/InProgress').then(function (res) {
       $scope.inProgressOrders = res.data;
  });

  $scope.viewOrderDetails = function(refNumber){
    localStorage.setItem('currentOrderReference',JSON.stringify({refNumber : refNumber}));
    var redirectURl = '/OrderDetails';
    $window.location.href = redirectURl;
  };
})

.controller('orderdetailController',function($scope,$http,$window,$rootScope){

 // $scope.tmp = $rootScope.ref;
    var refParam = JSON.parse(localStorage.getItem('currentOrderReference')).refNumber;
  localStorage.removeItem('currentOrderReference');

  orderDetailsURL = '/AllOrders/ref/'+refParam;

    $http.get(orderDetailsURL).then(function (res) {
     $scope.orderDetail = res.data;

  });

   $scope.confirmStatus = function(refNumber){

     $http.post('/UpdateOrderStatus',JSON.stringify({refNumber : refNumber,status : 'InProgress'}),function (err,res) {
       if(err) console.log('post error' +err);
       else $scope.response = 'Thank you for updating status';
     });

     //$window.open('/OrdersInProgress');
     $window.location.href = '/OrdersInProgress';
  };

  $scope.completedStatus = function(refNumber){

    $http.post('/UpdateOrderStatus',JSON.stringify({refNumber : refNumber,status : 'closed'}),function (err,res) {
      if(err) console.log('post error' +err);
      else $scope.response = 'Thank you for updating status to closed';
    });

    $window.location.href = '/OrdersHistory';
  };


});

