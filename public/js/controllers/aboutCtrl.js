angular.module('AboutCtrl', []).controller('AboutController', ['$scope','$location', function($scope, $location) {

  $scope.currentPath = function(){
    $scope.location = $location.path()
    return $scope.location
  }
}]);
