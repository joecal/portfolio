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
  .config(["$stateProvider", "$locationProvider", RouterFunction]);

    function RouterFunction($stateProvider, $locationProvider){
      $locationProvider.html5Mode(true);
      $stateProvider
      .state("homePage", {
        url: "/",
        templateUrl: "../views/home.html",
        controller: "HomeController",
        controllerAs: "HomeVM"
      })
      .state("aboutPage", {
        url: "/about",
        templateUrl: "../views/about.html",
        controller: "AboutController",
        controllerAs: "AboutVM"
      })
      .state("contactPage", {
        url: "/contact",
        templateUrl: "../views/contact.html",
        controller: "ContactController",
        controllerAs: "ContactVM"
      })
      .state("skillsPage", {
        url: "/skills",
        templateUrl: "../views/skills.html",
        controller: "SkillsController",
        controllerAs: "SkillsVM"
      })
      .state("workPage", {
        url: "/work",
        templateUrl: "../views/work.html",
        controller: "WorkController",
        controllerAs: "WorkVM"
      });
  }
})();
