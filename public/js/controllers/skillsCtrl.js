angular.module('SkillsCtrl', []).controller('SkillsController', ['$scope','$location', function($scope, $location) {

  $scope.currentPath = function(){
    $scope.location = $location.path()
    return $scope.location
  }

}]);
