'use strict';

/**
 * @ngdoc overview
 * @name axelWebAngularApp
 * @description
 * # axelWebAngularApp
 *
 * Main module of the application.
 */
angular
  .module('axelWebAngularApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
