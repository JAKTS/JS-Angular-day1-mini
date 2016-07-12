angular.module('friendList').controller('mainCtrl', function($scope){
   $scope.friends = ['Wally', 'Ammon', 'Josh', 'Adam', 'Dan'];
   $scope.addFriend = function(arr){
     var arrAdd = arr.push();
     return arrAdd;
   };

   $scope.addFriend($scope.friends);
});
