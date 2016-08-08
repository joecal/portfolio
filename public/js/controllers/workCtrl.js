angular.module('WorkCtrl', []).controller('WorkController', ['$scope','$location', function($scope, $location) {

  $scope.currentPath = function(){
    $scope.location = $location.path()
    return $scope.location
  }

}]);
