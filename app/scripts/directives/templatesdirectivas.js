'use strict';

var app = angular.module('templatesDirectivas', []);

app.directive('sideBar', function(){
	return{
		restrict: 'E',
		templateUrl: 'views/side-bar.html'
	}
});

app.directive('home', function(){

	return {
		restrict: 'E',
		templateUrl: 'views/home.html'
	};
});

app.directive('services', function(){
	return{
		restrict: 'E',
		templateUrl: 'views/services.html'
	};
});

app.directive('about', function(){
	return{
		restrict: 'E',
		templateUrl: 'views/about.html'
	};
});

app.directive('showcase', function(){
	return{
		restrict: 'E',
		templateUrl: 'views/showcase.html'
	};
});

app.directive('contactUs', function(){
	return{
		restrict: 'E',
		templateUrl: 'views/contact-us.html'
	}
});

//directivas showcase

app.directive('tabsShowcase', function(){
	return{
		restrict: 'E',
		templateUrl: 'views/tabsShowcase.html'
	}
});


app.directive('galeriaShowcase', function(){
	return{
		restrict: 'E',
		templateUrl: 'views/galeriaShowcase.html'
	}
});


app.directive('galeriaModelShowcase', function(){
	return{
		restrict: 'E',
		templateUrl: 'views/galeriaModalShowcase.html'
	}
});