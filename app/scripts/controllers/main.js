'use strict';

/**
 * @ngdoc function
 * @name axelWebAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the axelWebAngularApp
 */
 var app = angular.module('axelWebAngularApp',["templatesDirectivas", "ngAnimate", 'duScroll','angular-loading-bar'])
 .value('duScrollDuration', 1000);

 app.controller('GaleriaController', ['$scope', '$http',
 	function($scope, $http){

 		$scope.date = new Date();

 		$scope.motivo = "cumpleanios";
 		$scope.done= false;

 		ObtenerJSON($scope.motivo);

 		function ObtenerJSON (motivo){
 			$http.get('json/'+motivo+'.json').success(function(data) {
 				$scope.imagenes = data;
 			}).error(function(data){
 				console.log('Error:' + data);
 			});
 		};

 		$scope.ObtenerImagenes =  function(value){

 			if(value == '1')
 			{
 				$scope.motivo = "cumpleanios";
 			}

 			$scope.motivo= value;
 			$scope.done= true;
 			ObtenerJSON($scope.motivo);
 		};
 	}
 	]);

 app.controller("TabController", function() {
 	this.tab = 1;

 	this.tabs = [
 			{ name: 'Cumpleaños', file: 'cumpleanios', op: 1 },
 			{ name: 'Publicidad', file: 'publicidad', op: 2 },
 			{ name: 'Amor', file: 'amor', op: 3 },
 			{ name: 'Otros', file: 'otros', op: 4 },
 			{ name: 'Dibujos', file: 'dibujos', op: 5 }
 		]

 	this.isSet = function(checkTab) {
 		return this.tab === checkTab;
 	};

 	this.setTab = function(setTab) {
 		this.tab = setTab;
 	};
 });

