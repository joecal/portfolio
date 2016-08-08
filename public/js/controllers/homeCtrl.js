// public/js/controllers/HomeCtrl.js
angular.module('HomeCtrl', []).controller('HomeController', ['$scope','$location', function($scope, $location) {

  $scope.currentPath = function(){
    $scope.location = $location.path()
    return $scope.location
  }

}]);
