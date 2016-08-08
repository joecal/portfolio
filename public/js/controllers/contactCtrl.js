angular.module('ContactCtrl', []).controller('ContactController', ['$scope','$location', function($scope, $location) {

  $scope.currentPath = function(){
    $scope.location = $location.path()
    return $scope.location
  }

}]);
