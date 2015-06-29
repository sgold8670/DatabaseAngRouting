var scotchTodo = angular.module('scotchTodo', ['ngRoute']);

scotchTodo.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl:'views/home.html',
			controller:'HomeController'
		})
		.when('/contacts',{
			templateUrl:'views/contact.html',
			controller:'ContactController'
		})
		.when('/main',{
			templateUrl: 'views/main.html'	
		});
	//$locationProvider.html5Mode(true);	
}]);