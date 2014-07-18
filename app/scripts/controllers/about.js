'use strict';

/**
 * @ngdoc function
 * @name axelWebAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the axelWebAngularApp
 */
angular.module('axelWebAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
