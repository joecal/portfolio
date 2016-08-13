"use strict";

(function(){
  angular
  .module("portfolioApp", [
    "ui.router",
    "ngResource",
    "ngAnimate",
    "HomeCtrl",
    "AboutCtrl",
    "ContactCtrl",
    "SkillsCtrl",
    "WorkCtrl",
    "ContactService"
  ])
  .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", RouterFunction])
  .controller('mainCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.currentPath = function(){
      $scope.location = $location.path()
      return $scope.location
    }
  }])

  function RouterFunction($stateProvider, $locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state("homePage", {
      url: "/",
      views: {
        "master": {
          templateUrl: "../views/home/home.html",
          controller: "HomeController",
          controllerAs: "HomeVM"
        }
      }
    })
    .state("about", {
      url: "/about",
      views: {
        "master": {
          templateUrl: "../views/about/about.html",
          controller: "AboutController",
          controllerAs: "AboutVM"
        },
        "content@about": {
          templateUrl: "../views/about/_aboutContent.html"
        },
        "sidebar@about": {
          templateUrl: "../views/about/_aboutSidebar.html"
        },
        "navbar@about": {
          templateUrl: "../views/_navbar.html"
        }
      }
    })
    .state("contact", {
      url: "/contact",
      views: {
        "master": {
          templateUrl: "../views/contact/contact.html",
          controller: "ContactController",
          controllerAs: "ContactVM"
        },
        "content@contact": {
          templateUrl: "../views/contact/_contactContent.html"
        },
        "sidebar@contact": {
          templateUrl: "../views/contact/_contactSidebar.html"
        },
        "navbar@contact": {
          templateUrl: "../views/_navbar.html"
        }
      }
    })
    .state("skills", {
      url: "/skills",
      views: {
        "master": {
          templateUrl: "../views/skills/skills.html",
          controller: "SkillsController",
          controllerAs: "SkillsVM"
        },
        "content@skills": {
          templateUrl: "../views/skills/_skillsContent.html"
        },
        "sidebar@skills": {
          templateUrl: "../views/skills/_skillsSidebar.html"
        },
        "navbar@skills": {
          templateUrl: "../views/_navbar.html"
        }
      }
    })
    .state("work", {
      url: "/work",
      views: {
        "master": {
          templateUrl: "../views/work/work.html",
          controller: "WorkController",
          controllerAs: "WorkVM"
        },
        "content@work": {
          templateUrl: "../views/work/_workContent.html"
        },
        "sidebar@work": {
          templateUrl: "../views/work/_workSidebar.html"
        },
        "navbar@work": {
          templateUrl: "../views/_navbar.html"
        }
      }
    })
    .state("otherwise", {
      url : '/'
    });
  }
})();
