/**
 * Created by ajayv on 4/9/2017.
 */
angular.module('app',[])

.controller('mainController',function($scope){
})


.controller('ordersController',function($scope,$http){

 $http.get('/AllOrders').then(function (res) {
    $scope.allOrders = res.data;
 });

  $scope.playAudio = function(){
     var audio =  document.getElementById("audioAlert");
     audio.play();
  };

  $scope.pauseAudio = function(){
    var audio =  document.getElementById("audioAlert");
    audio.pause();
    audio.currentTime = 0;
  };

})

.controller('orderdetailController',function($scope,$http){

});
